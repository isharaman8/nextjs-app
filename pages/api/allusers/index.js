// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { users } from "../_nothing/allUsers";

export default function handler(req, res) {
	console.log(req.query);
	res.status(200).json({
		users: users,
	});
}
