export const Button = ({ onClick, children, className="", props }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"