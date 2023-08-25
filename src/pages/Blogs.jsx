import React from "react";
import Layout from "../components/layout/Layout";
import Cards from "../components/blogs/Cards";
import { useLocation } from "react-router-dom";

function Blogs() {
  const location = useLocation();
  const displaydata = location.state?.data;
  const title = location.state?.title;
  // console.log(`blogsdata`)
  // console.log(displaydata)
  return (
    <Layout title="HomzNOffiz - List of Blogs">
      <div>
        {displaydata.length > 0 ? (
          <div
            className="p-3 rounded-start-4 "
            style={{
              // background:
              //   "linear-gradient(to right, #1A2333, #1A2333, #0e14203d)",
            }}
          >
            <h4 className="m-0 fs-5 fw-bold">{title}</h4>
          </div>
        ) : (
          <></>
        )}

        <div className="row mx-0 ">
          {/* <Cards
            css={"my-4 col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"}
            data={displaydata}
          /> */}

          {displaydata.length > 0 ? (
            <Cards
              css={"my-4 col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"}
              data={displaydata}
            />
          ) : (
            <div
              className="text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "10rem",
              }}
            >
              <h1 style={{ color: "#9499a1" }} className="fs-4">
                Data will be updated soon...
              </h1>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
