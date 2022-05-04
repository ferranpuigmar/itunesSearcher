import AlbumList from "modules/home/components/albumList/AlbumList";
import Header from "modules/home/components/header/Header";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { searchByTermsAsync, selectAlbums, selectAlbumsLoading } from "store/slices/albumListSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(selectAlbums);
  const loading = useAppSelector(selectAlbumsLoading);

  const handleChange = async (value: string) => {
    dispatch(searchByTermsAsync({ terms: value }))
  }

  return (
    <div id="App">
      <Header onChange={handleChange} />
      <main>
        <AlbumList albums={albums} loading={loading} />
      </main>
    </div>
  );
}

export default App;
