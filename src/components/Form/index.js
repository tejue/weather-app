import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (data.isForGoodWeather) {
      data.isForGoodWeather = true;
    } else {
      data.isForGoodWeather = false;
    }
    onAddActivity(data.name, data.isForGoodWeather.checked);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <label htmlFor="nameInput">Name:</label>
      <input id="nameInput" type="text" name="name" required />
      <div>
        <label htmlFor="weatherActivityCheckbox">Good-weather activity:</label>
        <input
          id="weatherActivityCheckbox"
          type="checkbox"
          name="isForGoodWeather"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
