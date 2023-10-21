import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
          Feel free to shoot me an email, I&aposll get back to you!
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
            className="contactInput"
            placeholder="Your Message..."
            {...register("message", { required: true })}
          />
          <input
            type="submit"
            value="Submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-white font-bold text-2xl"
          />
        </form>
      </div>
    </div>
  );
}
