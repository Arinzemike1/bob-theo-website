"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { toast } from "sonner";
import { Spinner } from "../components/Spinner";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First name is required!"),
      lastName: Yup.string().required("Last name is required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required!"),
      message: Yup.string().required("Message is required!"),
    }),

    onSubmit: async (values) => {
      setIsLoading(true);
      const { firstName, lastName, email, message } = values;
      try {
        await axios.post("/api/send-mail", {
          firstName,
          lastName,
          email,
          message,
        });
        toast.success("Thank you for your message!");
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);

        toast.error("Oops! There was an error sending your message.");
      } finally {
        setIsLoading(false);

        const fields = ["firstName", "lastName", "email", "message"];
        fields.forEach((field) => {
          formik.setFieldValue(field, "");
          formik.setFieldError(field, "");
          formik.setFieldTouched(field, false);
        });
      }
    },
  });
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center my-28 mx-6">
        <h1 className="text-3xl font-bold">Get in touch</h1>
        <div className="mt-5 mb-10 flex flex-col items-center">
          <p className="text-[#777] w-full md:w-2/3 text-sm md:text-base">
            Got a question? Fill out the form and we&apos;ll get back to you as
            soon as we can. Don&apos;t forget to check out our{" "}
            <Link
              href="/#faq"
              className="text-primary font-semibold underline-animation"
            >
              FAQ
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center gap-24 mt-5 text-center md:text-left">
          <form onSubmit={formik.handleSubmit} className="px-5 md:px-0">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                label="First Name"
                className=""
                placeholder="e.g Mike"
                formik={formik}
                {...formik.getFieldProps("firstName")}
              />
              <Input
                type="text"
                label="Last Name"
                className=""
                placeholder="e.g Edward"
                formik={formik}
                {...formik.getFieldProps("lastName")}
              />
            </div>

            <Input
              type="email"
              label="Email Address"
              className=""
              placeholder="e.g Mary.parker@gmail.com"
              formik={formik}
              {...formik.getFieldProps("email")}
            />

            <TextArea
              label="Message"
              className=""
              placeholder="Leave us a message..."
              formik={formik}
              {...formik.getFieldProps("message")}
            />
            <Button
              type="submit"
              className="rounded-xl h-[50px] w-full text-sm"
              primary
            >
              {isLoading ? <Spinner /> : "Send message"}
            </Button>
          </form>

          <div>
            <h1 className="text-lg font-bold">Send us an email</h1>
            <p className="text-sm text-[#777] pt-2">
              We&apos;re always available to answer to your requests and
              enquiries.
            </p>

            <div className="flex flex-col items-center md:items-start gap-4 pt-3">
              <div className="flex items-center gap-2">
                <Icon name="email" />
                <Link
                  href="mailto:tech_support@koinageapp.com"
                  className="font-semibold text-sm underline"
                >
                  tech_support@koinageapp.com
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="email" />
                <Link
                  href="mailto:info@koinageapp.com"
                  className="font-semibold text-sm underline"
                >
                  info@koinageapp.com
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="email" />
                <Link
                  href="mailto:investors@koinageapp.com"
                  className="font-semibold text-sm underline"
                >
                  investors@koinageapp.com
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 py-10">
              <h1 className="text-lg font-bold">Invest in Koinage</h1>

              <div className="flex items-center gap-2">
                <Icon name="invest" />
                <Link
                  href="https://wefunder.com/koinage"
                  className="font-semibold text-sm underline"
                  target="_blank"
                >
                  Go to Wefunder
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <h1 className="text-lg font-bold">Visit our LinkedIn profile</h1>

              <div className="flex items-center gap-2">
                <Icon name="linkedin" />
                <Link
                  href="https://www.linkedin.com/company/koinage-llc"
                  target="_blank"
                  className="font-semibold text-sm underline"
                >
                  https://www.linkedin.com/company/koinage-llc
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
