class User {
	constructor(first_name, last_name, id) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.id = id;
	}
}

export const users = [
	{
		...new User("Aman", "Kumar", "1"),
	},
	{
		...new User("John", "Doe", "2"),
	},
	{
		...new User("Masai", "School", "3"),
	},
];
