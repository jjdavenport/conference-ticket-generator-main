import uploadIcon from "../assets/icon-upload.svg";
import infoIcon from "../assets/icon-info.svg";
import { useRef } from "react";

const Upload = ({ onChange, uploaded, avatar, reset }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    console.log("handleClick called");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="dashed flex cursor-pointer flex-col items-center gap-4 rounded-lg bg-neutral700 bg-opacity-30 p-6 backdrop-blur-sm transition-colors duration-300 ease-in-out hover:bg-opacity-60 focus:bg-opacity-30 focus:outline focus:outline-1 focus:outline-offset-3 focus:outline-neutral300"
      >
        <input
          ref={fileInputRef}
          onChange={onChange}
          className="hidden"
          type="file"
        />
        {uploaded ? (
          <>
            <img
              className="w-14 rounded-md object-contain outline outline-1 outline-neutral500"
              src={avatar}
            />
            <div className="flex gap-4">
              <button
                onClick={reset}
                className="rounded-md bg-neutral700 bg-opacity-30 px-3 py-1 text-neutral300 underline"
              >
                Remove image
              </button>
              <button className="rounded-md bg-neutral700 bg-opacity-30 px-3 py-1">
                Change image
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              className="rounded-lg bg-neutral700 bg-opacity-80 p-2 outline outline-1 outline-neutral500 group-hover:bg-opacity-100 group-focus:bg-opacity-80"
              src={uploadIcon}
            />
            <p className="text-neutral300">Drag and drop or click to upload</p>
          </>
        )}
      </button>
      <p className="flex gap-2 text-xs text-neutral300">
        <img src={infoIcon} /> Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </>
  );
};

export default Upload;
