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
          className="bg-orange500 hover:bg-orange700 text-neutral900 rounded-xl p-3 text-lg font-extrabold transition-colors duration-300 ease-in-out"
          type="submit"
        >
          Generate My Ticket
        </button>
      </form>
    </>
  );
};

export default Form;
