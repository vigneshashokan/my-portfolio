import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GrSend } from "react-icons/gr";

type Props = {};

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:vigneshgashokan@gmail?subject=hello&body=${formData.message}`);

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Feel free to shoot me an email, I&apos;ll get back to you!
        </h4>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
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
          {/* <div className="flex w-fit mx-auto"> */}
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-2xl flex mx-auto"
          >
            <GrSend size={35} />
            <span className="text-center pl-5">Send Message</span>
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
