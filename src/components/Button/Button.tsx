import { Button as AntButton, ButtonProps } from 'antd';

const Button = (props: ButtonProps) => (
  <AntButton {...props}>{props.children}</AntButton>
);

export default Button;
