import { InputProps } from 'antd';

export type TSimpleWrapper = {
  className?: string;
};

export type TSearchInput = {
  className?: string;
  startIcon?: boolean;
  endIcon?: boolean;
  onIconClick?: () => void;
} & InputProps;

export type TSidebarErrorIndicator = {
  content: string;
  active: boolean;
};

export type TSidebarCustomFormikField = {
  name: string;
  className: string;
};

export type TSearchIcon = {
  onIconClick?: () => void;
};

export type TCustomFormikSlider = {
  minCurrentValue: number;
  maxCurrentValue: number;
  minValue: number;
  maxValue: number;
  minInputName: string;
  maxInputName: string;
  step: number;
  format: string;
  setFieldValue: (field: string, value: unknown) => void;
};
