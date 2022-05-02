import Header from "../modules/shared/components/header/Header";

const App = () => {

  const handleChange = (value: string) => {
    console.log('value: ', value)
  }

  return (
    <div id="App">
      <Header onChange={handleChange} />
      <main>
        hola
      </main>
    </div>
  );
}

export default App;
