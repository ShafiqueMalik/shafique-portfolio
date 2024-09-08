"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/components/forms/Button";

export default function ContactForm() {
  const formRef = useRef<any>();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    user_email: "",
    message: "",
  });

  const validateEmail = (user_email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email);
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
    } else if (name === "user_email" && !validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        user_email: "Please enter a valid user_email address.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitting(true);

    // Check for empty fields before submission
    if (!formData.name || !formData.user_email || !formData.message) {
      setErrors({
        name: formData.name ? "" : "This field is required.",
        user_email: formData.user_email
          ? validateEmail(formData.user_email)
            ? ""
            : "Please enter a valid user_email address."
          : "This field is required.",
        message: formData.message ? "" : "This field is required.",
      });
      setIsFormSubmitting(false);

      return;
    }

    // Handle form submission here, e.g., send form data to an API

    emailjs
      .sendForm(
        "service_zutnn15",
        "template_d6cumb8",
        formRef.current as HTMLFormElement,
        "user_BmmgQOqakGY8uWbnMxx8l"
      )
      .then(
        (result: any) => {
          setIsSuccess(true);
          setFormData({
            name: "",
            user_email: "",
            message: "",
          });
          setIsFormSubmitting(false);
        },
        (error: any) => {
          setIsError(true);
          setFormData({
            name: "",
            user_email: "",
            message: "",
          });
          setIsFormSubmitting(false);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-10"
    >
      <input type="hidden" name="subject" value="Portfolio - Form Submission" />
      <div className="relative z-0 w-full mb-4 group">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`block w-full bg-transparent px-0 py-2 text-lg text-gray-900  border-0 border-b-2
             appearance-none focus:outline-none focus:ring-0 peer
             dark:text-dark-text
             dark:border-gray-400
             
             ${
               errors.name
                 ? "border-red-500 focus:border-red-500"
                 : "border-primary focus:border-primary-light dark:focus:border-white"
             }`}
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="absolute  bg-transparent text-lg text-primary duration-300 transform 
          -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
           peer-focus:text-primary-light peer-focus:scale-75 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            dark:text-dark-text-light
            dark:peer-focus:text-dark-text-light
            "
        >
          Full Name
        </label>
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name}</p>
        )}
      </div>

      <div className="relative z-0 w-full mb-4 group">
        <input
          type="user_email"
          name="user_email"
          id="user_email"
          value={formData.user_email}
          onChange={handleChange}
          className={`block bg-transparent w-full px-0 py-2 text-lg text-gray-900 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer 
              dark:text-dark-text
             dark:border-gray-400
            ${
              errors.user_email
                ? "border-red-500 focus:border-red-500"
                : "border-primary focus:border-primary-light"
            }`}
          placeholder=" "
        />
        <label
          htmlFor="user_email"
          className="absolute text-lg text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-light peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            dark:text-dark-text-light
            dark:peer-focus:text-dark-text-light
          "
        >
          Email
        </label>
        {errors.user_email && (
          <p className="mt-1 text-xs text-red-600">{errors.user_email}</p>
        )}
      </div>

      <div className="relative z-0 w-full mb-8 group">
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className={`block w-full  bg-transparent px-0 py-2 text-lg text-gray-900 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer 
              dark:text-dark-text
             dark:border-gray-400
            ${
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-primary focus:border-primary-light"
            }`}
          placeholder=" "
        />
        <label
          htmlFor="message"
          className="absolute text-primary text-lg  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-light peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            dark:text-dark-text-light
            dark:peer-focus:text-dark-text-light
          "
        >
          Message
        </label>
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        primary
        disabled={isFormSubmitting}
        className="px-6 py-2 text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none 
       w-full focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50
       disabled:opacity-50 disabled:cursor-not-allowed
       "
      >
        Send Message
      </Button>

      {isSuccess && (
        <p className="mt-5 text-xl text-white bg-green-700/80 p-3 rounded-[10px]">
          Thanks for reaching out! I'll be in touch with you soon.
        </p>
      )}
      {isError && (
        <p className="mt-5 text-xl text-white bg-red-700/80 p-3 rounded-[10px]">
          Something went wrong! Please try resending your message or contact me
          directly.
        </p>
      )}
    </form>
  );
}
