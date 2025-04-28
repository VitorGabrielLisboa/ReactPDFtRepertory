import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

//import { Projects } from "../Projects/Projects";
import { Main } from "../Main/Main";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    element: <Main />,
  },
  {
    title: "About Me",
    path: "/about",
    icon: <FaUser />,
    element: <About />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaProjectDiagram />,
    element: <Projects />,
  },
];
