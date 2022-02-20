import styles from "../../../styles/Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<h3>Navbar</h3>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
