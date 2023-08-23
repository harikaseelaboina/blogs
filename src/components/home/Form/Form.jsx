import React,{useState} from "react";
import "./Form.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // request to the API
    fetch(
      "https://rj7oitjr1l.execute-api.us-east-1.amazonaws.com/dev/write/tech@HomzNOffiz/HomzNOffiz@123/homznoffiz_website_data/blogs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55IjoiSG9tek5PZmZpeiIsImlhdCI6MTY5MDM2NTQyN30.RtVMBuberUfUT6pO4OkYE-3-eYGuUT3lTtn8MNpJna8",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        toast.success("Form submitted successfully!");
        // alert("Form submitted ");
        // console.log(formData);

        // Clear  form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // alert("An error ");
        toast.error("An error occurred. Please try again later.");
      });
  };



  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div
        className=""
        style={{
          width: "88%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
        //   height: "100vh",
          paddingTop: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="row">
          <div
            className="col-12 col-md-6 formbg"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            //   backgroundColor:"black",
            //   opacity:"0.5",color:"white"
            }}
          >
            <div>
              <h3 style={{fontSize:"120%"}}>Send us a Message</h3>
              <h5 style={{  marginTop: "3rem" ,fontSize:"90%",fontWeight:"500"}}>
                If you are interested in our product and want a demo or have any
                queries, please fill in the form, we will get in touch with you
                soon.
              </h5>
              <p
                style={{ margin: "0", fontSize: "95%", fontWeight: "bold" }}
              >
                Contact Us:
              </p>
            
            </div>
          </div>
          <div
            className="col-12 col-md-6"
            style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
          >
            <form className="row g-3"   onSubmit={handleSubmit}>
              <div className="col-6">
                <label
                  for="name"
                  className="form-label"
                  style={{
                    margin: "0",
                     fontSize: "90%",
                    fontWeight: "bold",
                  }}
                >
                  First name
                </label>
                 <input required
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "#191919",
                    color: "white",
                    border: "0",
                    borderRadius: "5px",
                    margin: "0",
                  }}
                />
              </div>
              <div className="col-6">
                <label
                  for="phone"
                  className="form-label"
                  style={{
                    margin: "0",
                     fontSize: "90%",
                    fontWeight: "bold",
                  }}
                >
                  Phone Number
                </label>
                 <input required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  id="phone"
                  style={{
                    backgroundColor: "#191919",
                    color: "white",
                    border: "0",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col-12">
                <label
                  for="email"
                  className="form-label"
                  style={{
                    margin: "0",
                     fontSize: "90%",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </label>
                 <input required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                  placeholder=""
                  style={{
                    backgroundColor: "#191919",
                    color: "white",
                    border: "0",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col-12">
                <label
                  for="msg"
                  className="form-label"
                  style={{
                    margin: "0",
                     fontSize: "90%",
                    fontWeight: "bold",
                  }}
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  className="form-control"
                  id="msg"
                  placeholder=""
                  style={{
                    backgroundColor: "#191919",
                    color: "white",
                    border: "0",
                    borderRadius: "5px",
                  }}
                ></textarea>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn "
                  style={{
                    backgroundColor: " #4600B9",
                    borderRadius: "8px",
                    color: "white",
                     fontSize: "90%",
                    padding: "0.6rem",
                    fontWeight: "bold",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
