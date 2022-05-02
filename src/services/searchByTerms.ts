import getError, { ErrorResponse } from "./utils/getError";
import { StatusCodes } from "http-status-codes";
import httpClient from "../config/axiosClient.config";
import slugify from "slugify";

export type SearchResult = {
  wrapperType: String;
  kind: String;
  artistId: Number;
  collectionId: Number;
  trackId: Number;
  artistName: String;
  collectionName: String;
  trackName: String;
  collectionCensoredName: String;
  trackCensoredName: String;
  artistViewUrl: String;
  collectionViewUrl: String;
  trackViewUrl: String;
  previewUrl: String;
  artworkUrl30: String;
  artworkUrl60: String;
  artworkUrl100: String;
  collectionPrice: Number;
  trackPrice: Number;
  releaseDate: String;
  collectionExplicitness: String;
  trackExplicitness: String;
  discCount: Number;
  discNumber: Number;
  trackCount: Number;
  trackNumber: Number;
  trackTimeMillis: Number;
  country: String;
  currency: String;
  primaryGenreName: String;
  isStreamable: true;
};

export type SearchResponse = {
  resultCount: Number;
  results: SearchResult[];
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
