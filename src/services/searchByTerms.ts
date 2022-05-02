import getError, { ErrorResponse } from "./utils/getError";
import { StatusCodes } from "http-status-codes";
import httpClient from "../config/axiosClient.config";
import slugify from "slugify";

export type SearchAlbumResult = {
  wrapperType: string;
  kind: string;
  artistId: Number;
  collectionId: Number;
  trackId: Number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: Number;
  trackPrice: Number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: Number;
  discNumber: Number;
  trackCount: Number;
  trackNumber: Number;
  trackTimeMillis: Number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: true;
};

export type SearchResponse = {
  resultCount: Number;
  results: SearchAlbumResult[];
};

const searchByTermsService = async (
  terms: string
): Promise<SearchResponse | ErrorResponse> => {
  try {
    const parseTerms = slugify(terms, "+");
    const url = `/search?term=${parseTerms}`;
    const response = await httpClient().get<SearchResponse>(url);
    return response;
  } catch (err) {
    return getError(StatusCodes.INTERNAL_SERVER_ERROR, "internal_server_error");
  }
};

export default searchByTermsService;
