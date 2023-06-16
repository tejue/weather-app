export default function Form() {
  return (
    <>
      <h2>Add new Activity:</h2>
      <label htmlFor="nameInput">Name</label>
      <input id="nameInput" type="checkbox">
        Name:
      </input>
      <label htmlFor="weatherActivityCheckbox">Good-weather activity</label>
      <input id="weatherActivityCheckbox"></input>
      <button type="submit"></button>
    </>
  );
}
