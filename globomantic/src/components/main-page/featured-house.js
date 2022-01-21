import House from "../house";

function FeaturedHouse({ house }) {
  if (house) {
    return (
      <div>
        <div className="row featuredHouse">
          <h3 className="col-md-12 text-center">Featued House</h3>
        </div>
        <House house={house} />
      </div>
    );
  }

  return <div>No Featured House</div>;
}

export default FeaturedHouse;
