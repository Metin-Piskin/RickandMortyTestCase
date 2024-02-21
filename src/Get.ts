import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(CharacterName: any) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [veri, setVeri] = useState([]);

  const fetchData = async () => {
    try {
      const { data: responseData } = await axios.get(
        "https://rickandmortyapi.com/api/character/?name=" + CharacterName
      );
      setVeri(responseData.results);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [CharacterName]);

  return { veri, loading, error };
}

export default useFetch;
