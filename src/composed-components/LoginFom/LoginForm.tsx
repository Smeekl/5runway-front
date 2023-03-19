import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import Button from '@components/Button/Button';
import SidebarErrorIndicator from '@components/SidebarErrorIndicator/SidebarErrorIndicator';
import CustomFormikField from '@components/CustomFormikField/CustomFormikField';
import { LoginSchema } from '@schemas';
import { PASSWORD_ERRORS } from '@constants';
import { useLogin } from './useLogin.hook';
import { useLoginGoogle } from './useLoginGoogle.hook';
import './style.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };

  const { mutate, isError } = useLogin(redirect);
  const { mutateGoogle } = useLoginGoogle(() => navigate('/'));
  const login = useGoogleLogin({
    onSuccess: (
      { access_token }: { access_token: string }
    ) => mutateGoogle(access_token),
  });

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={({ email, password }, actions) => {
          mutate({ email, password });
          actions.setErrors({
            password: isError ? PASSWORD_ERRORS.INCORRECT_PASSWORD : '',
          });
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <p className="login-wrapper__name">Email</p>
            <Field
              name="email"
              type="email"
              className="login-wrapper__field"
            ></Field>
            <SidebarErrorIndicator
              content={errors.email || ''}
              active={Boolean(touched.email && errors.email)}
            />

            <p className="login-wrapper__name">Password</p>
            <CustomFormikField
              name="password"
              className="login-wrapper__field"
            />
            <SidebarErrorIndicator
              content={errors.password || ''}
              active={Boolean(touched.password && errors.password)}
            />

            <Button className="login-form__google" onClick={login}>Google</Button>
            <Button
              htmlType="submit"
              disabled={!(isValid && dirty)}
              className="login-wrapper__login"
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
