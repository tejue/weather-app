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
    console.log(activities);
  }

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}
