import "./Form.css";

export default function Form({ onAddActivity }) {
  return (
    <form className="form">
      <h2>Add new Activity:</h2>
      <label htmlFor="nameInput">Name:</label>
      <input id="nameInput" type="text" />
      <div>
        <label htmlFor="weatherActivityCheckbox">Good-weather activity:</label>
        <input id="weatherActivityCheckbox" type="checkbox" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
