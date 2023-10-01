import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function BlogSearch() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setOutput(data.products);
      });
  }, []);
  useEffect(() => {
    if (search) {
      const handleApi = async () => {
        try {
          let response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
          let data = await response.json();
          setOutput(data.products);
        } catch (error) {
          console.error(error);
        }
      };

      setTimeout(() => {
        handleApi();
      }, 2000);
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <main>
      <Container>
        <section>
          <Typography variant="h4">How can you use the useEffect hook to search with debounce before making an API call?</Typography>
          <form onSubmit={handleSubmit}>
            <input type="search" name="" id="" value={input} onChange={(e) => setInput(e.target.value)} />
            <input type="submit" value="Submit" />
          </form>
          <br />

          {output.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </section>
      </Container>
    </main>
  );
}
