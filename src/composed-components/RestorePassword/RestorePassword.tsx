import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button/Button';
import SidebarErrorIndicator from '@components/SidebarErrorIndicator/SidebarErrorIndicator';
import { RestorePasswordSchema } from '@schemas';
import { useRestorePassword } from './useRestorePassword.hook';
import './style.css';

const RestorePassword = () => {
  const navigate = useNavigate();
  const { mutate } = useRestorePassword(() => navigate('/login/message-sent'));

  return (
    <div className="restore-password">
      <h3 className="restore-password__title">Restore Password</h3>
      <p className="restore-password__description">
        Fill in the field and a link to restore your password will be sent to
        your email.
      </p>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={RestorePasswordSchema}
        onSubmit={({ email }) => {
          try {
            mutate(email);
          } catch (error) {}
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="restore-password__form">
            <div className="restore-password__block">
              <p className="restore-password__name">Email</p>
              <Field
                name="email"
                type="email"
                className="restore-password__field"
              ></Field>
              <SidebarErrorIndicator
                content={errors.email || ''}
                active={Boolean(touched.email && errors.email)}
              />
            </div>

            <Button
              htmlType="submit"
              disabled={!(isValid && dirty)}
              className="restore-password__btn"
            >
              Restore
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RestorePassword;
