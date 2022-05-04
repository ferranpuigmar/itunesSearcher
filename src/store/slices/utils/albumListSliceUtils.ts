import { TableSearhAlbumResult } from "modules/home/components/albumList/AlbumList";
import { SearchAlbumResult } from "services/searchByTerms";

export const filterBySongs = (list: SearchAlbumResult[]) =>
  list.filter((item) => item.kind === "song");

export const orderByArtists = (a: SearchAlbumResult, b: SearchAlbumResult) => {
  if (a.artistId > b.artistId) return 1;
  if (a.artistId === b.artistId) return 0;
  return -1;
};

export const songsListToAlbumDTO = (
  data: SearchAlbumResult[]
): TableSearhAlbumResult[] => {
  const result = data.map((row, index) => ({
    id: `${row.artistId}_${index}`,
    artistName: row.artistName,
    collectionName: row.collectionName,
    artworkUrl100: row.artworkUrl100,
  }));

  return result;
};
