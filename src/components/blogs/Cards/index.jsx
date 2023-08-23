import React, { useState } from "react";
import "./index.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Cards(props) {
  const css = props.css;
  const data = props.data;

  // console.log(`cradsdata`)
  // console.log(data)
  // console.log(css)

  const itemsPerPage = 20; // Number of items to display per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData =
    data && Array.isArray(data) ? data.slice(startIndex, endIndex) : [];

  const totalPages =
    data && Array.isArray(data) ? Math.ceil(data.length / itemsPerPage) : 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid-container">
        {currentPageData.map((item, index) => (
          <a href={`/details/${item.id}`} key={index} className="grid-item">
            <div
              key={index}
              className="rounded-3 pb-1 text-white"
              style={{
                background: "#1A2333",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "13rem",
                }}
                className="card-img-top rounded-top-3"
                src={
                  item?.attributes?.blog_info?.image?.data?.[0]?.attributes?.url
                }
                alt="Card image cap"
              />
              <div
                className="card-body mx-3 my-1"
                style={{
                  textAlign: "justify",
                  height: "170px",
                }}
              >
                <h5
                  className="card-title my-2 crop-text-1 fw-bold "
                  style={{
                    fontSize: "16px",
                  }}
                >
                  {/* <ReactMarkdown
                    children={item.attributes.main_title.slice(0, 40)}
                    remarkPlugins={[remarkGfm]}
                  /> */}
                  {item.attributes.main_title.slice(0, 40)}...
                </h5>
                <p
                  className="card-text crop-text-2"
                  style={{
                    fontSize: "13px",
                  }}
                >
                  {/* <ReactMarkdown
                    children={item?.attributes?.blog_info?.main_content.slice(
                      0,
                      80
                    )}
                    remarkPlugins={[remarkGfm]}
                  /> */}
                  {item?.attributes?.blog_info?.main_content.slice(0, 240)}
                </p>
              </div>
              {/* <div className="m-2" style={{marginTop:"10px"}}>
                <div className=" d-flex justify-content-between ">
                  <div className="d-flex align-items-center">
                    &nbsp;
                    <div
                      className=""
                      style={{
                        fontSize: "10px",
                      }}
                    >
                      {item.attributes?.blog_info?.published_date}
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="m-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div style={{ width: "35px", height: "35px" }}>
                      <img
                        src={
                          item.attributes?.authors?.data?.[0]?.attributes
                            ?.author_image?.data?.attributes?.url
                        }
                        className="rounded-circle"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        alt="Sample image"
                      />
                    </div>
                    &nbsp;
                    <div
                      className="d-flex flex-column"
                      style={{
                        lineHeight: "1.2",
                        fontSize: "12px",
                      }}
                    >
                      <span className="fw-bold" style={{ marginBottom: "5px" }}>
                        {
                          item?.attributes?.authors?.data?.[0]?.attributes
                            ?.author_name
                        }
                      </span>
                      <span style={{ fontSize: "10px",fontWeight:"bold" }}>
                        {item.attributes?.blog_info?.published_date}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex"
                      style={{ width: "18px", height: "18px" }}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJXjDyNNpvAilzRdqBDaZ27dQ8IdXkTCpfVIYrU8rmmwNnxeL6WmukGQQkLfgaKsN3J8&usqp=CAU"
                        className="rounded-circle"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        alt="Sample image"
                      />
                    </div>
                    &nbsp;
                    <div
                      className=""
                      style={{
                        fontSize: "10px",
                      }}
                    >
                      {item?.attributes?.blog_info?.read_time} min
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* Pagination */}
      {
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <nav aria-label="Page navigation example" style={{}}>
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label="Previous"
                  style={{
                    paddingTop: "12px",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    border: "0px",
                    color: "#474752",
                  }}
                >
                  <span aria-hidden="true">&laquo;</span>
                  {/* <span className="sr-only">Previous</span> */}
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                    style={{
                      fontWeight: "bolder",
                      borderRadius: "50px",
                      margin: "10px",
                      fontSize: "15px",
                      color: "white",
                      background:
                        currentPage === index + 1 ? "#0896c9" : "#1A2333",
                      border: "0",
                    }}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-label="Next"
                  style={{
                    paddingTop: "12px",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    border: "0px",
                    color: "#474752",
                  }}
                >
                  {/* <span className="sr-only">Next</span> */}
                  <span
                    aria-hidden="true"
                    style={{ padding: "10px", fontWeight: "bold" }}
                  >
                    &raquo;
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      }
    </div>
  );
}

export default Cards;
