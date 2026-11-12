import React from "react";


function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
}) {


  const variants = {

    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700",

    secondary:
      "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",

    ghost:
      "text-slate-700 hover:bg-slate-100",

  };



  const sizes = {

    sm:
      "px-3 py-2 text-xs",

    md:
      "px-4 py-2.5 text-sm",

    lg:
      "px-5 py-3 text-sm",

  };




  return (

    <button

      type={type}

      className={`
        rounded-xl
        font-semibold
        transition
        duration-300
        ${variants[variant]}
        ${sizes[size]}
      `}

    >

      {children}

    </button>

  );

}


export default Button;