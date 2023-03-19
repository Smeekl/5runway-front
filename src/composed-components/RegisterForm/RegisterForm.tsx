import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import Button from '@components/Button/Button';
import SidebarErrorIndicator from '@components/SidebarErrorIndicator/SidebarErrorIndicator';
import CustomFormikField from '@components/CustomFormikField/CustomFormikField';
import { RegistrationSchema } from '@schemas';
import { EMAIL_EXISTS } from '@constants';
import { useRegister } from './useRegister.hook';
import { useRegisterGoogle } from './userRegisterGoogle.hook';
import './style.css';


export const RegisterForm = () => {
  const navigate = useNavigate();
  const { mutate, isError } = useRegister(() => navigate('/'));
  const { mutateGoogle } = useRegisterGoogle(() => navigate('/'));
  const registration = useGoogleLogin({
    onSuccess: (
      { access_token }: { access_token: string }
    ) => mutateGoogle(access_token),
  });

  return (
    <div className="registration-form">
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={({ email, password }, actions) => {
          mutate({ email, password });
          actions.setErrors({ email: isError ? EMAIL_EXISTS : '' });
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <p className="registration-form__name">Email</p>
            <Field
              name="email"
              type="email"
              className="registration-form__field"
            ></Field>
            <SidebarErrorIndicator
              content={errors.email || ''}
              active={Boolean(touched.email && errors.email)}
            />

            <p className="registration-form__name">Password</p>
            <CustomFormikField
              name="password"
              className="registration-form__field"
            />
            <SidebarErrorIndicator
              content={errors.password || ''}
              active={Boolean(touched.password && errors.password)}
            />

            <p className="registration-form__name">Confirm Password</p>
            <Field
              name="confirmPassword"
              type="password"
              className="registration-form__field"
            ></Field>
            <SidebarErrorIndicator
              content={errors.confirmPassword || ''}
              active={Boolean(
                touched.confirmPassword && errors.confirmPassword
              )}
            />

            <Button
              htmlType="submit"
              disabled={!(isValid && dirty)}
              className="registration-form__register"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <div className="registration-form__network">
        <Button className="registration-form__google" onClick={registration}>Google</Button>
      </div>
    </div>
  );
};
