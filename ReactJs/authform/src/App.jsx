import { Fragment } from "react";

import "./App.css";
import AuthForm from "./Components/AuthForm";
import { ToastContainer} from "react-toastify";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <div>
        <AuthForm></AuthForm>
      </div>
    </Fragment>
  );
}

export default App;
