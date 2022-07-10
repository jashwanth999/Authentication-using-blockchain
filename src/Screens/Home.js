import React from "react";


export default function Home() {
  const email = localStorage.getItem("email");
  const account = localStorage.getItem("account");
  return (
    <div>
      <h3>Your account: {account} </h3>
      <h3>Your email: {email} </h3>
      <button
        style={button}
        onClick={() => {
          localStorage.removeItem("email");
          localStorage.removeItem("account");
          window.location.reload();
        }}
      >
        {" "}
        Log out
      </button>
    </div>
  );
}
const button = {
  width: 100,
  padding: 10,
  borderRadius: 5,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "#9D27CD",
  border: "none",
};
