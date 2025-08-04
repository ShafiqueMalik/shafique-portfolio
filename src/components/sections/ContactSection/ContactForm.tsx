'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormProvider, useForm } from 'react-hook-form';
import { PrimaryButton } from '@/shared/components/forms/PrimaryButton';
import InputUnderlined from '@/shared/components/forms/InputUnderlined';
import InputField from '@/shared/components/forms/InputField';
import { toast } from 'react-toastify';
import { errorToast, successToast } from '@/shared/utils/toastUtils';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;
  console.log('e', errors);

  const onSubmit = async (data) => {
    console.log(data);
    setIsFormSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_zutnn15', // your service ID
        'template_d6cumb8', // your template ID
        formRef.current as HTMLFormElement,
        'user_BmmgQOqakGY8uWbnMxx8l' // your public key
      );

      successToast({
        description: `Thanks for reaching out! I will be in touch with you soon.`,
      });
      setIsFormSubmitting(false);
      reset();
    } catch {
      errorToast({
        description: `Something went wrong! Please try resending your message or contact me directly.`,
      });
      setIsFormSubmitting(false);
    }
    // emailjs
    //   .sendForm(
    //     'service_zutnn15',
    //     'template_d6cumb8',
    //     formRef.current as HTMLFormElement,
    //     'user_BmmgQOqakGY8uWbnMxx8l'
    //   )
    //   .then(
    //     () => {
    //       successToast({
    //         description: `Thanks for reaching out! I will be in touch with you soon.`,
    //       });
    //       setIsFormSubmitting(false);
    //       reset();
    //     },
    //     () => {
    //       errorToast({
    //         description: `Something went wrong! Please try resending your message or contact me directly.`,
    //       });
    //       setIsFormSubmitting(false);
    //     }
    //   );
  };

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

        <PrimaryButton type="submit" className="w-full mt-4" disabled={isFormSubmitting}>
          Send Message
        </PrimaryButton>
      </form>
    </FormProvider>
  );
}
