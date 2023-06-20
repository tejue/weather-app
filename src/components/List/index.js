import "./List.css";
export default function List({ activities, isGoodWeather }) {
  return (
    <>
      {isGoodWeather ? (
        <h2>The weather is awesome! Go outside and:</h2>
      ) : (
        <h2>Bad weather outside! Here's what you can do: </h2>
      )}
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
