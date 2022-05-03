import searchByTermsService, {
  SearchResponse,
  SearchAlbumResult,
} from "./../../services/searchByTerms";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  filterBySongs,
  orderByArtists,
  songsListToAlbumDTO,
} from "./utils/albumListSliceUtils";

export interface AlbumListState {
  albums: [] | SearchAlbumResult[];
  currentPage: number;
  loading: boolean;
  error: any;
}

type searchByTermsParams = {
  terms: string;
  limit?: number;
};

const initialState: AlbumListState = {
  albums: [],
  loading: false,
  error: null,
  currentPage: 1,
};

export const searchByTermsAsync = createAsyncThunk(
  "albums/searchByTrms",
  async ({ terms, limit }: searchByTermsParams) => {
    const response = await searchByTermsService(terms, limit);
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
export const selectAlbums = (state: RootState) => {
  const albums = state.albumList.albums;
  if (!albums.length) return albums;

  const songs = filterBySongs(albums as SearchAlbumResult[]).sort(
    orderByArtists
  );
  const albumsDTO = songsListToAlbumDTO(songs);

  return albumsDTO;
};
export const selectAlbumsLoading = (state: RootState) =>
  state.albumList.loading;
export const selectAlbumsError = (state: RootState) => state.albumList.error;

export default albumListSlice.reducer;
