import { Box, Button, Container, Typography } from "@mui/material";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return (state = state + 1);
    }
    case "DECREMENT": {
      if (state > 0) {
        return (state = state - 1);
      }
    }
    default: {
      return state;
    }
  }
};

export default function About() {
  const [state, dispatch] = useReducer(reducer, 1);
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <main>
        <Container>
          <Box>
            <Typography variant="h3">About</Typography>
            <Typography variant="body2" marginY={2}>
              Count {state}
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
