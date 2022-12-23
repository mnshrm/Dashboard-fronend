import { useContext } from "react";
import Form from "./Components/Authentication/Form";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserContext from "./Store/UserContext";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./App.module.css";

function App() {
  const ctx = useContext(UserContext);

  return (
    <div>
      {ctx.loading && (
        <div className={styles.spinner}>
          <ClipLoader
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {ctx.user.isAuthenticated ? <Dashboard /> : <Form />}
    </div>
  );
}

export default App;
