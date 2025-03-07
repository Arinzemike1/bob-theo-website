import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="min-h-screen py-28 px-7 md:px-0 w-full md:max-w-[50%]">
          <h1 className="text-base md:text-2xl font-bold pb-5">
            Koinage Privacy Policy
          </h1>
          <p className="text-sm md:text-base !leading-8">
            Koinage is committed to user privacy in all of its communications
            regarding its products and services. This policy outlines Koinage&apos;s
            information-handling practices. If you give us personal data, it
            will be treated according to this policy. By visiting or downloading
            any materials from Koinage websites or by providing any personal
            data to Koinage via Koinage websites or e-mail addresses, you are
            accepting and consenting to the practices described in this policy.
            If you do not agree to these terms, do not use Koinage websites or
            apps, download any materials from them or provide information to
            Koinage or its affiliated companies by e-mail or other means. This
            policy covers all Koinage websites and customer communications as
            well as personal data you provide to Koinage Customer Support.
            Koinage encourages you to read this privacy policy.
          </p>

          <p className="pt-5">
            <strong>1. Data Collected</strong>
          </p>
          <p className="text-sm md:text-base !leading-8">
            Koinage collects, the e-mail addresses of visitors register.
            Information volunteered by visitors such as e-mail address, survey
            information and/or site registrations, name and address, telephone
            number and fax number. The information Koinage collects is used to
            improve the content of our website and app, to customize the content
            and/or layout of pages for individual visitors/groups of visitors,
            to notify visitors about updates to our website. Koinage does not
            share any information with any other companies.
          </p>

          <p className="pt-5">
            <strong>2. Types and Uses of Personal Information</strong>
          </p>
          <p className="py-3 text-sm md:text-base">
            Koinage uses your personal data in the following ways:
          </p>
          <ul className="list-disc pl-5 leading-7 md:leading-8 text-sm md:text-base">
            <li>
              User IDs and passwords - Provide reasonably secure access to
              profile areas and protected content.
            </li>
            <li>
              Account information - Provides information about who you are, how
              to contact you. Also contains any preferences you have provided,
              such as language, e-mail format and interests.
            </li>
            <li>
              Feedback and support - Provides a mechanism for requesting
              information from Koinage. Also used to tell Koinage how we can
              improve our products, services, communications and site designs.
            </li>
            <li>
              Email correspondence - Used to raise and respond to issues and
              inquiries of all types. Also used to distribute requested
              information about Koinage, our products and services.
            </li>
          </ul>

          <p className="text-sm md:text-base !leading-8 pt-3">
            If you supply Koinage with your postal address, e-mail address, you
            may receive periodic mailings, e-mails from us. We also may choose
            to establish or exercise our legal rights or defend against legal
            claims. We may collect and possibly share information in order to
            investigate, prevent, or take action regarding illegal activities,
            suspected fraud, situations involving potential threats to the
            physical safety of any person, violations of Koinage&apos;s terms of use,
            or as otherwise required by law. Upon request, Koinage provides site
            visitors with access to unique identifier information (e.g.,
            customer number or password) and/or contact information (e.g., name,
            address, phone number) that we maintain for them. Consumers can
            access this information by e-mailing us at the address provided
            here.
          </p>

          <p className="pt-5">
            <strong>3. Security Measures</strong>
          </p>
          <p className="py-3 text-sm md:text-base !leading-8">
            Koinage takes reasonable efforts to protect the personal data you
            share with us.
          </p>

          <p className="pt-5">
            <strong>4. Accessing and Updating Information</strong>
          </p>
          <p className="py-3 text-sm md:text-base !leading-8">
            You have the right to access information held about you. Your right
            of access can be exercised in accordance with the Data Protection
            Act. Any access request will be subject to a reasonable fee to meet
            our costs in providing you with details of the information we hold
            about you. Koinage asks for your help in making sure your
            information is correct in our systems. Please notify us of changes
            to your name, address, title, phone number or e-mail address by
            calling us at the number provided here, e-mailing us at the address
            provided here or writing to us at the address provided here. Some
            Koinage sites allow you to make these updates yourself via a profile
            page.
          </p>

          <p className="pt-5">
            <strong>5. Unsubscribing</strong>
          </p>
          <p className="py-3 text-sm md:text-base !leading-8">
            Each e-mail newsletter that Koinage distributes includes the option
            to unsubscribe. You may also unsubscribe from select e-mail
            newsletters directly on some Koinage websites, by sending an e-mail
            to the address provided here, calling the telephone number provided
            here or writing to the address provided here. Unfortunately, the
            transmission of information via the internet is not completely
            secure. Although we will do our best to protect your personal data,
            we cannot guarantee the security of your data transmitted to our
            site; any transmission is at your own risk. Once we have received
            your information, we will use strict procedures and security
            features to try to prevent unauthorized access.
          </p>

          <p className="pt-5">
            <strong>5. Policy Updates</strong>
          </p>
          <p className="py-3 text-sm md:text-base !leading-8">
            Koinage reserves the right to make changes and updates to this
            policy at any time. All updates to this policy and changes to our
            privacy practices will be posted here. If you are concerned about
            how your information is used, please review this policy
            periodically.
          </p>

          <p className="pt-5">
            <strong>5. Terms of Use</strong>
          </p>
          <p className="py-3 text-sm md:text-base !leading-8">
            Koinage uses Stripe to make payouts to users. The Stripe Recipient
            Agreement applies to your receipt of such Payouts. To receive
            payouts from us, you must provide us accurate and complete
            information about you and your business, and you authorize us to
            share it and transaction information related to your payout with
            Stripe. Payment processing services for users on Koinage are
            provided by Stripe and are subject to the Stripe Connected Account
            Agreement, which includes the Stripe Terms of Service (collectively,
            the “Stripe Services Agreement”). By agreeing to these terms or
            continuing to operate as a account holder on Koinage, you agree to
            be bound by the Stripe Services Agreement, as the same may be
            modified by Stripe from time to time. As a condition of Koinage
            enabling payment processing services through Stripe, you agree to
            provide Koinage accurate and complete information about you and your
            business, and you authorize Koinage to share it and transaction
            information related to your use of the payment processing services
            provided by Stripe. By registering your account, you agree to our
            Services Agreement and the{" "}
            <Link href="https://stripe.com/connect-account/legal/recipient">
              Stripe Recipient Agreement.
            </Link>
          </p>

          <p className="pt-5">
            <strong>5. Compliance</strong>
          </p>
          <p className="py-3 text-sm md:text-base !leading-8">
            If you feel that this site is not following its stated information
            policy, you may contact us by e-mailing us at the address provided
            here, writing to us at the address provided here or calling us at
            the number provided here.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
