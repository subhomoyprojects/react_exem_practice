import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <main>
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h3">Register</Typography>
          <form>
            <TextField margin="normal" fullWidth label="Email" />
            <TextField margin="normal" fullWidth label="Password" />

            <Button sx={{ marginY: 2 }} fullWidth type="submit" variant="contained" size="large">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </main>
  );
}
