const Input = ({ label, placeholder, type }) => {
  return (
    <>
      <label className="flex flex-col gap-2">
        {label}
        <input
          className="cursor-pointer rounded-lg border border-neutral0 bg-neutral700 bg-opacity-40 p-3 transition-all duration-300 ease-in-out hover:bg-opacity-100 focus:bg-opacity-40 focus:shadow-none focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-neutral0"
          placeholder={placeholder}
          type={type}
        />
      </label>
    </>
  );
};

export default Input;
