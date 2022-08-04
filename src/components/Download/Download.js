import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { saveAs } from "file-saver";
import Resume from "../../assets/Resume.pdf";
import "./Download.css";

export default function Download() {
  const saveFile = () => {
    saveAs(
      "https://cdfoye.github.io/Portfolio/files/CatherineFoyeResume.pdf",
      "CatherineFoyeResume.pdf"
    );
  };
  return (
    <div className="wrapper">
      <Document className="center" file={Resume}>
        <Page pageNumber={1} />
        <div className="btn-container">
          <button className="dl-btn" onClick={saveFile}>
            <span>download</span>
          </button>
        </div>
      </Document>
    </div>
  );
}
