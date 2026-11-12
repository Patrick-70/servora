import { Link } from "react-router-dom";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";

function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend will be connected later
    console.log("Password reset requested");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">

        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-emerald-600 transition hover:text-emerald-700"
        >
          <FaArrowLeft />
          Back to Login
        </Link>

        <div className="mt-8 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">

            <FaEnvelope className="text-4xl text-emerald-600" />

          </div>

          <h1 className="mt-6 text-4xl font-black text-slate-900">
            Forgot Password?
          </h1>

          <p className="mt-4 leading-7 text-slate-500">
            Enter your email address and we'll send you a password reset
            link.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-emerald-500 focus:bg-white"
              required
            />

          </div>
                    {/* Submit Button */}

          <button
            type="submit"
            className="w-full rounded-2xl bg-emerald-600 px-6 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-emerald-700"
          >
            Send Reset Link
          </button>

        </form>

        {/* Information */}

        <div className="mt-8 rounded-2xl bg-emerald-50 p-5">

          <h3 className="font-semibold text-emerald-700">
            What happens next?
          </h3>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>• We'll send a password reset link to your email.</li>
            <li>• Open the email and click the reset link.</li>
            <li>• Create a new password.</li>
            <li>• Return to Servora and sign in.</li>
          </ul>

        </div>

        {/* Login Link */}

        <p className="mt-8 text-center text-slate-600">
          Remember your password?{" "}
          <Link
            to="/login"
            className="font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            Sign In
          </Link>
        </p>

      </div>

    </main>
  );
}

export default ForgotPassword;