import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notificationApi";
import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [filter, setFilter] =
    useState("All");

  useEffect(() => {
    const getData = async () => {
      try {
        const data =
          await fetchNotifications();

        setNotifications(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) =>
            item.Type === filter
        );

  return (
    <div>
      <h1>All Notifications</h1>

      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        style={{
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <option value="All">All</option>

        <option value="Placement">
          Placement
        </option>

        <option value="Result">
          Result
        </option>

        <option value="Event">
          Event
        </option>
      </select>

      {filteredNotifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </div>
  );
}

export default AllNotifications;