import { Link } from "react-router-dom";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

function VerifyEmail() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">

          <FaEnvelopeCircleCheck className="text-4xl text-emerald-600" />

        </div>


        <h1 className="mt-6 text-4xl font-black text-slate-900">
          Verify Email
        </h1>


        <p className="mt-4 leading-7 text-slate-500">
          We've sent a verification link to your email address.
          Please check your inbox to activate your account.
        </p>


        <button className="mt-8 w-full rounded-2xl bg-emerald-600 py-4 font-bold text-white hover:bg-emerald-700">
          Resend Email
        </button>


        <Link
          to="/login"
          className="mt-6 block font-semibold text-emerald-600"
        >
          Back to Login
        </Link>

      </div>

    </main>
  );
}

export default VerifyEmail;