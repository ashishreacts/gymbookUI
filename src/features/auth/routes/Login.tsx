import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { LoginPage } from "../components/LoginPage";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Log in to your account">
      <LoginPage onSuccess={() => navigate("/app")} />
    </Layout>
  );
};
