import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <p>
        Position: {lat}, {lng}
      </p>
      <button
        onClick={() => {
          setSearchParams({ lat: 11, lng: 11 });
        }}
      >
        Fetch new position
      </button>
    </div>
  );
}

export default Map;
