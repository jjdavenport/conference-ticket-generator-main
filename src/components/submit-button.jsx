const SubmitButton = () => {
  return (
    <>
      <button
        className="rounded-xl bg-orange500 p-3 text-lg font-extrabold text-neutral900 duration-300 ease-in-out hover:bg-orange700 hover:shadow-[0_4px_0_0_theme('colors.orange500')] hover:transition-all focus:shadow-none focus:outline focus:outline-1 focus:outline-offset-3 focus:outline-neutral0 focus:transition-colors"
        type="submit"
      >
        Generate My Ticket
      </button>
    </>
  );
};

export default SubmitButton;
