import { useNavigate as useHistory } from "react-router-dom";
import "./search-results.css";

function SearchResultsRow({ house }) {
  const history = useHistory();

  function setActive() {
    history(`/house/${house.id}`, { replace: true });
  }

  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
}

export default SearchResultsRow;
