import { NavLink } from "react-router-dom";

export const Main = () => {
  return (
    <div>
      <h2>Hello world! It's a main page</h2>
      <NavLink to="/tabs">
          Navigate to tabs
      </NavLink>
    </div>
  );
};
