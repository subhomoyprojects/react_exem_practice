import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { loginThunk } from "../../../Redux/Slice/AuthSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const payload = {
        email: email,
        password: password,
      };
      const response = dispatch(loginThunk(payload));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h3">Register</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              error={!!errors.email}
              helperText={errors.email?.type === "required" ? "Email field is required" : errors.email?.type === "pattern" ? "Valid Email is Required" : ""}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })}
              error={!!errors.password}
              helperText={
                errors.password?.type === "required" ? "Password is required" : errors.password?.type === "pattern" ? "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character" : ""
              }
            />

            <Button sx={{ marginY: 2 }} fullWidth type="submit" variant="contained" size="large">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </main>
  );
}
