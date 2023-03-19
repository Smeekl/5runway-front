import { EyeOutlined } from '@ant-design/icons';
import { Field, FieldProps } from 'formik';
import { useState } from 'react';
import { TSidebarCustomFormikField } from '@components/types';
import './style.css';

const SidebarErrorIndicator = ({ name, className }: TSidebarCustomFormikField) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Field name={name}>
      {({ field }: FieldProps) => ( <div className="sidebar__field-wrapper">
          <input type={`${isHidden ? 'password' : 'text'}`} name={name}
            onChange={field.onChange}
            onBlur={field.onBlur}
            className={className}>
          </input>
          <EyeOutlined 
            onClick={() => setIsHidden(!isHidden)}
            className="sidebar__eye-icon" />
        </div>)}
    </Field>
  )
};

export default SidebarErrorIndicator;
