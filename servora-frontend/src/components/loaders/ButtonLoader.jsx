// src/components/loaders/ButtonLoader.jsx

import Spinner from "./Spinner";

function ButtonLoader({
  loading = false,
  children,
  loadingText = "Loading...",
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-xl",
        "transition-all duration-300",
        "disabled:cursor-not-allowed",
        "disabled:opacity-70",
        className,
      ].join(" ")}
      {...props}
    >
      {loading ? (
        <>
          <Spinner size="sm" color="white" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default ButtonLoader;