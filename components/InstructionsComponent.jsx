import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Bluefie<span>-web3-dapp</span>
				</h1>
				<p>
					<span>/pages/index.js</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://t.me/spacetop123456_bot"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Play Game</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://tick.rf.gd/mint/"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Explore More</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://tick.rf.gd/mint/"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Learn more</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>

				<div className={styles.icons_container}>
	
					<div>
						<a
							href="https://twitter.com/ZodiacAnimals27"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
