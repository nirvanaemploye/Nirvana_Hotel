const PrimaryBtn = ({ children, className = "", delay = 0 }) => {
  return (
    <button
      data-aos="fade"
      data-aos-delay={delay}
      className={`px-3 py-1 sm:px-6 sm:py-2 text-white font-semibold rounded-full bg-primary hover:bg-secondary ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
