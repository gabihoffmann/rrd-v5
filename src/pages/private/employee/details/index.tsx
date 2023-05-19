import { useParams } from "react-router-dom";
import { EmployeeUrlParams } from "./types/urlParams";

export function DetailsPage() {
  const params = useParams<EmployeeUrlParams>();

  return (
    <div>
      {params.id && <h3>Details Employee {params.id}</h3>}
      {!params.id && <h3>Details Employee Not Found</h3>}
    </div>
  );
}
