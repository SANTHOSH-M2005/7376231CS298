import axios from "axios";

const API = "http://localhost:5000/notifications";

export const fetchNotifications = async () => {
  const response = await axios.get(API);

  return response.data.notifications;
};