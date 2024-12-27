export class UsersService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    {
      id: 1,
      name: 'John',
      gender: 'male',
      age: 25,
      isMarried: true,
    },
    {
      id: 2,
      name: 'David',
      gender: 'male',
      age: 18,
      isMarried: false,
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((x) => x.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
  }
}
