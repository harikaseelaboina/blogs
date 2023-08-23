import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./Services.css";
import OneDestination from '../Services/Onedestination/OneDestination'

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi-prod.homznoffiz.com/api/services?filters[tag][$eq]=our_services&populate=*"
        );        
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [otherdata, setOtherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi-prod.homznoffiz.com/api/services?filters[tag][$eq]=other_services&populate=*"
        );        
        setOtherData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const finaldata = [...data, ...otherdata];

  return (
    <div>
      <div className="heading rounded-start-4 d-flex flex-row justify-content-between">
        <span className="title text-black fs-5 fw-bolder" style={{ fontSize: "140%" }}>
          One Destination - Endless Possibilities
        </span>
      </div>

      {/* <div className="section1">
        <div className="ourservicemain" style={{ height: "100%" }}>
          {finaldata.map((item, index) => (
            <div
              className="card-container"
              style={{ color: "whitesmoke", height: "80%", margin: "1rem" }}
              key={index}
            >
              <div
                className="d-inline-flex"
                style={{
                  backgroundColor: "#0e1420",
                  padding: "10px",
                  width: "100%",
                  height: "100%",
                  boxShadow: "2px 2px 3px 2px #1252ae",
                  borderRadius: "20px",
                  color: "white",
                  transition:
                    "transform 0.2s, boxShadow 0.2s, backgroundColor 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "2px 2px 2px 2px white";
                  e.currentTarget.style.backgroundColor = "#010b14";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "2px 2px 2px 2px #1252ae";
                  e.currentTarget.style.backgroundColor = "#0e1420";
                }}
              >
                <div
                  style={{
                    width: "40%",
                    height: "55%",
                    margin: "1px",
                    marginRight: "12px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.attributes?.icon?.data?.attributes?.url}
                    className="card-img-top"
                    alt={`Image ${index + 1}`}
                    style={{ height: "100%", width: "100%", margin: "5px" }}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <a
                    href={item.attributes?.link}
                    className="card-title"
                    style={{ textDecoration: "none" }}
                  >
                    <h5 className="">{item.attributes?.service_name}</h5>
                  </a>
                  <ul
                    className="listsym"
                    style={{ margin: "10px", padding: 0 }}
                  >
                    {item.attributes?.features?.features
                      ?.slice(0, 2)
                      .map((feature, index) => (
                        <li style={{ fontSize: "12px" }} key={index}>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <OneDestination/>
    </div>
  );
};

export default Services;
