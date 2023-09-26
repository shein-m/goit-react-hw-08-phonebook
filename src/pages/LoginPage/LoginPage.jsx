import { LoginForm } from 'components/AuthForms/LoginForm';
import { Container } from 'components/Container';
import { LoginPageAuthForm, LoginPageAuthHeader } from './loginPage.styled';

const Login = () => {
  return (
    <Container>
      <LoginPageAuthForm>
        <LoginPageAuthHeader>Login</LoginPageAuthHeader>
        <LoginForm />
      </LoginPageAuthForm>
    </Container>
  );
};

export default Login;
