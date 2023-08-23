import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function EmptyLayout({ title, description, keywords, children }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <div className="">
        <main
          style={{
            // minHeight: "80vh",
          }}
        >
          {children}
        </main>
      </div>
    </HelmetProvider>
  );
}

export default EmptyLayout;
