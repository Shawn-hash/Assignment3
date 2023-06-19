import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actions/actionTypes';

export const getCardsAsync = createAsyncThunk(
  'cards/getCards',
  async () => {
    const response = await fetch('http://localhost:3001/cards');
    const data = await response.json();
    return data;
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

export const deleteCardAsync = createAsyncThunk(
  'cards/deleteCard',
  async (id) => {
    // Make the API request to delete the card with the given id
    const response = await fetch('http://localhost:3001/:id', {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }

    // Return the id as the fulfilled action payload
    return id;
  }
);


