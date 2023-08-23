import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import CustomContextApi from "./components/context/CustomContextApi.jsx";

const Loader = lazy(() => import("./components/loader"));
const ErrorFallback = lazy(() => import("./components/error/index.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<Loader />}>
          <CustomContextApi>
            <App />
            <ToastContainer />
          </CustomContextApi>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
