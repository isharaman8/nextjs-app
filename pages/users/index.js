import Link from "next/link";
import styles from "../../styles/User.module.scss";

const UsersPage = ({ users: { users } }) => {
	return (
		<div className={styles.userList}>
			<h1>All Users</h1>
			{users.map((oneUser) => {
				const { first_name, id } = oneUser;
				return (
					<h2 key={id}>
						Name: {first_name + "  "}, ID:{" "}
						<Link href={`/users/${id}`}>{id}</Link>
					</h2>
				);
			})}
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/allusers");
	const users = await res.json();
	return {
		props: {
			users,
		},
	};
}

export default UsersPage;
