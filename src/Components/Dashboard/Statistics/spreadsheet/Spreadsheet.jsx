import React, { useState } from "react";
import { read, utils } from "xlsx";
import styles from "./Spreadsheet.module.css";

const Spreadsheet = () => {
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleImport = (e) => {
    const files = e.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const wb = read(e.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setHeaders([...Object.keys(rows[0])]);
          setRows(rows);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      <label className={`${styles["custom-file-upload"]}`}>
        Upload a single file
        <input
          type="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleImport}
          multiple={true}
          className={`${styles["file-input"]}`}
        />
      </label>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              {headers.map((header, ind) => (
                <th key={ind}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length ? (
              rows.map((row, ind) => {
                return (
                  <tr key={ind}>
                    {headers.map((header, indInner) => (
                      <td key={indInner}>{row[header]}</td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No files uploaded.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Spreadsheet;
