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
		...new User("Chirag", "Jorasia", "2"),
	},
	{
		...new User("Ashok", "Kumar", "3"),
	},
	{
		...new User("Sunita", "Devi", "4"),
	},
	{
		...new User("Priyanka", "Kumar", "5"),
	},
	{
		...new User("John", "Doe", "6"),
	},
];
