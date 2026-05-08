import AllNotifications from "./pages/AllNotifications";
import PriorityInbox from "./pages/PriorityInbox";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <PriorityInbox />
      <hr />
      <AllNotifications />
    </div>
  );
}

export default App;