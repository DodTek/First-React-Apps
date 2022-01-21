import { useNavigate as useHistory } from "react-router-dom";

function HouseFilter({ allHouses }) {
  const history = useHistory();
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];
  countries.unshift(null);

  function onSearchChange(params) {
    console.log(params.target.value);
    const country = params.target.value;
    {
      /*OLD WAY history.push(`/searchresults/${country}`)*/
    }
    history(`/searchresults/${country}`, { replace: true });
  }

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default HouseFilter;
