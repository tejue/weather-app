import Form from "./components/Form/index.js";
import { uid } from "uid";
import List from "./components/List/index.js";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
<<<<<<< HEAD
  const [activities, setActivities] = useState([]);
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
    console.log(newActivity);
=======
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
>>>>>>> fa46d8a (add list, functonality and local storage)
    console.log(activities);
  }

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}
