import { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    email: "",
    name: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [validationErrors, setValidationErrors] = useState({});
  const { email, name, description } = contactForm;
  const EmailRegExp =
    /^([a-z0-9_+.-]+)(\.[a-z0-9_-]+)*@([a-z0-9_-]+\.)+[a-z]{2,6}$/;

  const contactSchema = Yup.object().shape({
    email: Yup.string()
      .matches(EmailRegExp, "Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
  });

  const validateContactForm = async (values) => {
    try {
      await contactSchema.validate(values, { abortEarly: false });
      setValidationErrors({});
      return true;
    } catch (errors) {
      const validationErrors = {};
      errors.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setValidationErrors(validationErrors);
      return false;
    }
  };
  const onChangeContactForm = (event) => {
    setContactForm({ ...contactForm, [event.target.name]: event.target.value });
    setValidationErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const isFormValid = await validateContactForm(contactForm);
    if (isFormValid) {
      try {
        const contactData = await fetch(
          "http://127.0.0.1:8000/api/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, description }),
          }
        );
        console.log(contactData);
        if (contactData.status === 200) {
          toast("Contact form submitted successfully!");
          setContactForm({ name: "", email: "", description: "" });
        }
      } catch (error) {
        console.log(error);
      }
    }
    setIsSubmitting(false);
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-violet-300 font-medium mb-2 tracking-wide ">
                {" "}
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let&apos;s work
                <br />
                together
              </h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-violet-500 transition-all"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChangeContactForm}
              placeholder="Your name"
            />
            {validationErrors.name && (
              <div className="text-red-500 text-sm mt-1">
                {validationErrors.name}
              </div>
            )}

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-violet-500 transition-all"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChangeContactForm}
              placeholder="Your email"
            />
            {validationErrors.email && (
              <div className="text-red-500 text-sm">
                {validationErrors.email}
              </div>
            )}

            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-violet-500 transition-all resize-none mb-12"
              name="description"
              id="description"
              value={description}
              onChange={onChangeContactForm}
              placeholder="Your message"
              cols=""
            ></textarea>
            {validationErrors.description && (
              <div className="text-red-500 text-sm mt-1">
                {validationErrors.description}
              </div>
            )}
            <button
              className="btn btn-lg flex items-center justify-center gap-2"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Contact;
