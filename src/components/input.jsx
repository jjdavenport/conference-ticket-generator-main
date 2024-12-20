const Input = ({ label, placeholder, type }) => {
  return (
    <>
      <label>{label}</label>
      <input placeholder={placeholder} type={type} />
    </>
  );
};

export default Input;
