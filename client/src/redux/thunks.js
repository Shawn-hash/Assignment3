import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actions/actionTypes';
import CardService from './service';

export const getCardsAsync = createAsyncThunk(
  actionTypes.GET_USERS,
  async () => {
    return await CardService.getCards();
  }
);

export const addCardAsync = createAsyncThunk(
  'cards/addCard',
  async (item) => {
    // Convert the item object to JSON
    const itemJson = JSON.stringify(item);
    // Make the API request to send the JSON payload to the server
    const response = await fetch('http://localhost:3001/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: itemJson,
    });

    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }

    // Return the response data as the fulfilled action payload
    return data;
  }
);

