import React from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const schema = Yup.object({
  username: Yup.string().required('Please type user name')
})

const PersonalDataOne = ({ onSubmit, StepUp, StepDown }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const onSubmitHandler = (data) => {
    onSubmit(data);
    StepUp();
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="username" {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" {...register("email")} />
        </div>
        <div className="form-group">
          <button type="button" onClick={StepDown}>Cancel</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}

export default PersonalDataOne;




import React from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const schema = Yup.object({
  username: Yup.string().required('Please type user name'),
  email: Yup.string().email('Please enter a valid email address').required('Please enter an email address')
});

const PersonalDataOne = ({ StepUp, StepDown }) => {
  const { handleSubmit, watch, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "all"
  });

  const onSubmit = (data) => {
    fetch('http://example.com/api/formdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Form data posted successfully:', result);
        StepUp(); // Move to the next step
      })
      .catch(error => {
        console.error('Error posting form data:', error);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="username" {...register("username")} />
          {errors.username && <p style={{ color: 'red', fontSize: '12px', textAlign: 'left' }}>{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" {...register("email")} />
          {errors.email && <p style={{ color: 'red', fontSize: '12px', textAlign: 'left' }}>{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <button type="button" onClick={StepDown}>Cancel</button>
          <button type="submit">Next</button>
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </div>
      </form>
    </div>
  )
}

export default PersonalDataOne;


<PersonalDataOne onSubmit={handlePersonalDataSubmit} StepUp={moveToNextStep} StepDown={moveToPreviousStep} />


const handleFormSubmit = (data) => {
  onSubmit(data); // Pass the form data to the parent component
  StepUp(); // Move to the next step
}


<select
    id={`room_${i}_flooring`}
    name={`room_${i}_flooring`}
    {...register(`room_${i}_flooring`)}
    className="label-txt"
>
    <option value="wood">Wood</option>
    <option value="clay">Clay</option>
    <option value="tile">Tile</option>
    <option value="ceramic">Ceramic</option>
    <option value="mat">Mat</option>
</select>





import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TokenContext from "./TokenContext";

const LoginForm = () => {
  const { saveToken } = useContext(TokenContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://example.com/api/login",
        data
      );
      const token = response.data.token;
      saveToken(token);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        {...register("username", { required: true })}
      />
      {errors.username && <span>This field is required</span>}
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;




import { createContext } from "react";

const TokenContext = createContext();
export default TokenContext;


import React, { useState } from "react";
import TokenContext from "./TokenContext";

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const saveToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <TokenContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;


import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import TokenProvider from "./components/TokenProvider";

function App() {
  return (
    <TokenProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </TokenProvider>
  );
}

export default App;


const location = useLocation();

    // Check if the current route is the special route that requires a different Navbar
const isSpecialRoute = location.pathname === '/special-route';
    





import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Login({ setAuth }) {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/login", data);
      localStorage.setItem("token", response.data.token);
      setAuth(true);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      <input type="password" {...register("password")} />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
}

function Dashboard() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/login" />;
  }

  const decodedToken = jwt_decode(token);

  return (
    <div>
      <h1>Welcome, {decodedToken.username}</h1>
      <button onClick={() => localStorage.removeItem("token")}>Logout</button>
    </div>
  );
}

function App() {
  const [isAuthenticated, setAuth] = useState(false);

  return (
    <Router>
      <Route path="/login">
        <Login setAuth={setAuth} />
      </Route>
      <Route path="/dashboard">
        {isAuthenticated ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
    </Router>
  );
}

export default App;
