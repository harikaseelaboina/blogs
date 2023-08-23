import React, { lazy } from "react";
import EmptyLayout from "../components/layout/EmptyLayout";

const Particles = lazy(() => import("../components/particles"));

function Page404() {
  return (
    <EmptyLayout title={"HomzNOffiz - Page Not Found"}>
      <div
        className="d-flex justify-content-center align-items-center text-white text-center"
        style={{
          height: "100vh",
        }}
      >
        <div
          className=" position-absolute opacity-25 fw-bolder"
          style={{
            fontSize: "250px",
            zIndex: -1,
          }}
        >
          <div>404</div>
        </div>
        <div>
          <div className="text-uppercase ">
            <h1 className="fs-1 fw-bolder ">we are sorry, page not found</h1>
            <p>the page you are looking for is under construction</p>
            <a
              href="/"
              className="btn btn-primary btn-sm text-uppercase rounded-5 fw-semibold border-0 opacity-75 "
            >
              back to home
            </a>
          </div>
        </div>
        <div>
          <Particles />
        </div>
      </div>
    </EmptyLayout>
  );
}

export default Page404;
