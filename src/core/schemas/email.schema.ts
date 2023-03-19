import * as Yup from 'yup';
import { REQUIRED_FIELD, WRONG_EMAIL } from '@constants';

export const Schema = Yup.string().email(WRONG_EMAIL).required(REQUIRED_FIELD);
