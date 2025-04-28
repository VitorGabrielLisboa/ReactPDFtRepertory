import { useState } from "react";
import { Footer } from "../Footer/Footer";
import styles from "./style.module.scss";
import { PdfViewerModal } from "../PdfViewModal/PdfViewModal";
import { projectsData } from "../Data/projectsData";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenPdf = (project) => setSelectedProject(project);
  const handleClosePdf = () => setSelectedProject(null);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Projetos</h1>
          <div className={styles.grid}>
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleOpenPdf}
              />
            ))}
          </div>
        </div>
        {selectedProject && (
          <PdfViewerModal project={selectedProject} onClose={handleClosePdf} />
        )}
      </main>

      <Footer />
    </div>
  );
};
