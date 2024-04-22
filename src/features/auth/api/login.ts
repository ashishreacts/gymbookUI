import axios from "axios";
export type LoginRequestDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = async (loginData: LoginRequestDTO) => {
  await axios.post("http://localhost:7575/api/v1/auth/login", loginData);
};
