import Input from "./input";
import Upload from "./upload";

const Form = () => {
  return (
    <>
      <form
        className="flex w-full flex-col gap-6"
        noValidate
        onSubmit={(e) => e.preventDefault()}
      >
        <Upload />
        <Input placeholder="" label="Full Name" type="text" />
        <Input
          placeholder="example@email.com"
          label="Email Address"
          type="email"
        />
        <Input
          placeholder="@yourusername"
          label="GitHub Username"
          type="text"
        />
        <button
          className="focus:outline-offset-3 rounded-xl bg-orange500 p-3 text-lg font-extrabold text-neutral900 transition-all duration-300 ease-in-out hover:bg-orange700 hover:shadow-[0_4px_0_0_theme('colors.orange500')] focus:shadow-none focus:outline focus:outline-1 focus:outline-neutral0"
          type="submit"
        >
          Generate My Ticket
        </button>
      </form>
    </>
  );
};

export default Form;
