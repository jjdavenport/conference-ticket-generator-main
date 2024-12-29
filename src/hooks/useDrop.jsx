import { useRef, useState } from "react";

const useDrop = () => {
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

  return {
    dragging,
    fileInputRef,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
  };
};

export default useDrop;
