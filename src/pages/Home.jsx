import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MyHome from "../components/home/BlogPage";
import { BlogsContext } from "../components/context/CustomContextApi";

function Home() {
  const { homedata } = useContext(BlogsContext);

  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (homedata && homedata.data) {
      let d = "";
      let k = "";
      homedata.data.map((item) => {        
        k += item.attributes.main_title + "," + item.attributes.slug_name + ",";
        d += item.attributes.blog_info.main_content + ",";        
      });
      setKeywords(k);
      setDescription(d)
    }

    return () => {};
  }, [homedata]);

  return (
    <Layout
      title="HomznOffiz Blogs - Indias No.1 Real Estate Information Center"
      description={description}
      keywords={keywords}
      noheader
    >
      <MyHome />      
    </Layout>
  );
}

export default Home;
