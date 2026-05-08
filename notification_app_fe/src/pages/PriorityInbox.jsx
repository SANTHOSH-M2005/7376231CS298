import { useEffect, useState } from "react";

import { fetchNotifications } from "../api/notificationApi";

import NotificationCard from "../components/NotificationCard";

function PriorityInbox() {
  const [
    priorityNotifications,
    setPriorityNotifications,
  ] = useState([]);

  const [topN, setTopN] = useState(10);

  useEffect(() => {
    const getData = async () => {
      try {
        const data =
          await fetchNotifications();

        const priorityMap = {
          Placement: 3,
          Result: 2,
          Event: 1,
        };

        const sorted = [...data].sort(
          (a, b) => {
            if (
              priorityMap[b.Type] !==
              priorityMap[a.Type]
            ) {
              return (
                priorityMap[b.Type] -
                priorityMap[a.Type]
              );
            }

            return (
              new Date(b.Timestamp) -
              new Date(a.Timestamp)
            );
          }
        );

        setPriorityNotifications(
          sorted.slice(0, topN)
        );
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [topN]);

  return (
    <div style={{ marginBottom: "40px" }}>
      <h1>Priority Inbox</h1>

      <select
        value={topN}
        onChange={(e) =>
          setTopN(Number(e.target.value))
        }
        style={{
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <option value={5}>Top 5</option>

        <option value={10}>Top 10</option>

        <option value={15}>Top 15</option>

        <option value={20}>Top 20</option>
      </select>

      {priorityNotifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </div>
  );
}

export default PriorityInbox;