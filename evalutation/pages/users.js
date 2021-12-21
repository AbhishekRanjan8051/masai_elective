import styles from "../styles/User.module.css";
import Navbar from "../components/navbar";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Arpit",
    stcode: "nj2_007",
  },
  {
    id: 2,
    name: "Rambhu",
    stcode: "nj2_008",
  },
  {
    id: 3,
    name: "Nitish",
    stcode: "nj2_009",
  },
];

const IndexPage = () => (
  <div>
    <Navbar />
    <h1 className={styles.heading}>User's List: </h1>
    {data.map(({ id, name,stcode }) => (
      <div className={styles.user}>{name} ▶️ {stcode}</div>
    ))}
  </div>
);
export default IndexPage;
