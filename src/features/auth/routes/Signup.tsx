import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SignupPage } from "../components/SignupPage";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Sign up to your account">
      <SignupPage onSuccess={() => navigate("/app")} />
    </Layout>
  );
};

export default Signup;
