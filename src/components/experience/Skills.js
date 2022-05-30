import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaGithubAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiJquery,
  SiTailwindcss,
  SiMaterialui,
  SiRedux,
  SiWordpress,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { ReactComponent as Rquery } from "../../assets/svg/react-query-seeklogo.com.svg";

export const skills = [
  { title: "Html", icon: <AiOutlineHtml5 />, exp: "Experienced" },
  { title: "Css", icon: <FaCss3Alt />, exp: "Experienced" },
  { title: "Javascript", icon: <SiJavascript />, exp: "Experienced" },
  { title: "TypeScript", icon: <SiTypescript />, exp: "Basic" },
  { title: "Bootstrap", icon: <SiBootstrap />, exp: "Experienced" },
  { title: "J-Query", icon: <SiJquery />, exp: "Intermediate" },
  { title: "React", icon: <RiReactjsLine />, exp: "Intermediate" },
  { title: "Tailwind-Css", icon: <SiTailwindcss />, exp: "Intermediate" },
  { title: "MUI", icon: <SiMaterialui />, exp: "Intermediate" },
  { title: "React Query", icon: <Rquery />, exp: "Intermediate" },
  { title: "Redux", icon: <SiRedux />, exp: "Basic" },
  { title: "Git", icon: <FaGithubAlt />, exp: "Basic" },
  { title: "Wordpress", icon: <SiWordpress />, exp: "Experienced" },
  { title: "Node JS", icon: <SiNodedotjs />, exp: "Intermediate" },
  { title: "Express", icon: <SiExpress />, exp: "Intermediate" },
  { title: "Mongo DB", icon: <SiMongodb />, exp: "Basic" },
];
