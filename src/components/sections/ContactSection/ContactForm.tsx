"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Simple validation checks
    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [name]: "This field is required.",
      }));
    } else if (name === "email" && !validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for empty fields before submission
    if (!formData.fullName || !formData.email || !formData.message) {
      setErrors({
        fullName: formData.fullName ? "" : "This field is required.",
        email: formData.email
          ? validateEmail(formData.email)
            ? ""
            : "Please enter a valid email address."
          : "This field is required.",
        message: formData.message ? "" : "This field is required.",
      });
      return;
    }

    // Handle form submission here, e.g., send form data to an API
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
      <div className="relative z-0 w-full mb-4 group">
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`block w-full bg-transparent px-0 py-2 text-lg text-gray-900 border-0 border-b-2
             appearance-none focus:outline-none focus:ring-0 peer ${
               errors.fullName
                 ? "border-red-500 focus:border-red-500"
                 : "border-primary focus:border-primary-light"
             }`}
          placeholder=" "
        />
        <label
          htmlFor="fullName"
          className="absolute  bg-transparent text-lg text-primary duration-300 transform 
          -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
           peer-focus:text-primary-light peer-focus:scale-75 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0"
        >
          Full Name
        </label>
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
        )}
      </div>

      <div className="relative z-0 w-full mb-4 group">
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={`block bg-transparent w-full px-0 py-2 text-lg text-gray-900 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
            errors.email
              ? "border-red-500 focus:border-red-500"
              : "border-primary focus:border-primary-light"
          }`}
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute text-lg text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-light peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
          Email
        </label>
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      <div className="relative z-0 w-full mb-8 group">
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className={`block w-full  bg-transparent px-0 py-2 text-lg text-gray-900 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
            errors.message
              ? "border-red-500 focus:border-red-500"
              : "border-primary focus:border-primary-light"
          }`}
          placeholder=" "
        />
        <label
          htmlFor="message"
          className="absolute text-primary text-lg  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-light peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
        >
          Message
        </label>
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="px-6 py-2 text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none 
       w-full focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Send Message
      </button>
    </form>
  );
}
