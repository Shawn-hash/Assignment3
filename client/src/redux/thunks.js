import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getCardsAsync = createAsyncThunk(
  actionTypes.GET_USERS,
  async () => {
    return await UserService.getCards();
  }
);

export const addCardAsync = createAsyncThunk(
  actionTypes.ADD_USER,
  async (name) => {
    return await UserService.addCard({ name });
  }
);
