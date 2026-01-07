import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Personas from "../../components/Personas";
import Seasons from "../../components/Seasons";

import styles from "./Home.module.css";
// import {styles} from "./Home.module.css"

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <Seasons />
      <About />
      <Personas />
      <Footer />
    </div>
  );
}

export default Home;
