import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight, FaUserCheck } from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend registration will be added later

    console.log("Register clicked");
  };

  return (
    <main
      className="
      min-h-screen
      bg-slate-50
      pt-20
      lg:grid
      lg:grid-cols-2
    "
    >
      {/* Left Side */}

      <section
        className="
        hidden
        bg-gradient-to-br
        from-emerald-700
        via-emerald-600
        to-teal-500
        p-12
        text-white
        lg:flex
        lg:flex-col
        lg:justify-between
      "
      >
        <div>
          <h1
            className="
            text-5xl
            font-black
          "
          >
            Servora
          </h1>

          <p
            className="
            mt-5
            text-xl
            text-emerald-100
          "
          >
            Join customers and trusted professionals.
          </p>
        </div>

        <div>
          <h2
            className="
            text-4xl
            font-bold
          "
          >
            Create Your Account
          </h2>

          <p
            className="
            mt-5
            leading-8
            text-emerald-100
          "
          >
            Create an account to book professionals, manage your services and
            enjoy a seamless experience.
          </p>

          <div
            className="
            mt-10
            space-y-5
          "
          >
            <div className="flex items-center gap-4">
              <FaUserCheck />
              Verified Providers
            </div>

            <div className="flex items-center gap-4">
              <FaUserCheck />
              Secure Booking
            </div>

            <div className="flex items-center gap-4">
              <FaUserCheck />
              Easy Account Management
            </div>
          </div>
        </div>
      </section>

      {/* Form */}

      <section
        className="
        flex
        items-center
        justify-center
        px-6
        py-12
      "
      >
        <div
          className="
          w-full
          max-w-md
          rounded-3xl
          bg-white
          p-8
          shadow-xl
          ring-1
          ring-slate-200
        "
        >
          <h2
            className="
            text-4xl
            font-black
            text-slate-900
          "
          >
            Create Account
          </h2>

          <p
            className="
            mt-3
            text-slate-500
          "
          >
            Fill in your details to get started.
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              mt-8
              space-y-5
            "
          >
            {/* Name */}

            <div>
              <label
                className="
                mb-2
                block
                font-semibold
                text-slate-700
              "
              >
                Full Name
              </label>

              <input
                type="text"
                placeholder="Patrick Nyamekye"
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-5
                  py-4
                  outline-none
                  focus:border-emerald-500
                  focus:bg-white
                "
              />
            </div>

            {/* Email */}

            <div>
              <label
                className="
                mb-2
                block
                font-semibold
                text-slate-700
              "
              >
                Email
              </label>

              <input
                type="email"
                placeholder="patrick@example.com"
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-5
                  py-4
                  outline-none
                  focus:border-emerald-500
                "
              />
            </div>

            {/* Phone */}

            <div>
              <label
                className="
                mb-2
                block
                font-semibold
                text-slate-700
              "
              >
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+233 XX XXX XXXX"
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-5
                  py-4
                  outline-none
                  focus:border-emerald-500
                "
              />
            </div>

            {/* Password */}

            <div>
              <label
                className="
                mb-2
                block
                font-semibold
                text-slate-700
              "
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-5
                    py-4
                    pr-14
                    outline-none
                    focus:border-emerald-500
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-5
                    top-1/2
                    -translate-y-1/2
                    text-slate-500
                    hover:text-emerald-600
                  "
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm */}

            <div>
              <label
                className="
                mb-2
                block
                font-semibold
                text-slate-700
              "
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-5
                    py-4
                    pr-14
                    outline-none
                    focus:border-emerald-500
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="
                    absolute
                    right-5
                    top-1/2
                    -translate-y-1/2
                    text-slate-500
                  "
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Terms */}

            <label
              className="
              flex
              items-start
              gap-3
              text-sm
              text-slate-600
            "
            >
              <input type="checkbox" required className="mt-1" />

              <span>
                I agree to the{" "}
                <Link to="/terms" className="font-semibold text-emerald-600">
                  Terms
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="font-semibold text-emerald-600">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-emerald-600
                py-4
                font-semibold
                text-white
                hover:bg-emerald-700
              "
            >
              Create Account
              <FaArrowRight />
            </button>
          </form>

          <p
            className="
            mt-8
            text-center
            text-slate-600
          "
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="
                font-semibold
                text-emerald-600
              "
            >
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register;
