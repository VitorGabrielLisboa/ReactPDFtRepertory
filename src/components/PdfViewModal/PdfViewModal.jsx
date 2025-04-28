// src/components/PdfViewerModal/PdfViewerModal.jsx
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import styles from "./style.module.scss";
import { X } from "lucide-react";

export const PdfViewerModal = ({ project, onClose }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
          <h2>{project.title}</h2>
        </div>
        <div className={styles.pdfContainer}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={project.file}
              plugins={[defaultLayoutPluginInstance]}
              onError={(error) => console.error("Erro ao carregar PDF", error)}
              defaultScale={1.0}
              onDocumentLoad={(e) => {
                console.log("Total de páginas:", e.doc.numPages);
              }}
              theme="dark"
            />
          </Worker>
        </div>
      </div>
    </div>
  );
};
