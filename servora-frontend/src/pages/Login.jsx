import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight, FaCheckCircle } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend authentication will be added later

    console.log("Login clicked");
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
            Book trusted professionals for every service.
          </p>
        </div>

        <div>
          <h2
            className="
            text-4xl
            font-bold
          "
          >
            Welcome Back 
          </h2>

          <p
            className="
            mt-5
            leading-8
            text-emerald-100
          "
          >
            Sign in to manage bookings, save providers, and access your
            personalized dashboard.
          </p>

          <div
            className="
            mt-10
            space-y-5
          "
          >
            <div className="flex items-center gap-4">
              <FaCheckCircle />
              Verified Professionals
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle />
              Secure Booking Platform
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle />
              Fast & Reliable Services
            </div>
          </div>
        </div>
      </section>

      {/* Login Form */}

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
            Login
          </h2>

          <p
            className="
            mt-3
            text-slate-500
          "
          >
            Welcome back! Please sign in to continue.
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              mt-8
              space-y-6
            "
          >
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
                placeholder="john@example.com"
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
                  transition
                  focus:border-emerald-500
                  focus:bg-white
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
                  placeholder="Enter your password"
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
                    transition
                    focus:border-emerald-500
                    focus:bg-white
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

            <div
              className="
              flex
              items-center
              justify-between
            "
            >
              <label
                className="
                flex
                items-center
                gap-2
                text-sm
                text-slate-600
              "
              >
                <input type="checkbox" className="h-4 w-4" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="
                  text-sm
                  font-semibold
                  text-emerald-600
                  hover:text-emerald-700
                "
              >
                Forgot Password?
              </Link>
            </div>

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
                transition
                hover:bg-emerald-700
              "
            >
              Login
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
            Don't have an account?{" "}
            <Link
              to="/register"
              className="
                font-semibold
                text-emerald-600
              "
            >
              Create one
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
