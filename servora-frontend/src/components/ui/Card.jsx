function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-2xl
        bg-white
        p-6
        shadow-md
        ring-1
        ring-slate-200
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;