import searchByTermsService, {
  SearchResponse,
  SearchAlbumResult,
} from "./../../services/searchByTerms";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AlbumListState {
  albums: null | SearchAlbumResult[];
  loading: boolean;
  error: any;
}

const initialState: AlbumListState = {
  albums: null,
  loading: false,
  error: null,
};

export const searchByTermsAsync = createAsyncThunk(
  "albums/searchByTemrs",
  async (terms: string) => {
    const response = await searchByTermsService(terms);
    return response;
  }
);

export const albumListSlice = createSlice({
  name: "albumList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchByTermsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByTermsAsync.fulfilled, (state, action) => {
        const payload = action.payload as SearchResponse;
        state.loading = false;
        state.albums = payload.results as SearchAlbumResult[];
      })
      .addCase(searchByTermsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Selectors
export const selectAlbumList = (state: RootState) => state.albumList.albums;
export const selectAlbumListStatus = (state: RootState) =>
  state.albumList.loading;
export const selectAlbumListError = (state: RootState) => state.albumList.error;

export default albumListSlice.reducer;
