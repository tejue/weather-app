import Form from "./components/Form/index.js";
import { useState } from "react";
import { uid } from "uid";

export default function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
    console.log(newActivity);
    console.log(activities);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
