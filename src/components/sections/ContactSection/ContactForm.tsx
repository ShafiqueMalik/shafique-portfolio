"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/components/forms/Button";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("e", errors);

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        "service_zutnn15",
        "template_d6cumb8",
        formRef.current as HTMLFormElement,
        "user_BmmgQOqakGY8uWbnMxx8l"
      )
      .then(
        () => {
          setIsSuccess(true);
          setIsFormSubmitting(false);
        },
        () => {
          setIsError(true);
          setIsFormSubmitting(false);
        }
      );
  };
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const validateEmail = (user_email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email);
  };

  return (
    <form
      ref={formRef}
         onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto mt-10"
    >
      <input type="hidden" name="subject" value="Portfolio - Form Submission" />
      <div className="relative z-0 w-full mb-4 group">
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          id="name"
          className={`block w-full bg-transparent px-0 py-2 text-lg text-gray-900  border-0 border-b-2
             appearance-none focus:outline-none focus:ring-0 peer
             dark:text-dark-text
             dark:border-gray-400
             
             ${
               errors.name?.message
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
        {typeof errors.name?.message === "string" && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="relative z-0 w-full mb-4 group">
        <input
          type="email"
          {...register("user_email", { required: "Email is required" })}
          id="user_email"
          className={`block bg-transparent w-full px-0 py-2 text-lg text-gray-900 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer 
              dark:text-dark-text
             dark:border-gray-400
            ${
              errors.user_email?.message
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
        {typeof errors.user_email?.message === "string" && (
          <p className="mt-1 text-xs text-red-600">
            {errors.user_email.message}
          </p>
        )}
      </div>

      <div className="relative z-0 w-full mb-8 group">
        <textarea
          {...register("message", { required: "Message is required" })}
          id="message"
          className={`block w-full  bg-transparent px-0 py-2 text-lg text-gray-900 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer 
              dark:text-dark-text
             dark:border-gray-400
            ${
              errors.message?.message
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
        {typeof errors.message?.message === "string" && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
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
          Thanks for reaching out! I&#39;ll be in touch with you soon.
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
