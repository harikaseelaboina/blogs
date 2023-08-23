import React from "react";

const Links = ({ title, list, css }) => {
  return (
    <>
      <div className="linkContainer">
        <h4 className="text-primary">{title}</h4>
        <ul style={{ padding: "0", ...css }}>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <a href="/blog" className="text-light">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Links;
