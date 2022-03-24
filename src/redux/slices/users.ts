import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/users";

interface IUserReducer {
  users: Array<UserType>
}

const initialState: IUserReducer = {
  users: []
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setUsersData(state, action: PayloadAction<Array<UserType>>) {
      state.users = action.payload
    },
    deleteUserById(state, action: PayloadAction<number>) {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
    updateUserDataById(state, action: PayloadAction<{[key: string]: string | number}>) {
      const data = action.payload;
      const index = state.users.findIndex(user => user.id === data.id);

      const updatedUser = {
        ...state.users[index], 
        name: data.name as string,
        phone: data.phone as string,
        email: data.email as string,
        address: {
          ...state.users[index].address,
          suite: data.suite as string,
          street: data.street as string,
          city: data.city as string,
          zipcode: data.zipcode as string
        }
      }
      
      state.users = [...state.users.slice(0, index), updatedUser, ...state.users.slice(index + 1)]
    }
  }
});

export default usersSlice.reducer;
export const { setUsersData, deleteUserById, updateUserDataById } = usersSlice.actions;