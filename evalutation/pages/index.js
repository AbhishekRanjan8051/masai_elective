import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

const IndexPage = () => (
  <div>
    <Navbar />
    <h1 className={styles.heading}>Hello, ✍️ Welcome to Home page/Landing Page </h1>
  </div>
);
export default IndexPage;
