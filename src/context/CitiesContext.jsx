import { createContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // fake (local) api
        // const response = await fetch(`${BASE_URL}/cities`);

        // lets use a real api
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/65a654a41f5677401f1e70dc/latest",
          {
            headers: {
              "X-Master-Key":
                "$2a$10$R185Mg/0X.6.4ZBzSyo5i.frKirNm.mxFI6pqH5GVFtic7oLgrUJ.",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // fake api
        // setCities(data);

        // real api
        setCities(data.record.cities);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider, CitiesContext };
