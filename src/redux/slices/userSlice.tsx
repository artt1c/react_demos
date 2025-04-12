import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
  users: IUser[],
}

const userInitState:UserSliceType = {
  users: [],
}

const loadUsers = createAsyncThunk(
  'userSlice/loadUsers',
  async (_, thunkAPI) => {
    try {
      const users = await userService.getAll();
      return thunkAPI.fulfillWithValue(users);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data)
    }
  }
)

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: userInitState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(loadUsers.rejected, (state, action) => {
        //...........
      })
});

export const userActions = {
  ...userSlice.actions,
  loadUsers
}
