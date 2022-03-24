import axios from "axios";

export const usersAPI = {
  getUsers: () => axios.get('https://jsonplaceholder.typicode.com/users')
};
