import uploadIcon from "../assets/icon-upload.svg";
import infoIcon from "../assets/icon-info.svg";

const Upload = () => {
  return (
    <>
      <label className="flex w-full flex-col gap-2">
        Upload Avatar
        <button className="focus:outline-offset-3 group flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed bg-neutral700 bg-opacity-40 p-6 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-opacity-100 focus:bg-opacity-40 focus:outline focus:outline-1 focus:outline-neutral0">
          <img
            className="rounded-lg bg-neutral700 bg-opacity-80 p-2 outline outline-1 outline-neutral500 group-hover:bg-opacity-100 group-focus:bg-opacity-80"
            src={uploadIcon}
          />
          <p className="text-neutral300">Drag and drop or click to upload</p>
        </button>
        <p className="flex gap-1 text-xs text-neutral300">
          <img src={infoIcon} /> Upload your photo (JPG or PNG, max size:
          500KB).
        </p>
      </label>
    </>
  );
};

export default Upload;
