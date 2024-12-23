const Input = ({ label, placeholder, type }) => {
  return (
    <>
      <label className="flex flex-col gap-2">
        {label}
        <input
          className="focus:outline-offset-3 cursor-pointer rounded-lg border border-neutral500 bg-neutral700 bg-opacity-40 p-3 transition-colors duration-300 ease-in-out placeholder:text-neutral300 hover:bg-opacity-100 focus:bg-opacity-40 focus:shadow-none focus:outline focus:outline-1 focus:outline-neutral300"
          placeholder={placeholder}
          type={type}
        />
      </label>
    </>
  );
};

export default Input;
