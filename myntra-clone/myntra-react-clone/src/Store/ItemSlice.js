import { createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../../../2-actual-backend/data/items";

const itemSlice = createSlice({
    name: 'items',
    initialState: DEFAULT_ITEMS,
    reducers: {
        addInitialItems: (store, action) => {
            return store;
        }
    }
});

export const itemsActions = itemSlice.actions;

export default itemSlice;

