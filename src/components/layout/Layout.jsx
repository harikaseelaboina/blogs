import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import Header from "./Header";
import Header from "./Header/Header";
import Footer from "./Footer";
import MainFooter from "../MainFooter";


function Layout({ title, description, keywords, children, noheader }) {
  return (
    <HelmetProvider >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <div
        // className="main-container mx-lg-5 mx-md-2"
        className="main-container"
        style={{
          // margin: "0 2%",
          // border:"2px red solid"
        }}
      >
        {noheader ? null : <Header />}
        <main
          style={{
            minHeight: "80vh",
          }}
        >
          {children}
        </main>
        <Footer />
        <MainFooter/>
      </div>
    </HelmetProvider>
  );
}

export default Layout;
