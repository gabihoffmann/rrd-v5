import { Link } from "react-router-dom";

export function SearchPage() {
  return (
    <div>
      <h2>Search Employee</h2>

      <nav>
        <Link to={"/employee/details"}>Employee Undefined</Link>
        <br />
        <Link to={"/employee/details/1"}>Employee 1</Link>
      </nav>
    </div>
  );
}
