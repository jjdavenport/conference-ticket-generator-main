import uploadIcon from "../assets/icon-upload.svg";
import { useRef, useState } from "react";

const Upload = ({ onChange, avatar, reset, error }) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  return (
    <>
      {avatar ? (
        <div className="flex w-full flex-col gap-2">
          <label>Upload Avatar</label>
          <div className="dashed flex h-40 cursor-pointer flex-col items-center gap-4 rounded-lg bg-neutral700 bg-opacity-30 p-6 backdrop-blur-sm transition-colors duration-300 ease-in-out focus:bg-opacity-30 focus:outline focus:outline-1 focus:outline-offset-3 focus:outline-neutral300">
            <img
              className="w-16 rounded-md object-contain outline outline-1 outline-neutral500"
              src={avatar}
            />
            <div className="flex gap-4">
              <button
                type="button"
                onClick={reset}
                className="rounded-md bg-neutral700 bg-opacity-30 px-3 py-1 text-base text-neutral300 underline transition-colors duration-300 ease-in-out hover:bg-opacity-60"
              >
                Remove image
              </button>
              <input
                ref={fileInputRef}
                onChange={onChange}
                className="hidden"
                type="file"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="rounded-md bg-neutral700 bg-opacity-30 px-3 py-1 text-base transition-colors duration-300 ease-in-out hover:bg-opacity-60"
              >
                Change image
              </button>
            </div>
          </div>
          <p
            className={`${
              error ? "text-orange500" : "text-neutral300"
            } flex gap-2 text-xs transition-all duration-300 ease-in-out`}
          >
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
            {error || "Upload your photo (JPG or PNG, max size: 500KB)"}
          </p>
        </div>
      ) : (
        <label className="flex w-full flex-col gap-2">
          Upload Avatar
          <button
            type="button"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={onChange}
            onClick={() => fileInputRef.current.click()}
            className={`${dragging ? "bg-opacity-60" : "bg-opacity-30"} dashed flex h-40 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg bg-neutral700 p-6 backdrop-blur-sm transition-colors duration-300 ease-in-out hover:bg-opacity-60 focus:bg-opacity-30 focus:outline focus:outline-1 focus:outline-offset-3 focus:outline-neutral300`}
          >
            <input
              ref={fileInputRef}
              onChange={onChange}
              className="hidden"
              type="file"
            />
            <img
              className="rounded-lg bg-neutral700 bg-opacity-80 p-2 outline outline-1 outline-neutral500 group-hover:bg-opacity-100 group-focus:bg-opacity-80"
              src={uploadIcon}
            />
            <p className="text-lg text-neutral300">
              Drag and drop or click to upload
            </p>
          </button>
          <p
            className={`${
              error ? "text-orange500" : "text-neutral300"
            } flex gap-2 text-xs transition-all duration-300 ease-in-out`}
          >
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
            {error || "Upload your photo (JPG or PNG, max size: 500KB)"}
          </p>
        </label>
      )}
    </>
  );
};

export default Upload;
