import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

import { FormControl, Input, FormLabel, Button } from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";

import Message from "./Items/Message";
import { FormGroup } from "../stylings/DetailPageStyle";

const MyForm = () => {
  // Navigator
  const navigate = useNavigate();

  // States
  const [Error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Input change handles
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form Submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    e.target.email.value = "";
    e.target.password.value = "";

    async function postJSON(data) {
      try {
        // Login api check
        const response = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        if (result.error === "user not found") {
          setError("loginError");
        } else {
          setError("");
          sessionStorage.setItem("loginEmail", data.email);
          navigate("/details");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    const data = {
      email: formData.email,
      password: formData.password,
    };
    postJSON(data);
  };

  return (
    <>
      {/* Message Module  */}
      {Error === "loginError" ? (
        <Message open={true} type="error" text="wrong credentials" />
      ) : (
        ""
      )}

      {/* Form */}
      <FormGroup onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            variant="outlined"
            color="success"
          />
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            color="success"
            type="submit"
            startIcon={<LoginIcon />}
            sx={{
              marginTop: "5px",
            }}
          >
            Login
          </Button>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default MyForm;
