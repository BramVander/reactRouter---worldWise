import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext used outside of CitiesProvider");

  return context;
}

export default useCities;
