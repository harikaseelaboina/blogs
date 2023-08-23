import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const countries = [
  { code: "+1" },
  { code: "+44" },
  { code: "+91" },
  // can have more country codes
];

const ExpertForm = ({ close }) => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  // const [city, setCity] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);
  const [formClosed, setFormClosed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleCloseModal = () => {
    setFormClosed(true);
  };

  if (formClosed) {
    return null; // Return null to not render the form
  }

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
          email: "",
          phone: "",
          city: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // alert("An error ");
        toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="expertForm">
      {formClosed ? null : (
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "24px",
                  backgroundColor:" #BBA592",
            padding: "0.5rem",
          }}
        >
          {close == "true" && (
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss=""
              aria-label="Close"
              onClick={handleCloseModal}
              style={{
                backgroundColor: "white",

                marginLeft: "auto",
                marginTop: "0rem",
              }}
            ></button>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1686306566/call-removebg-preview_z39xqd.png"
              alt="call us"
              style={{ height: "10%", width: "10%" }}
            />
            <h5
              style={{
                padding: "0.2rem",
                paddingTop: "0.7rem",
                fontSize: "15px",
                fontWeight: "bold",
                color:"black"
              }}
            >
              Contact Our Real Estate Expert
            </h5>
          </div>

          <form
            className="container mt-4"
            onSubmit={handleSubmit}
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              borderRadius: "4rem",
            }}
          >
            <div className="mb-3">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                // onChange={(e) => setName(e.target.value)}
                onChange={handleChange}
                className=""
                required
                style={{
                  backgroundColor: "white",
                  color:"black",
                  border: "",
                  width: "100%",
                  padding: "0.5rem",
                  paddingLeft: "2rem",
                  fontSize: "15px",
                  fontWeight: "bold",
                  borderRadius: "5rem",
                }}
                placeholder="Name"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleChange}
                className=""
                required
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "",
                  width: "100%",
                  padding: "0.5rem",
                  paddingLeft: "2rem",
                  fontSize: "15px",
                  fontWeight: "bold",
                  borderRadius: "5rem",
                }}
                placeholder="email"
              />
            </div>

            <div className="mb-3">
              <div
                className=""
                style={{ display: "flex", flexDirection: "row" }}
              >
                <select
                  id="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  required
                  style={{
                    backgroundColor: "white",
                  color: "gray",
                    width: "",
                    
                    padding: "0.5rem",
                    paddingLeft: "2rem",
                    fontSize: "15px",
                    fontWeight: "bold",
                    borderRadius: "5rem",
                  }}
                >
                  <option value="" disabled></option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  // onChange={(e) => setPhone(e.target.value)}
                  onChange={handleChange}
                  className=""
                  required
                  style={{
                    backgroundColor: "white",
                  color: "black",
                    border: "",
                    width: "100%",
                    padding: "0.5rem",
                    paddingLeft: "2rem",
                    fontSize: "15px",
                    fontWeight: "bold",
                    borderRadius: "5rem",
                  }}
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                // onChange={(e) => setCity(e.target.value)}
                onChange={handleChange}
                className=""
                required
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "",
                  width: "100%",
                  padding: "0.5rem",
                  paddingLeft: "2rem",
                  fontSize: "15px",
                  fontWeight: "bold",
                  borderRadius: "5rem",
                }}
                placeholder="City"
              />
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="form-check mb-3"
                style={{ marginLeft: "1rem", display: "inline-flex" }}
              >
                <input
                  type="checkbox"
                  id="whatsappUpdates"
                  checked={whatsappUpdates}
                  onChange={(e) => setWhatsappUpdates(e.target.checked)}
                  className="form-check-input"
                  style={{ fontSize: "150%", backgroundColor: "gray" }}
                />
                <label
                  htmlFor="whatsappUpdates"
                  className="form-check-label"
                  style={{
                    color: "gray",
                    paddingTop: "0.2rem",
                    paddingLeft: "0.5rem",
                    fontSize: "15px",
                    fontWeight: "bold",
                    borderRadius: "5rem",
                    display: "block",
                  }}
                >
                  Get updates through
                </label>

                <img
                  style={{ height: "70%", width: "12%" }}
                  src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1686308205/wat2-removebg-preview_xvwma8.png"
                />

                <span
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    paddingTop: "0.2rem",
                  }}
                >
                  WhatsApp
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="btn"
              style={{
                margin: "auto",
                borderRadius: "30px",
                border: "3px solid #05e317",
                color: "white",
                fontWeight: "bold",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              Contact Now
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default ExpertForm;
