import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/6d3841615e6cb751e4bf5d3a/latest/${currency}`
        );
        const result = await response.json();
        if (result.result === "success") {
          setData(result);
        } else {
          console.error("Error fetching currency data:", result.error_message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchCurrencyData();
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
