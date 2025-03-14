const Input = ({
  label,
  placeholder,
  type,
  value,
  onBlur,
  error,
  onChange,
}) => {
  return (
    <label className="flex flex-col gap-2">
      {label}
      <input
        className={`${
          error ? "border-orange700" : "border-neutral500"
        } cursor-pointer rounded-xl border bg-neutral700 bg-opacity-30 p-3 backdrop-blur-sm transition-colors duration-300 ease-in-out placeholder:text-neutral300 hover:bg-opacity-60 focus:bg-opacity-30 focus:shadow-none focus:outline focus:outline-1 focus:outline-offset-3 focus:outline-neutral300`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className="h-4">
        <p
          className={`${
            error ? "text-orange500" : "text-neutral300"
          } flex items-center gap-2 text-xs transition-all duration-300 ease-in-out`}
        >
          {error && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                className={error ? "stroke-orange500" : "stroke-neutral300"}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
              />
              <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
              <path
                className={error ? "stroke-orange500" : "stroke-neutral300"}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.004 10.462V7.596M8 5.569v-.042"
              />
            </svg>
          )}
          {error}
        </p>
      </div>
    </label>
  );
};

export default Input;
