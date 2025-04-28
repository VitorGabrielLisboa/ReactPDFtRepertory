import styles from "./style.module.scss";
import { generateThumbnail } from "./generateThumbnail"; // <-- importa isso
import { useEffect, useRef, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";

export const ProjectCard = ({ project, onClick }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Só observar uma vez
          }
        });
      },
      {
        threshold: 0.1, // Quando 10% do elemento aparecer
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (project.file && isVisible) {
      const loadThumbnail = async () => {
        const thumb = await generateThumbnail(project.file);
        setThumbnail(thumb);
      };
      loadThumbnail();
    }
  }, [project.file, isVisible]);
  return (
    <div ref={cardRef} className={styles.card} onClick={() => onClick(project)}>
      <div className={styles.thumbnail}>
        {thumbnail ? (
          <img src={thumbnail} alt="Thumbnail do PDF" />
        ) : (
          <OrbitProgress color="#040404" size="medium" text="" textColor="" />
        )}
      </div>
      <h4>{project.title}</h4>
    </div>
  );
};
