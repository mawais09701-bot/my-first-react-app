import ListItem from "./ListItem";

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

export default List;
