import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store';
import { EStatus, TItem, TItemFormValues } from '@types';
import * as itemsAPI from '@services/items';

interface ItemsState {
  status: EStatus;
  items: TItem[];
  error: string | null;
}

const initialState: ItemsState = {
  status: EStatus.INIT,
  items: [],
  error: null,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    itemsLoading: state => {
      state.status = EStatus.LOADING;
    },
    itemsLoaded: (state, action) => {
      state.status = EStatus.LOADED;
      state.items = action.payload;
    },
    itemsError: (state, action) => {
      state.status = EStatus.ERROR;
      state.items = [];
      state.error = action.payload;
    },
    itemAdd: (state, action) => {
      state.status = EStatus.LOADED;
      state.items = [...state.items, action.payload];
    },
    itemDelete: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { itemsLoading, itemsLoaded, itemsError, itemAdd, itemDelete } =
  itemsSlice.actions;

// Thunk Actions //
export const fetchItems = () => async (dispatch: AppDispatch) => {
  dispatch(itemsLoading());

  try {
    const response = await itemsAPI.fetchItems();
    dispatch(itemsLoaded(response));
  } catch (e) {
    dispatch(itemsError('Something went wrong'));
  }
};

export const addItem =
  (values: TItemFormValues) => async (dispatch: AppDispatch) => {
    dispatch(itemsLoading());

    try {
      const response = await itemsAPI.addItem(values);
      dispatch(itemAdd(response));
    } catch (e) {
      dispatch(itemsError('Something went wrong'));
    }
  };

// Selectors //
export const selectItems = createSelector(
  (state: RootState) => state.items,
  items => items.items,
);

export const selectItemsStatus = createSelector(
  (state: RootState) => state.items,
  items => items.status,
);

export const selectItemById = createSelector(
  [(state: RootState) => state.items, (state: RootState, id?: string) => id],
  (items: ItemsState, id?: string) => items.items.find(item => item.id === id),
);

export default itemsSlice.reducer;
