import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/redirect">Redirect</Link>
    </li>
    <li>
      <Link to="/example">Example</Link>
    </li>
  </ul>
);
