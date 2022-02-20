import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/User.module.scss";

const UsersPage = () => {
	const [singleUser, setSingleUser] = useState({});
	const router = useRouter();
	const { user } = router.query;

	useEffect(() => {
		fetch(`http://localhost:3000/api/allusers/${user}`)
			.then((api) => api.json())
			.then((data) => setSingleUser(data.message));
	}, []);

	return !singleUser.first_name ? (
		<p>User Not Found</p>
	) : (
		<div className={styles.singleUser}>
			<h1>User Details</h1>
			<h2>User First Name: {singleUser.first_name}</h2>
			<h2>User Last Name: {singleUser.last_name}</h2>
			<h2>User ID: {singleUser.id}</h2>
		</div>
	);
};

export default UsersPage;
