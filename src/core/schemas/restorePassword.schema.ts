import * as Yup from 'yup';
import { EmailSchema } from './index';

export const Schema = Yup.object().shape({
  email: EmailSchema,
});
