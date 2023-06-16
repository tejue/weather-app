import Form from "./components/Form/index.js";
import { useState } from "react";

export default function App() {
  const [activities, setActivities] = useState("");
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities, newActivity);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
