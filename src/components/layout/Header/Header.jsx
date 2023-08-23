import Container from "react-bootstrap/Container";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import homeIcon from "../../../assets/blogsPage/Home.png";
import searchIcon from "../../../assets/blogsPage/searchIcon.svg";
import youtubeIcon from "../../../assets/blogsPage/youtube.gif";
import { FaCaretDown } from "react-icons/fa";
import "./header.css";
import { BlogsContext } from "../../context/CustomContextApi";

import { BiChevronRight } from "react-icons/bi";

const showInputBox = () => {
  document.querySelector(".box1").classList.toggle("d-none");
  document.querySelector(".box2").classList.toggle("d-none");
};
const Header = () => {
  const blogNavLink = [
    {
      title: "Real Estate",
      id: "lable1",
      subLinks: [
        {
          link: "Indian Real Estate Landscape",
          to: "/",
        },
        {
          link: "Land Records",
          to: "/",
        },
        {
          link: "International Real Estate Landscape",
          to: "/",
        },
        {
          link: "Govt. Portal",
          to: "/",
        },
        {
          link: "Property Management",
          to: "/",
        },
        {
          link: "Legal & Tax",
          to: "/",
        },
        {
          link: "Rental Market in India",
          to: "/",
        },
        {
          link: "RERA",
          to: "/",
        },
      ],
    },
    {
      title: "RealtyTech",
      id: "lable2",
      subLinks: [
        {
          link: "AI-Enabled Real Estate",
          to: "/",
        },
        {
          link: "Immersive Real Estate",
          to: "/",
        },
        {
          link: "Decentralized Real Estate",
          to: "/",
        },
      ],
    },
    {
      title: "Lifestyle",
      id: "lable3",
      subLinks: [
        {
          link: "Interior & Furnishing",
          to: "/",
        },
        {
          link: "Vastu",
          to: "/",
        },
        {
          link: "Building Construction",
          to: "/",
        },
        {
          link: "Celebrity Homes",
          to: "/",
        },
        {
          link: "Smart City",
          to: "/",
        },
        {
          link: "Govt. Infra",
          to: "/",
        },
        {
          link: "Smart Homes",
          to: "/",
        },
        {
          link: "Monuments",
          to: "/",
        },
        {
          link: "Rural Housing",
          to: "/",
        },
        {
          link: "Packers & Movers",
          to: "/",
        },
      ],
    },
    {
      title: "Investments & Savings",
      id: "lable4",
      subLinks: [
        {
          link: "Home Loans",
          to: "/",
        },
        {
          link: "EPF",
          to: "/",
        },
        {
          link: "Jewels & Valuables",
          to: "/",
        },
        {
          link: "Insurance",
          to: "/",
        },
        {
          link: "PPF",
          to: "/",
        },
        {
          link: "Share Price",
          to: "/",
        },
        {
          link: "Saving Accounts",
          to: "/",
        },
        {
          link: "NPS",
          to: "/",
        },
        {
          link: "Union Budget",
          to: "/",
        },
        {
          link: "Current Account",
          to: "/",
        },
        {
          link: "FD",
          to: "/",
        },
        {
          link: "Stamp Duty",
          to: "/",
        },
        {
          link: "Cibil Score",
          to: "/",
        },
        {
          link: "GST",
          to: "/",
        },
        {
          link: "Tax",
          to: "/",
        },
        {
          link: "Stocks",
          to: "/",
        },
      ],
    },
    {
      title: "Govt ID’S",
      id: "lable5",
      subLinks: [
        {
          link: "Aadhaar Card",
          to: "/",
        },
        {
          link: "Birth Certificate",
          to: "/",
        },
        {
          link: "Domicile Certificate",
          to: "/",
        },
        {
          link: "PAN Card",
          to: "/",
        },
        {
          link: "Marriage Certificate",
          to: "/",
        },
        {
          link: "Police Verification Certificate",
          to: "/",
        },
        {
          link: "Passport & VISA",
          to: "/",
        },
        {
          link: "Employment ID Card",
          to: "/",
        },
        {
          link: "Disability ID Card",
          to: "/",
        },
        {
          link: "Voter ID Card",
          to: "/",
        },
        {
          link: "OCI Card",
          to: "/",
        },
        {
          link: "Pension ID Card",
          to: "/",
        },
        {
          link: "Driving License",
          to: "/",
        },
        {
          link: "Caste Certificate",
          to: "/",
        },
        {
          link: "Health Insurance Card",
          to: "/",
        },
        {
          link: "National ID Card",
          to: "/",
        },
        {
          link: "Disability Certificate",
          to: "/",
        },
        {
          link: "Investor ID Card",
          to: "/",
        },
        {
          link: "Ration Card",
          to: "/",
        },
        {
          link: "Senior Citizen Card",
          to: "/",
        },
        {
          link: "Ayushman Bharat Card",
          to: "/",
        },
      ],
    },

    {
      title: "Financial Measurements",
      id: "lable8",
      subLinks: [
        {
          link: "Area Calculator",
          to: "/",
        },
        {
          link: "Length Calculator",
          to: "/",
        },
        {
          link: "Volume Calculator",
          to: "/",
        },
        {
          link: "EMI Calculator",
          to: "/",
        },
        {
          link: "Currency Calculator",
          to: "/",
        },
        {
          link: "Mortgage Calculator",
          to: "/",
        },
        {
          link: "BMI Calculator",
          to: "/",
        },
        {
          link: "Retirement Calculator",
          to: "/",
        },
        {
          link: "Tax Calculator",
          to: "/",
        },
        {
          link: "Savings Calculator",
          to: "/",
        },
        {
          link: "Lease vs. Buy Calculator",
          to: "/",
        },
        {
          link: "Amortization Calculator",
          to: "/",
        },
        {
          link: "Investment Calculator",
          to: "/",
        },
        {
          link: "Time Zone Converter",
          to: "/",
        },
        {
          link: "GPA to Percentage Calculator",
          to: "/",
        },
        {
          link: "Body Fat Percentage Calculator",
          to: "/",
        },
        {
          link: "Wedding Budget Calculator",
          to: "/",
        },
        {
          link: "Inflation Calculator",
          to: "/",
        },
        {
          link: "Home Loan Eligibility Calculator",
          to: "/",
        },
      ],
    },
    {
      title: "Client Corner",
      id: "lable6",
      subLinks: [
        {
          link: "Buyer Guide",
          to: "/",
        },
        {
          link: "Seller Guide",
          to: "/",
        },
        {
          link: "Tenant Guide",
          to: "/",
        },
        {
          link: "NRI Guide",
          to: "/",
        },
      ],
    },
    {
      title: "Current Trends",
      id: "lable7",
      subLinks: [
        {
          link: "Current Matters",
          to: "/",
        },
        {
          link: "Awards & Recognition",
          to: "/",
        },
        {
          link: "Hot Blogs",
          to: "/",
        },
        {
          link: "Research",
          to: "/",
        },
        {
          link: "Media Coverage",
          to: "/",
        },
        {
          link: "Money Matters",
          to: "/",
        },
      ],
    },
    {
      title: "Startup Corner",
      id: "lable9",
      subLinks: [
        {
          link: "Startup Guide",
          to: "/",
        },
        {
          link: "Employee Guide",
          to: "/",
        },
        {
          link: "StartUp Ideas",
          to: "/",
        },
        {
          link: "Govt. Assistance",
          to: "/",
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const handleNavigate = (data) => {
    navigate(`/headerblogs/${data}`, { state: { data: data } });
  };

  // seacrh bar code
  const { homedata } = useContext(BlogsContext);

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchData = () => {
    const filteredData =
      homedata &&
      homedata.data?.filter((item) => {
        // title search
        const titleContainsSearch = item.attributes?.main_title
          .toLowerCase()
          .includes(searchInput.toLowerCase());
        // maincontent search
        const mainContainsSearch = item.attributes?.blog_info?.main_content
          .toLowerCase()
          .includes(searchInput.toLowerCase());
        //  whole content search
        const contentContainsSearch = item.attributes?.blog_info?.main_content
          .toLowerCase()
          .includes(searchInput.toLowerCase());

        return (
          titleContainsSearch || mainContainsSearch || contentContainsSearch
        );
      });

    const title = `Searched results for the keyword - " ${searchInput} "`;

    navigate(`/blogs/${title}`, {
      state: { data: filteredData, title: title },
    });
    // console.log(filteredData);
  };

  return (
    <>
      <Navbar expand="lg" className="blog_nav">
        <div className="cust_container w-100 d-flex justify-content-between ">
          <Navbar.Brand href="/" className="homeBtn ">
            <img
              src={homeIcon}
              style={{ height: "2.5rem", width: "2.5rem" }}
              alt="loading.."
            />
          </Navbar.Brand>
          <div className="d-flex align-items-center gap-1">
            <div className="right d-lg-none d-flex align-items-center justify-content-center gap-1">
              <div className="blog_search position-relative">
                <div
                  className="searchIcon d-flex align-items-center justify-content-center rounded-5"
                  onClick={showInputBox}
                >
                  <img src={searchIcon} alt="loading" />
                </div>
                <div className="box1 d-none">
                  <div className="blog_input d-flex align-items-center justify-content-center rounded-5">
                    <input
                      className="input text-white py-2 px-3"
                      type="text"
                      placeholder="Type anything to search..."
                      value={searchInput}
                      onChange={handleSearchInput}
                    />
                    <button
                      type="submit"
                      className="py-2 px-2 rounded-5 text-white fw-bold"
                      onClick={searchData}
                    >
                      <BiChevronRight size={25} />
                    </button>
                  </div>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@homznoffiz"
                target="_blank"
                className="youtubeLogo"
              >
                <img src={youtubeIcon} alt="loading" width={50} height={50} />
              </a>
            </div>
            <div className="toggleMenu d-lg-none d-block">
              <Navbar.Toggle
                className="toggle_menu"
                aria-controls={`offcanvasNavbar-expand-lg`}
              />
            </div>
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            style={{ backgroundColor: "#1a2333" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-lg`}
              ></Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav
                className="align-items-lg-center flex-wrap navcant"
                style={{
                  // display: "flex",
                  // flexDirection: "row",
                  // justifyContent: "space-between",
                  width: "91%",

                  // border: "2px red solid",

                  marginLeft: "0",
                  marginRight: "0",
                }}
              >
                {blogNavLink.map((val, index) => {
                  const { title, subLinks, id } = val;
                  return (
                    <NavDropdown
                      title={
                        <span
                          style={{
                            // color: "#ebe8e1",
                            color: "white",
                            fontSize: "0.8rem",
                            // margin: "5px",
                            // fontWeight:"bold"
                          }}
                        >
                          {title}
                          <FaCaretDown />
                        </span>
                      }
                      // title={title}
                      className={`mt-lg-0 mt-2`}
                      id={`offcanvasNavbarDropdown-expand-lg`}
                      key={index}
                    >
                      <div
                        id={id}
                        className="custom-dropdown"
                        style={{
                          fontSize: "0.8rem",
                          // margin: "5px",
                          // fontWeight:"bold"
                        }}
                      >
                        {subLinks.map((val, index) => {
                          return (
                            // <NavDropdown.Item href={val.link}>
                            //   {val.link}
                            // </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => handleNavigate(val.link)}
                              key={index}
                              className="custom-dropdown-item text-white "
                            >
                              {val.link}
                            </NavDropdown.Item>
                            // <div className="col-6">{val.link}</div>
                          );
                        })}
                      </div>
                    </NavDropdown>
                  );
                })}
              </Nav>
              <div
                className="right d-lg-flex  d-none align-items-center  gap-1"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "8%",

                  // border: "2px red solid",

                  // marginLeft: "1rem",
                  marginRight: "0",
                }}
              >
                <div className="blog_search position-relative">
                  <div>
                    <div
                      className="searchIcon d-flex align-items-center justify-content-center rounded-5"
                      onClick={showInputBox}
                    >
                      <img src={searchIcon} alt="loading" />
                    </div>
                    <div className="box2 d-none">
                      <div className="blog_input d-flex align-items-center justify-content-center rounded-5">
                        <input
                          className="input text-white py-2 px-3"
                          type="text"
                          placeholder="Type anything to search..."
                          value={searchInput}
                          onChange={handleSearchInput}
                        />
                        <button
                          type="submit"
                          className="py-2 px-2 rounded-5 text-white fw-bold"
                          onClick={searchData}
                        >
                          <BiChevronRight size={25} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/@homznoffiz"
                  className="youtubeLogo"
                  // style={{marginLeft:"0.8rem"}}
                >
                  <img src={youtubeIcon} alt="loading" width={50} height={50} />
                </a>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    </>
  );
};
export default Header;
