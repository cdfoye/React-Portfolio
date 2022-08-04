import React from "react";
import { saveAs } from "file-saver";
import Resume from "../../assets/Resume.pdf";

export default function FileSave() {
  const saveFile = () => {
    saveAs({ Resume }, "CatherineFoyeResume.pdf");
  };
  return (
    <div>
      <button onClick={saveFile}>Download</button>
    </div>
  );
}
