import Image from "next/image"
import Link from "next/link"
// media
import HeroImage from "../public/hero-icon.png"
import Fantom from "../public/fantom-logo.png"
import Ethereum from "../public/ethereum-logo.png"
import Avalanche from "../public/avalanche-logo.png"
import Polygon from "../public/polygon-logo.png"
import Binance from "../public/bsc-logo.png"
// style
import styles from "../styles/Hero.module.scss"

const Hero = () => {
  return (
    <>
      <main className={styles.hero}>
        <section className={styles.container}>
          <div className={styles.content}>
            <h1>
              Securely connect smart contacts with off-chain data and services
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              tempore rerum natus aperiam corporis blanditiis!
            </p>
            <Link className={styles.button} href="#">
              <span>Develop with Tenggara</span>
            </Link>
          </div>
          <div className={styles.image}>
            <Image src={HeroImage} alt="hero" width={728} height={502} />
          </div>
        </section>
      </main>

      {/* stacks */}
      <section className={styles.stacks}>
        <div className={styles.container}>
          <div>
            <Image
              src={Ethereum}
              alt="ethereum"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <Image
              src={Fantom}
              alt="fantom"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <Image
              src={Avalanche}
              alt="avalanche"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <Image
              src={Polygon}
              alt="polygon"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <Image
              src={Binance}
              alt="binance"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
