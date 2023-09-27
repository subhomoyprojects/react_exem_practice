import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authLogin } from "../../../Redux/Slice/AuthSlice";

export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      dispatch(authLogin(formData));
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
            <TextField margin="normal" fullWidth label="Email" {...register("email", { required: true })} error={!!errors.email} helperText={errors.email?.type === "required" ? "Email is Required" : ""} />
            <TextField margin="normal" fullWidth label="Password" {...register("password", { required: true })} error={!!errors.password} helperText={errors.password?.type === "required" ? "Password is Required" : ""} />

            <Button sx={{ marginY: 2 }} fullWidth type="submit" variant="contained" size="large">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </main>
  );
}
