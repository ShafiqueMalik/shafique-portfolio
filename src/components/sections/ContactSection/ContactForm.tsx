'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormProvider, useForm } from 'react-hook-form';
import { PrimaryButton } from '@/shared/components/forms/PrimaryButton';
import InputUnderlined from '@/shared/components/forms/InputUnderlined';
import InputField from '@/shared/components/forms/InputField';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log('e', errors);

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        'service_zutnn15',
        'template_d6cumb8',
        formRef.current as HTMLFormElement,
        'user_BmmgQOqakGY8uWbnMxx8l'
      )
      .then(
        () => {
          setIsSuccess(true);
          setIsFormSubmitting(false);
        },
        (e) => {
          console.error('EmailJS error:', e);
          setIsError(true);
          setIsFormSubmitting(false);
        }
      );
  };
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10" ref={formRef}>
        <input type="hidden" name="subject" value="Portfolio - Form Submission" />
        <div className="flex flex-col gap-6">
          <InputField
            name="name"
            label="Full Name"
            rules={{ required: 'Name is required' }}
            error={errors.name?.message as string}
            placeholder="Enter your name"
          />
          <InputField
            name="user_email"
            type="email"
            label="Email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            error={errors.user_email?.message as string}
            placeholder="Enter your email"
          />
          <InputField
            name="message"
            label="Message"
            as="textarea"
            placeholder="Enter your message..."
            rules={{ required: 'Message is required' }}
            error={errors.message?.message as string}
          />
        </div>
        {/* <div className="relative z-0 w-full mb-4 group">
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          id="name"
          className={`block w-full bg-transparent px-0 py-2 text-lg text-gray-900  border-0 border-b-2
             appearance-none focus:outline-none focus:ring-0 peer
             dark:text-dark-text
             dark:border-gray-400
             
             ${
               errors.name?.message
                 ? 'border-red-500 focus:border-red-500'
                 : 'border-primary focus:border-primary-light dark:focus:border-white'
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
        {typeof errors.name?.message === 'string' && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div> */}

        {/* <div className="relative z-0 w-full mb-4 group">
        <input
          type="email"
          {...register('user_email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          id="user_email"
          className={`block bg-transparent w-full px-0 py-2 text-lg text-gray-900 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer 
              dark:text-dark-text
             dark:border-gray-400
            ${
              errors.user_email?.message
                ? 'border-red-500 focus:border-red-500'
                : 'border-primary focus:border-primary-light'
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
        {typeof errors.user_email?.message === 'string' && (
          <p className="mt-1 text-xs text-red-600">{errors.user_email.message}</p>
        )}
      </div> */}

        {/* <div className="relative z-0 w-full mb-8 group">
        <textarea
          {...register('message', { required: 'Message is required' })}
          id="message"
          className={`block w-full  bg-transparent px-0 py-2 text-lg text-gray-900 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer 
              dark:text-dark-text
             dark:border-gray-400
            ${
              errors.message?.message
                ? 'border-red-500 focus:border-red-500'
                : 'border-primary focus:border-primary-light'
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
        {typeof errors.message?.message === 'string' && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div> */}

        <PrimaryButton type="submit" className="w-full mt-4" disabled={isFormSubmitting}>
          Send Message
        </PrimaryButton>
      </form>

      {isSuccess && (
        <p className="mt-5 text-xl text-white bg-green-700/80 p-3 rounded-[10px]">
          Thanks for reaching out! I&#39;ll be in touch with you soon.
        </p>
      )}
      {isError && (
        <p className="mt-5 text-xl text-white bg-red-700/80 p-3 rounded-[10px]">
          Something went wrong! Please try resending your message or contact me directly.
        </p>
      )}
    </FormProvider>
  );
}
