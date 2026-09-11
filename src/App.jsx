import "./App.css";

function ListItem({ animal }) {
  return <li>{animal}</li>;
}

function List({ animals }) {
  return (
    <>
      {!animals && <div>Loading...</div>}

      {animals && animals.length > 0 && (
        <ul>
          {animals.map((animal) => {
            return <ListItem key={animal} animal={animal} />;
          })}
        </ul>
      )}

      {animals.length === 0 && <div>There are no Animals in the List</div>}
    </>
  );
}

function App() {
  const animals = ["Lion", "Bear", "Tiger", "Cat", "Leopard", "Lizard"];
  return (
    <>
      <List animals={animals} />
    </>
  );
}

export default App;
