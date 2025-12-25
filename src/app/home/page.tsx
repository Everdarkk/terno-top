import HomeHero from "@/components/HomeHero"
import HomeSummary from "@/components/HomeSummary"
import HomeConsulting from "@/components/HomeConsulting"
import HomeProducts from "@/components/HomeProducts"
import styles from "../../styles/HomePage.module.css"

export default function HomePage() {
    return (
        <div className={styles.container}>
            <HomeHero />
            <HomeSummary />
            <HomeConsulting />
            <HomeProducts />
        </div>
    )
}