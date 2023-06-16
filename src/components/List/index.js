import "./List.css";
export default function List({ activities }) {
  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}
