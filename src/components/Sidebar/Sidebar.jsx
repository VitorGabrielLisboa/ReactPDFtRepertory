import { useState } from "react";
import styles from "./style.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { SideBarData } from "../Data/sideBarData";

export const SideBar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  return (
    <aside className={`${styles.aside} ${menu ? styles.open : ""}`}>
      <div className={styles.header}>
        <span>Nome</span>
        {menu ? (
          <FaTimes
            className={`${styles.icon} ${styles.rotate}`}
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <FaBars className={styles.icon} onClick={() => setMenu(!menu)} />
        )}
      </div>
      <div className={styles.line}></div>
      <div>
        <img
          //src="https://static-00.iconduck.com/assets.00/user-icon-512x512-r62xmy4p.png"
          src="https://i.pinimg.com/736x/3f/e6/d5/3fe6d5b8b0751ef01b646f32a147c16b.jpg"
          alt=""
        />
      </div>

      <ul className={styles.navList}>
        {/* <li className={styles.active}>
          <FaHome />
          <span className={`${styles.text} ${menu ? styles.show : ""}`}>
            Home
          </span>
        </li> */}
        {SideBarData.map((item, index) => (
          <li
            key={index}
            className={
              location.pathname === item.path ? styles.active : undefined
            }
          >
            <Link to={item.path} className={styles.link}>
              {item.icon}
              <span className={`${styles.text} ${menu ? styles.show : ""}`}>
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
