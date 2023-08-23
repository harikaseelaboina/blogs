import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Cards from "../components/blogs/Cards";
import { useParams } from "react-router-dom";
import { BlogsContext } from "../components/context/CustomContextApi";

function HeaderBlogs() {
  const { homedata } = useContext(BlogsContext);

  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams()

  const filteredData =
    homedata && homedata.data
      ? homedata.data.filter(
          (item) => item.attributes.sub_category === params.data
        )
      : [];

  useEffect(() => {
    if (filteredData) {
      let d = "";
      let k = "";
      filteredData.map((item) => {
        k +=
          item.attributes.main_title +
          "," +
          item.attributes.slug_name +
          "," +
          item.attributes.category +
          "," +
          item.attributes.sub_category;
        d += item.attributes.blog_info.main_content + ",";
      });
      setKeywords(k);
      setDescription(d);
    }

    // return () => {};
  }, [params, homedata]);

  return (
    <Layout
      title="HomzNOffiz - List of Blogs"
      description={description}
      keywords={keywords}
    >
      <div className="">
        {filteredData.length > 0 ? (
          <div
            className="p-3 rounded-start-4 "
            style={{
              // background:
              //   "linear-gradient(to right, #1A2333, #1A2333, #0e14203d)",
            }}
          >
            <h4 className="m-0 fs-5 fw-bold text-uppercase ">{params.data}</h4>{" "}
          </div>
        ) : (
          <></>
        )}

        <div className="row">
          {/* <Cards
            css={"my-4 col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"}
            data={filteredData}
          /> */}

          {filteredData.length > 0 ? (
            <Cards
              css={"my-4 col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"}
              data={filteredData}
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

export default HeaderBlogs;
