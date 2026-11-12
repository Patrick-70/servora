import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

function ResetPassword() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <FaLock className="text-4xl text-emerald-600" />
        </div>

        <h1 className="mt-6 text-center text-4xl font-black text-slate-900">
          Reset Password
        </h1>

        <p className="mt-4 text-center text-slate-500">
          Create a new password for your Servora account.
        </p>


        <form className="mt-8 space-y-5">

          <input
            type="password"
            placeholder="New password"
            className="w-full rounded-2xl border px-5 py-4 outline-none focus:border-emerald-500"
          />


          <input
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-2xl border px-5 py-4 outline-none focus:border-emerald-500"
          />


          <button
            className="w-full rounded-2xl bg-emerald-600 py-4 font-bold text-white hover:bg-emerald-700"
          >
            Update Password
          </button>

        </form>


        <p className="mt-8 text-center text-slate-600">

          Back to{" "}

          <Link
            to="/login"
            className="font-semibold text-emerald-600"
          >
            Login
          </Link>

        </p>

      </div>

    </main>
  );
}

export default ResetPassword;