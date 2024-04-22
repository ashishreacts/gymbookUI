// import { yupResolver } from "@hookform/resolvers/yup";
// import { Box, TextField, Button, Typography, Select } from "@mui/material";
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { Link } from "react-router-dom";
// import * as yup from "yup";
// import { UserPrefix, GenderEnum } from "../types";

// const UserPrefixDisplayValue = {
//   "Mr.": UserPrefix.MR,
//   "Mrs.": UserPrefix.MRS,
//   "Miss.": UserPrefix.MISS,
// };

// const DisplayGender = {
//   Male: GenderEnum.MALE,
//   Female: GenderEnum.FEMALE,
//   Other: GenderEnum.OTHER,
//   Unspecified: GenderEnum.UNSPECIFIED,
// };

// const schema: yup.ObjectSchema<SignupValues> = yup.object().shape({
//   firstName: yup.string().required("First Name is required"),
//   middleName: yup.string().required("Middle Name is required"),
//   lastName: yup.string().required("Last Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   phone: yup.string().required("Phone is required"),
//   password: yup
//     .string()
//     .required("Password is required")
//     .min(6, "Password should have at least 6 characters"),
//   prefix: yup
//     .string()
//     .oneOf(Object.values(UserPrefix))
//     .required("Prefix is required"),
//   dateOfBirth: yup.string().required("Date of Birth is required"),
//   gender: yup
//     .string()
//     .oneOf(Object.values(GenderEnum))
//     .required("Gender is required"),
// });

// type SignupValues = {
//   prefix: UserPrefix;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   gender: GenderEnum;
//   password: string;
//   dateOfBirth: string;
//   middleName: string;
// };

// type SignupFormProps = {
//   onSuccess: () => void;
// };

// export const SignupPage: React.FC<SignupFormProps> = ({ onSuccess }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignupValues>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit: SubmitHandler<SignupValues> = async () => {
//     onSuccess();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           maxWidth: "300px",
//           margin: "auto",
//         }}
//       >
//         <Select
//           label="Prefix"
//           error={!!errors.prefix}
//           {...register("prefix")}
//           defaultValue={UserPrefix.MR}
//           options={prefixDisplayValues.map((displayValue) => ({
//             label: displayValue,
//             value: UserPrefixDisplayValue[displayValue],
//           }))}
//         />

//         <Select
//           label="Gender"
//           error={!!errors.gender}
//           {...register("gender")}
//           defaultValue={GenderEnum.UNSPECIFIED}
//           options={genderDisplayValues.map((displayValue) => ({
//             label: displayValue,
//             value: DisplayGender[displayValue],
//           }))}
//         />

//         <TextField
//           label="First Name"
//           variant="outlined"
//           {...register("firstName")}
//           error={!!errors.firstName}
//           helperText={errors.firstName ? errors.firstName.message : ""}
//           sx={{ mb: 2, mt: 2 }}
//         />

//         <TextField
//           label="Middle Name"
//           variant="outlined"
//           {...register("middleName")}
//           error={!!errors.middleName}
//           helperText={errors.middleName ? errors.middleName.message : ""}
//           sx={{ mb: 2 }}
//         />

//         <TextField
//           label="Last Name"
//           variant="outlined"
//           {...register("lastName")}
//           error={!!errors.lastName}
//           helperText={errors.lastName ? errors.lastName.message : ""}
//           sx={{ mb: 2 }}
//         />

//         <TextField
//           label="Date of Birth"
//           variant="outlined"
//           type="date"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           {...register("dateOfBirth")}
//           error={!!errors.dateOfBirth}
//           helperText={errors.dateOfBirth ? errors.dateOfBirth.message : ""}
//           sx={{ mb: 2 }}
//         />

//         <TextField
//           label="Email"
//           variant="outlined"
//           {...register("email")}
//           error={!!errors.email}
//           helperText={errors.email ? errors.email.message : ""}
//           sx={{ mb: 2 }}
//         />

//         <TextField
//           label="Phone"
//           variant="outlined"
//           {...register("phone")}
//           error={!!errors.phone}
//           helperText={errors.phone ? errors.phone.message : ""}
//           sx={{ mb: 2 }}
//         />

//         <TextField
//           label="Password"
//           variant="outlined"
//           {...register("password")}
//           error={!!errors.password}
//           helperText={errors.password ? errors.password.message : ""}
//           sx={{ mb: 2 }}
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           sx={{ mb: 2 }}
//         >
//           Signup
//         </Button>

//         <Typography variant="body1">
//           Already have an account? <Link to="../login">Log In</Link>
//         </Typography>
//       </Box>
//     </form>
//   );
// };
