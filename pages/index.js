import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className={styles.container}>
				<h1>Home Page</h1>
				<div className={styles.userVisitLink}>
					<Link href="/users">See All Users</Link>
				</div>
			</div>
		</>
	);
}
