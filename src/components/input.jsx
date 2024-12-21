const Input = ({ label, placeholder, type }) => {
  return (
    <>
      <label className="flex flex-col gap-2">
        {label}
        <input
          className="bg-neutral700 outline-neutral0 cursor-pointer rounded-lg bg-opacity-40 p-3 outline outline-1 transition-all duration-300 ease-in-out hover:bg-opacity-100"
          placeholder={placeholder}
          type={type}
        />
      </label>
    </>
  );
};

export default Input;
