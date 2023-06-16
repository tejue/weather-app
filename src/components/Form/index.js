import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formElements = form.elements;

    const data = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };

    onAddActivity(data);
    form.reset();
    formElements.name.focus();
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
