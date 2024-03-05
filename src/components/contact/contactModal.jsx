import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import Image from "../../../public/assets/images/formimage.svg";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whoTheyResonate: "",
    description: "",
    category: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validation logic for the form fields
  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (formData.category.trim() === "") {
      newErrors.category = "Category is required";
    }
    if (formData.whoTheyResonate.trim() === "") {
      newErrors.whoTheyResonate = "Who they resonate is required";
    }
    if (formData.description.trim() === "") {
      newErrors.description = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for the input being edited
    setErrors({
      ...errors,
      [name]: "", // Clear error for the input being edited
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: formData.name,
      Phone: formData.phone,
      WhoTheyResonate: formData.whoTheyResonate,
      Description: formData.description,
      Category: formData.category,
    };
    const isValid = validateForm();
    if (isValid) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://sheet.best/api/sheets/42ff7dfb-5bc2-47b0-803c-74aea9fc6e19",
          data
        );
        console.log(response);
        setFormData({
          name: "",
          phone: "",
          whoTheyResonate: "",
          description: "",
          category: "",
        });
        toast.success(
          "Thank you. We will get back to you as soon as possible",
          {
            style: {
              backgroundColor: "#14d414",
              color: "white",
            },
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      } catch (error) {
        console.error(error);
        toast.error("An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setLoading(false);
      }
    } else {
      // If the form is invalid, show a message or handle accordingly
      toast.error("Please fill in the required fields correctly.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        center
        styles={{ modal: { width: "100%", height: "auto " } }}
      >
        <div className="modal-content-contact">
          <div className="form-container">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <select
                    name="whoTheyResonate"
                    value={formData.whoTheyResonate}
                    onChange={handleInputChange}
                  >
                    <option disabled value="">
                      Who they resonate ?
                    </option>
                    <option value="parents">Parents</option>
                    <option value="students">Student</option>
                  </select>
                  {errors.whoTheyResonate && (
                    <span className="error">{errors.whoTheyResonate}</span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>
                <div className="form-field">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option disabled value="">
                      Category
                    </option>
                    <option value="b2b">B2B</option>
                    <option value="b2c">B2C</option>
                  </select>
                  {errors.category && (
                    <span className="error">{errors.category}</span>
                  )}
                </div>
              </div>
              <div className="form-field">
                <label>Description</label>
                <textarea
                  name="description"
                  rows="4"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
                {errors.desctiption && (
                  <span className="error">{errors.description}</span>
                )}
              </div>

              <div className="form-field">
                <button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <div className="image-container">
            {/* <img src={Image} alt="Image" /> */}
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default ContactModal;
