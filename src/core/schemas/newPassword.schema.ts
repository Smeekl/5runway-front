import * as Yup from 'yup';
import { PasswordSchema, ConfirmPasswordSchema } from './index';

export const Schema = Yup.object().shape({
  password: PasswordSchema,
  confirmPassword: ConfirmPasswordSchema
});
