import * as Yup from 'yup';
import { REQUIRED_FIELD, PASSWORD_ERRORS } from '@constants';

export const Schema = Yup.string()
    .min(8, PASSWORD_ERRORS.MIN_LENGTH)
    .max(32, PASSWORD_ERRORS.MAX_LENGTH)
    .matches(/(?=.*[a-z])/g, PASSWORD_ERRORS.LOWERCASE_CONTAIN)
    .matches(/(?=.*[A-Z])/g, PASSWORD_ERRORS.UPPERCASE_CONTAIN)
    .matches(/(?=.*\d)/g, PASSWORD_ERRORS.NUMBER_CONTAIN)
    .matches(/(?=.*[@$!%#*?&])/g, PASSWORD_ERRORS.SYMBOL_CONTAIN)
    .matches(/[A-Za-z\d@$#!%*?&]{8,32}/g, PASSWORD_ERRORS.WRONG_PASSWORD)
    .required(REQUIRED_FIELD);
