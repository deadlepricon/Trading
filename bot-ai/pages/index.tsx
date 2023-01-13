import Button from "../components/Button";
import PropTypes from "prop-types";
import styles from "../styles/index.module.css";
import Link from 'next/link'

function HomePage() {
  return (
    <div className={styles.main}>
      {/* <div className={styles.title}>
        <h1 className="h1">Trading Ai</h1>
      </div> */}
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3 className={styles.animatecharcter}> Trading AI</h3>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>some info</p>
      </div>
      <div className={styles.buttonLayout}>
        <button className={styles.button}><Link href="/AboutUs/" >About Us</Link></button>
        <button className={styles.button}><Link href="/charts/" >See Charts</Link></button>
      </div>
    </div>
  );
}

export default HomePage;
