const CompletedTitle = ({ name, email }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="inline font-extrabold leading-tight ~sm/md:~text-3xl/5xl">
          Congrats,
          <span className="bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text pl-1 text-transparent">
            {name}
          </span>
          ! Your ticket is ready.
        </h2>
        <p className="inline text-neutral300 ~sm/md:~text-lg/xl md:w-7/12">
          We've emailed your ticket to <br></br>
          <span className="pl-2 text-orange500">{email}</span> and will send
          updates in the run up to the event.
        </p>
      </div>
    </>
  );
};

export default CompletedTitle;
