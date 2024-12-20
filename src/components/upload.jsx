import uploadIcon from "../assets/icon-upload.svg";

const Upload = () => {
  return (
    <>
      <label>Upload Avatar</label>
      <div>
        <img src={uploadIcon} />
        <p>Drag and drop or click to upload</p>
      </div>
      <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
    </>
  );
};

export default Upload;
