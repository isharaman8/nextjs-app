import { users } from "../_nothing/allUsers";

export default function handler(req, res) {
	const { user } = req.query;
	const requiredUser = users.find((oneUser) => oneUser.id === user);
	res.status(200).json({ message: requiredUser || "user not found" });
}
