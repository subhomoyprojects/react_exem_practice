import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { authRegister } from "../../../Redux/Slice/AuthSlice";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Register() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const { first_name, last_name, email, password } = data;
      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("password", password);
      dispatch(authRegister(formData));
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
              fullWidth
              margin="normal"
              label="First Name"
              {...register("first_name", { required: true, minLength: 3 })}
              error={!!errors.first_name}
              helperText={errors.first_name?.type === "required" ? "Name is Required" : errors.first_name?.type === "maxLength" ? "Minimum 3letters required" : ""}
            />
            <TextField margin="normal" fullWidth label="Last Name" {...register("last_name", { required: true })} error={!!errors.last_name} helperText={errors.last_name?.type === "required" ? "Name is Required" : ""} />
            <TextField margin="normal" fullWidth label="Email" {...register("email", { required: true })} error={!!errors.email} helperText={errors.email?.type === "required" ? "Email is Required" : ""} />
            <TextField margin="normal" fullWidth label="Password" {...register("password", { required: true })} error={!!errors.password} helperText={errors.password?.type === "required" ? "Password is Required" : ""} />
            <Button component="label" sx={{ marginY: 2 }} variant="contained" color="warning" startIcon={<CloudUpload />}>
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <Button sx={{ marginY: 2 }} fullWidth type="submit" variant="contained" size="large">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </main>
  );
}
