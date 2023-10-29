import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const serviceId: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId: string = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey: string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    emailjs.send(serviceId, templateId, formData, publicKey).then(
      () => {
        toast.success("Message sent to Vignesh!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      },
      (error) => {
        toast.error(
          `Sorry! Something went wrong sending the message. ${error}`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
    );
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col w-[300px] md:w-screen mt-28 mb-12 md:mt-0 space-y-3 md:space-y-10 overflow-y-auto">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          Feel free to shoot me an email, I&apos;ll get back to you!
        </h4>
        <ToastContainer />
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              className="contactInput"
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
            <input
              className="contactInput"
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
          </div>
          <input
            className="contactInput"
            type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
          <textarea
            rows={5}
            className="contactInput"
            placeholder="Your Message..."
            {...register("message", { required: true })}
          />
          <input
            type="submit"
            value="Send"
            className="bg-[#F7AB0A] hover:bg-[#F7AB0A]/60 py-2 md:py-5 md:px-10 rounded-md text-black font-bold text-2xl cursor-pointer z-10"
          />
        </form>
      </div>
    </div>
  );
}
