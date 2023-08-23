import React, { useRef } from "react";
import "./index.css";
import LinkHoverIcon from "./LinkHoverIcon";
import appstore from "../../assets/mainFooter/appstore.png";
import playstore from "../../assets/mainFooter/playstore.png";
import footerimg1 from "../../assets/mainFooter/footer-img-1.png";
import footerimg2 from "../../assets/mainFooter/footer-img-2.png";
import axios from "axios";
import { toast } from "react-toastify";
import { mainWebsite } from "../../config";
import logo from "../../assets/mainFooter/foo logo.png";

const index = () => {
  const formRef = useRef();

  const onSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      axios
        .post(
          "https://rj7oitjr1l.execute-api.us-east-1.amazonaws.com/dev/write/tech@HomzNOffiz/HomzNOffiz@123/homznoffiz_website_data/subscribeEmail",
          {
            email: e.target.email.value,
          },
          {
            headers: {
              authToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55IjoiSG9tek5PZmZpeiIsImlhdCI6MTY5MDM2NTQyN30.RtVMBuberUfUT6pO4OkYE-3-eYGuUT3lTtn8MNpJna8",
            },
          }
        )
        .then((res) => {
          console.log("Subscribed");
          toast.success("Subscribed");
          formRef.current.reset();
        })
        .catch((err) => {
          console.log("Error");
        });
    }
  };

  const social = [
    {
      name: "Instagram",
      icon: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
      link: "https://www.instagram.com/homznoffiz/",
    },
    {
      name: "LinekdIn",
      icon: "https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png",
      link: "https://www.linkedin.com/company/homznoffiz/",
    },
    {
      name: "Facebook",
      icon: "https://img.icons8.com/?size=512&id=uLWV5A9vXIPu&format=png",
      link: "https://www.facebook.com/homznoffiz/",
    },
    {
      name: "Twitter",
      icon: "https://img.icons8.com/?size=512&id=5MQ0gPAYYx7a&format=png",
      link: "#",
    },
    {
      name: "Threads",
      icon: "https://seeklogo.com/images/T/threads-by-instagram-logo-20008C5295-seeklogo.com.png?v=638243447960000000",
      link: "#",
    },
  ];

  return (
    <>
      <footer>
        <div className="footer_main_container">
          <div className="footer_inner_container">
            {/* Row #1 */}
            <div className="row row1">
              {/* Nav Links */}
              <div className="hnz_navLinks">
                <div className="col-nav-1">
                  <h4 className="nav-heading">Company</h4>
                  <ul>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                        id="how-it-works"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">How it Work</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">Customers</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">Our Story</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">Career</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">Contact Us</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">FAQs</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-nav-2">
                  <h4 className="nav-heading">Support & Summary</h4>
                  <ul>
                    <li>
                      <a
                        href={`${mainWebsite}/all-properties`}
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">
                          Buy Properties
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://rentnresale.com/"
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">
                          Rent or Resale
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav-link">
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">Blogs</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">Help Center</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">
                          Term Condition & Policy
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">
                          Privacy Policy
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-nav-3">
                  <h4 className="nav-heading">Network Sites</h4>
                  <ul>
                    <li>
                      <a
                        href="https://apliqa.in"
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">Apliqa</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.bricksnpillars.com/"
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">
                          Bricks-N-Pillars
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dwelitedecor.com/"
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">
                          Dwelite Decor
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://rentnresale.com/"
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">
                          Rent or Resale
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.vrnow.ai/"
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">VR-Now</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${mainWebsite}/coming-soon`}
                        target="_blank"
                        className="nav-link"
                      >
                        <span className="link-icon-container">
                          <LinkHoverIcon />
                        </span>
                        <span className="link-text-container">Tarry</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-nav-4">
                  <h4 className="nav-heading">Contact Us</h4>
                  <ul>
                    <li>
                      <img
                        src="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/email_icon_600da4bc05.svg"
                        alt="email"
                        style={{ width: "1.88vw", height: "2.01vw" }}
                      />

                      <a href="#" className="nav-link" id="e-mail-link">
                        info@homznoffiz.org
                      </a>
                    </li>
                    <li>
                      <img
                        src="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/contact_icon_e56947cc16.svg"
                        alt="contact"
                        style={{ width: "1.88vw", height: "2.08vw" }}
                      />

                      <a href="#" className="nav-link" id="contact-link">
                        +91-7008812287
                      </a>
                    </li>
                    <li>
                      <img
                        src="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/location_icon_6971302c0e.svg"
                        alt="location"
                        style={{ width: "1.88vw", height: "1.82vw" }}
                      />

                      <a href="#" className="nav-link" id="location-link">
                        Bangalore, Karanataka.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Social Links */}
              <div className="hnz_socialLinks d-flex flex-column">
                <h4>Keep in Touch with us</h4>
                {/* <div className="social-media-links">
                  <span>
                    <a href={`${mainWebsite}/coming-soon`} target="_blank">
                      <img
                        src="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/facebook_149fc5f495.svg"
                        alt="..."
                      />
                    </a>
                  </span>
                  <span>
                    <a href={`${mainWebsite}/coming-soon`} target="_blank">
                      <img
                        src="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/instagram_35821286d3.svg"
                        alt="..."
                      />
                    </a>
                  </span>
                  <span>
                    <a href={`${mainWebsite}/coming-soon`} target="_blank">
                      <img
                        src="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/skype_876275318c.svg"
                        alt="..."
                      />
                    </a>
                  </span>
                  <span>
                    <a href={`${mainWebsite}/coming-soon`} target="_blank">
                      <img
                        src="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/whatsapp_43a849501f.svg"
                        alt="..."
                      />
                    </a>
                  </span>
                </div> */}

                <div className="social-media-links">
                  {social.map((item, key) => (
                    <a href={item.link} key={key} target="_blank">
                      <img
                        height={25}
                        width={25}
                        className="mx-1"
                        src={item.icon}
                      />
                    </a>
                  ))}
                </div>

                <div className="footer_subscribe">
                  <form
                    onSubmit={onSubscribe}
                    className="d-flex flex-column align-items-center"
                    ref={formRef}
                  >
                    <input type="email" name="email" placeholder="E-mail" />
                    <button
                      type="submit"
                      className="btn btn-sm bg-primary bg-opacity-50 rounded-5"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              {/* App Links  */}

              <div className="hnz_appLinks">
                <h4>Available at</h4>
                <a href={`${mainWebsite}/coming-soon`} target="_blank">
                  {" "}
                  <img src={appstore} alt="..." id="apple-store-icon" />
                </a>
                <a
                  href={`https://play.google.com/store/apps/details?id=com.grizzllydigital.apliqa`}
                  target="_blank"
                >
                  <img src={playstore} alt="..." id="play-store-icon" />
                </a>
              </div>
            </div>
            {/* Row #2 */}
            <div className="row row2 d-flex">
              <div className=" col-2  d-lg-flex d-md-flex d-none  justify-content-center">
                <div className="qr-link ">
                  <div>
                    <img src={logo} alt="..." style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
              <div className="col-8   hnz_desc">
                <h5>About Us</h5>
                <p>
                  Homznoffiz.com- India’s most trusted Real Estate & Proptech
                  Portal was founded on the principle of providing an
                  intelligent edge to the millions of Home buyers out there! We
                  believe that our customers deserve only the Best. Rather than
                  flooding them with countless inventory, we provide carefully
                  Handpicked & Personalized housing options for their Dream
                  Home! Homznoffiz.com is also a fast growing lead generation
                  and information platform chosen by the elite real estate
                  professionals across India. More than the concept of “home
                  buying” alone, we focus on providing 360 degree services and
                  solutions to every need related to home.
                </p>
              </div>
              <div className="col-2  d-flex justify-content-center ">
                <div className="qr-link">
                  <div>
                    <img
                      src="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/qr_5d73a4df9c.svg"
                      alt="..."
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "2px",
                      textAlign: "center",
                      fontSize: "1.1vw",
                    }}
                    id="scan"
                  >
                    Scan Me
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 hnz-copyright-text-1">
                <div>
                  Copyright © 2023 Design. Crafted with
                  <img
                    src={footerimg1}
                    alt="footer-img-1"
                    id="footer-img-1"
                    className="mx-2"
                  />
                  <img
                    src={footerimg2}
                    alt="footer-img-2"
                    id="footer-img-2"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
