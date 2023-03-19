import * as Yup from 'yup';
import { PasswordSchema, EmailSchema, ConfirmPasswordSchema } from './index';

export const Schema = Yup.object().shape({
  email: EmailSchema,
  password: PasswordSchema,
  confirmPassword: ConfirmPasswordSchema
});
