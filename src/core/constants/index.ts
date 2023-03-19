export const REQUIRED_FIELD = 'This field is required';
export const WRONG_EMAIL = 'Wrong email';
export const EMAIL_EXISTS = 'Email address already exists';

export const PASSWORD_ERRORS = {
  MIN_LENGTH: 'Password requires at least 8 characters',
  MAX_LENGTH: "Password can't be longer than 32 characters",
  LOWERCASE_CONTAIN: 'Should contain lowercase letter',
  UPPERCASE_CONTAIN: 'Should contain uppercase letter',
  NUMBER_CONTAIN: 'Should contain number',
  SYMBOL_CONTAIN: 'Should contain special symbol',
  SAME: 'Both password need to be the same',
  WRONG_PASSWORD: 'Wrong password',
  INCORRECT_PASSWORD: 'Incorrect password',
};

export const ENDPOINTS = {
  RESTORE_PASSWORD: '/auth/reset_password',
  RESET_PASSWORD: '/auth/restore_password',
};

export const FILTER_DEFAULT = {
  MIN_PRICE_NAME: 'minPrice',
  MIN_PRICE: 0,
  START_MIN_PRICE: 500000,
  MAX_PRICE_NAME: 'maxPrice',
  MAX_PRICE: 1200000,
  START_MAX_PRICE: 900000,
  MIN_MILEAGE_NAME: 'minMileage',
  MIN_MILEAGE: 0,
  START_MIN_MILEAGE: 1000,
  MAX_MILEAGE_NAME: 'maxMileage',
  MAX_MILEAGE: 10000,
  START_MAX_MILEAGE: 5000,
  PRICE_STEP: 1000,
  PRICE_FORMAT: '$',
  MILEAGE_STEP: 10,
  MILEAGE_FORMAT: 'ML',
};
