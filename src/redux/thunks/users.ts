import { ThunkAction } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/api";
import { RootState } from "../reduxStore";
import { setUsersData } from "../slices/users";

export const getUsers =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      const data = await usersAPI.getUsers().then(response => response.data);
      dispatch(setUsersData(data));
    };