export function Button({ variant = "primary", children, className, onClick }) {
  const variantStyles = {
    primary:
      "border-2 border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-full btn-shadow-blue transition duration-300",
    secondary:
      "border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white py-2 px-4 rounded-full mr-2 btn-shadow-emerald transition-all duration-300",
    detail:
      "border-2 border-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded-full btn-shadow-purple transition duration-300",
    danger:
      "border-2 border-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded-full btn-shadow-red transition duration-300",
  };

  return (
    <button
      className={`${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
