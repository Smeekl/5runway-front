import * as Yup from 'yup';
import { PasswordSchema, EmailSchema } from './index';

export const Schema = Yup.object().shape({
  email: EmailSchema,
  password: PasswordSchema,
});
