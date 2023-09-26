import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <main>
        <Container>
          <Box>
            <Typography variant="h3">Home</Typography>
            <Typography variant="body2" marginY={2}>
              Count {count}
            </Typography>
            <Box className="btn-holder">
              <Button variant="contained" color="success" type="button" onClick={increment}>
                Increment
              </Button>
              <Button variant="contained" color="error" type="button" onClick={decrement}>
                Decrement
              </Button>
            </Box>
          </Box>
        </Container>
      </main>
    </>
  );
}
