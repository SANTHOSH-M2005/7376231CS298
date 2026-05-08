function NotificationCard({
  item,
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "10px",

        backgroundColor: "#f9f9f9",

        boxShadow:
          "0 2px 5px rgba(0,0,0,0.1)",

        wordWrap: "break-word",
      }}
    >
      <h3>{item.Type}</h3>

      <p>{item.Message}</p>

      <small>{item.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;