import React from "react";
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return data;
}

// Usage
function MyComponent() {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");

  if (!data) {
    return <p>Loading...</p>; // Or some other loading indicator
  }

  return (
    <ul>
      {data.slice(0, 5).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default MyComponent;
