
// import styles from "../styles/aboutUs.module.css";
import Link from 'next/link'

function AboutUsPage() {
    return (
        <div className= ''>
            <div>
                <button><Link href="/AboutUs/Ryan" >Ryan</Link></button>
                <div>
                    {/* <p className={styles.description}>My name is Ryan</p> */}
                </div>
            </div>
            <div>
                <button><Link href="/AboutUs/Lane" >Lane</Link></button>
                <div>
                    <p>My name is Lane</p>
                </div>
            </div>
            
        </div>
    )
  }
  
  export default AboutUsPage;