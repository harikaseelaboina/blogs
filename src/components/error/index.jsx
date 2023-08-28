import { lazy } from "react";
import EmptyLayout from "../layout/EmptyLayout";

const Particles = lazy(() => import("../particles"));

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <EmptyLayout title={"HomzNOffiz - Something Went Wrong"}>
    <div
      className="d-flex flex-column justify-content-center align-items-center text-black text-center"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="opacity-75 fw-bolder text-uppercase "
        style={{
          fontSize: "50px",
          zIndex: -1,
        }}
      >
        <div>Something went wrong</div>
      </div>
      <div>
        <div className="text-uppercase ">
          <h1 className="fs-6 fw-bolder opacity-25 ">{error.message}</h1>
          <a
            href="/"
            className="btn btn-primary btn-sm text-uppercase rounded-5 fw-semibold border-0 opacity-75"
            onClick={resetErrorBoundary}
          >
            go to home
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-primary btn-sm text-uppercase rounded-5 fw-semibold border-0 opacity-75"
            onClick={resetErrorBoundary}
          >
            try again
          </button>
        </div>
      </div>
      <div>
        <Particles />
      </div>
    </div>
    </EmptyLayout>
  );
}
export default ErrorFallback;
