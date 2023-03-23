import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import "../ContactForm.css";

const ContactForm = () => {
  const { user } = useContext(AuthContext);

  // console.log(user)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const date = Date.now();

  const submitHandler = (data) => {
    // console.log(data)

    const message = {
      firstName: data.firstName,
      photoURL: user?.photoURL,
      email: data?.email,
      phone: data.phone,
      service: data.service,
      inquiry: data.inquiry,
      subject: data.subject,
      time: date,
    };

    fetch(
      "https://cottage-home-care-services-server-site.vercel.app/messages",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(message),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //    console.log(data)
        if (data.acknowledged) {
          toast.success("Message Send Successfully");
          reset();
        }
      });
  };

  return (
    <div className="pt-9 contact-bg">
      <section className="flex justify-center items-center pb-8 mt-3 mb-12 rounded w-11/12  md:w-[80%] mx-auto">
        <div
          className="w-full mt-[10vh] "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <form
            // onSubmit={submitHandler}

            onSubmit={handleSubmit(submitHandler)}
            className="max-w-xl md:max-w-2xl   ml-auto bg-gray-50 p-8 rounded-md shadow-xl "
          >
            <h1 className="text-2xl text-gray-600 text-center Poppins font-semibold">
              {" "}
              CONTACT FORM
            </h1>

            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div className="space-y-1   text-sm">
                <label htmlFor="firstName" className="block dark:text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: "Name is required" })}
                  id="firstName"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white shadow-md"
                />

                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-1    text-sm">
                <label htmlFor="phone" className="block dark:text-gray-400">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                  id="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white shadow-md"
                />

                {errors.phone && (
                  <p className="text-red-600">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-1   text-sm">
                <label htmlFor="email" className="block dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "email is required" })}
                  
                  
                  
                  placeholder="E-mail "
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white shadow-md"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1 text-sm ">
                <label htmlFor="option" className="block dark:text-gray-400">
                  Services
                </label>
                <select
                  // name='service'
                  {...register("service", { required: "service is required" })}
                  id="option"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white shadow-md"
                  required
                >
                  <option value={""} disabled hidden selected required>
                    Select One
                  </option>
                  <option value="CDPAP">CDPAP</option>
                  <option value="PCA">PCA</option>
                </select>
                {errors.service && (
                  <p className="text-red-600">{errors.service.message}</p>
                )}
              </div>
            </div>

            <hr className="my-5" />

            <div className="space-y-1 text-sm mt-1">
              <label htmlFor="option" className="block dark:text-gray-400">
                Inquiry Type
              </label>
              <select
                {...register("inquiry", { required: "inquiry is required" })}
                id="option"
                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white shadow-md"
                required
              >
                <option value={""} disabled hidden selected required>
                  Select One
                </option>
                <option value="General">General Inquiry</option>
                <option value="Grievance">Grievance</option>
              </select>
              {errors.inquiry && (
                <p className="text-red-600">{errors.inquiry.message}</p>
              )}
            </div>

            <div className="space-y-1 text-sm  mt-5">
              <label htmlFor="description" className="block dark:text-gray-400">
                Subject
              </label>
              <textarea
                type="tel"
                {...register("subject", { required: "subject is required" })}
                // name="subject"
                id="subject"
                rows={5}
                placeholder="Subject"
                className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white shadow-md"
              />
              {errors.subject && (
                <p className="text-red-600">{errors.subject.message}</p>
              )}
            </div>
            <button className="block w-full p-3 text-center rounded-sm  bg-primary hover:bg-secondary text-white mt-6">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
