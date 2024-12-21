import uploadIcon from "../assets/icon-upload.svg";
import infoIcon from "../assets/icon-info.svg";

const Upload = () => {
  return (
    <>
      <label className="flex w-full flex-col gap-2">
        Upload Avatar
        <div className="bg-neutral700 flex cursor-pointer flex-col items-center gap-2 rounded-lg bg-opacity-40 p-6 outline-dashed outline-1 backdrop-blur-sm">
          <img className="bg-neutral700 rounded-lg p-2" src={uploadIcon} />
          <p>Drag and drop or click to upload</p>
        </div>
        <p className="text-neutral300 flex gap-1 text-xs">
          <img src={infoIcon} /> Upload your photo (JPG or PNG, max size:
          500KB).
        </p>
      </label>
    </>
  );
};

export default Upload;
