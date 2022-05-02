import AlbumList from "modules/home/components/albumList/AlbumList";
import Header from "modules/home/components/header/Header";

const App = () => {

  const handleChange = (value: string) => {
    console.log('value: ', value)
  }

  return (
    <div id="App">
      <Header onChange={handleChange} />
      <main>
        <AlbumList albums={[]} />
      </main>
    </div>
  );
}

export default App;
