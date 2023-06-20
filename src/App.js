import Form from "./components/Form/index.js";
import { uid } from "uid";
import List from "./components/List/index.js";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  const isGoodWeather = true;
  const sunnyActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <List activities={sunnyActivities} isGoodWeather={isGoodWeather} />
    </div>
  );
}
