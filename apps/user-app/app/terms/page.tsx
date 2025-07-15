import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Payora",
  description: "Terms of Service for Payora digital wallet application",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Payora <span className="text-slate-800">Terms of Service</span>{" "}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Understand the terms of using Payora.
          </p>
        </div>

        <div className="mt-12 prose prose-indigo lg:prose-lg mx-auto text-gray-500">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            1. Introduction
          </h2>
          <p>
            By accessing or using the Payora digital wallet application, you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, you may not use the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            2. Service Description
          </h2>
          <p>
            Payora provides a digital wallet service that allows users to
            store, send, and receive money electronically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            3. User Accounts
          </h2>
          <p>
            To use Payora, you must create an account. You are responsible
            for maintaining the confidentiality of your account credentials.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            4. Prohibited Activities
          </h2>
          <p>
            You agree not to use Payora for any unlawful purpose or in any
            way that could harm the service or its users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            5. Fees and Charges
          </h2>
          <p>
            Payora may charge fees for certain transactions or services.
            Any applicable fees will be disclosed to you prior to the
            transaction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            6. Intellectual Property
          </h2>
          <p>
            All content, features, and functionality
          </p>
        </div>
      </main>
    </div>
  );
}
