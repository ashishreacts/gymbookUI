import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { LoginRequestDTO, loginWithEmailAndPassword } from "../api/login";
const schema: yup.ObjectSchema<LoginData> = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should have at least 6 characters"),
});
type LoginData = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};
export const LoginPage: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const loginData: LoginRequestDTO = {
    email: "example@example.com",
    password: "password123",
  };

  const { data } = useQuery({
    queryKey: ["login"],
    queryFn: () => loginWithEmailAndPassword(loginData),
  });

  if (!data) {
    return <div />;
  }
  const onSubmit: SubmitHandler<LoginData> = async () => {
    onSuccess();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
        >
          Login
        </Button>

        <Typography variant="body1">
          Create a new account? <Link to="../signup">Sign up</Link>
        </Typography>
      </Box>
    </form>
  );
};
