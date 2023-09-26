import { SignUpForm } from 'components/AuthForms/SignUpForm';
import { Container } from 'components/Container';
import { RegisterPageForm, RegisterPageHeader } from './registerPage.styled';

const Register = () => {
  return (
    <Container>
      <RegisterPageForm>
        <RegisterPageHeader>Registration</RegisterPageHeader>
        <SignUpForm />
      </RegisterPageForm>
    </Container>
  );
};

export default Register;
