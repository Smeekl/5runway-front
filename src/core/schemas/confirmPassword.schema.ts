import * as Yup from 'yup';
import { REQUIRED_FIELD, PASSWORD_ERRORS } from '@constants';

export const Schema = Yup.string()
    .required(REQUIRED_FIELD).when('password', {
    is: (val: string) => (val && val.length),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      PASSWORD_ERRORS.SAME
    )
  });
