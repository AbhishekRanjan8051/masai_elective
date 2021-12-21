import styles from "../styles/About.module.css";
import Navbar from "../components/navbar";

const AboutPage = () => (
  <div>
    <Navbar />
    <h1 className={styles.heading}>Welcome to About Page</h1>
  </div>
);

export default AboutPage;
