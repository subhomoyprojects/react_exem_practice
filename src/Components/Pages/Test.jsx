import { useState } from "react";

export default function PassValidation() {
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const [upclr, setUpclr] = useState("red");
  const [lwclr, setLwclr] = useState("red");
  const [numclr, setNumclr] = useState("red");
  const [lgclr, setLgclr] = useState("red");

  const validatePassword = (password) => {
    if (password.length < 8) {
      setMsg("Weak password");
    } else {
      setMsg("");
    }

    if (/[A-Z]+/.test(password)) {
      setUpclr("green");
    } else {
      setUpclr("red");
    }

    if (/[a-z]+/.test(password)) {
      setLwclr("green");
    } else {
      setLwclr("red");
    }

    if (/[0-9]+/.test(password)) {
      setNumclr("green");
    } else {
      setNumclr("red");
    }

    if (password.length === 8) {
      setLgclr("green");
    } else {
      setLgclr("red");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPass(newPassword);
    validatePassword(newPassword);
  };

  return (
    <div>
      <input type="password" value={pass} style={{ height: "30px", width: "300px", textAlign: "center" }} onChange={handlePasswordChange} placeholder="Password" />
      <br />
      <br />
      <p
        style={{
          height: "50px",
          width: "250px",
          border: "2px solid black",
          margin: "auto",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        {msg}
      </p>
      <br />
      <h4 style={{ color: upclr }}>Password must contain at least one uppercase character</h4>
      <h4 style={{ color: lwclr }}>Password must contain at least one lowercase character</h4>
      <h4 style={{ color: numclr }}>Password must contain at least one number</h4>
      <h4 style={{ color: lgclr }}>Password must be of 8 characters</h4>
    </div>
  );
}
