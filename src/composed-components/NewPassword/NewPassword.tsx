import { Field, Form, Formik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@components/Button/Button';
import SidebarErrorIndicator from '@components/SidebarErrorIndicator/SidebarErrorIndicator';
import CustomFormikField from '@components/CustomFormikField/CustomFormikField';
import { NewPasswordSchema } from '@schemas';
import { useService } from '@services/services';
import { useResetPassword } from './useResetPassword.hook';
import './style.css';


const NewPassword = () => {
  const { storageService } = useService();
  const query = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const { mutate } = useResetPassword(() => navigate('/login'));

  useEffect(() => {
    const tokenFromUrl = query.get('token');
    storageService.set('token', tokenFromUrl);
    navigate('/login/confirm-new-password');
  }, []);

  return (
    <div className="new-password">
      <h3 className="new-password__title">New Password</h3>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={NewPasswordSchema}
        onSubmit={({ password }) => {
          try {
            const token = storageService.get('token');
            mutate({ token, password });
            storageService.remove('token');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <p className="new-password__name">New Password</p>
            <CustomFormikField
              name="password"
              className="new-password__field"
            />
            <SidebarErrorIndicator
              content={errors.password || ''}
              active={Boolean(touched.password && errors.password)}
            />

            <div className="new-password__block">
              <p className="new-password__name">Confirm Password</p>
              <Field
                name="confirmPassword"
                type="password"
                className="new-password__field"
              ></Field>
              <SidebarErrorIndicator
                content={errors.confirmPassword || ''}
                active={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
              />
            </div>

            <Button
              htmlType="submit"
              disabled={!(isValid && dirty)}
              className="new-password__btn"
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPassword;
