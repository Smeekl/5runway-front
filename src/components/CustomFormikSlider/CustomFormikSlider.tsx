import { Slider } from 'antd';
import { Field, FieldProps } from 'formik';
import { NumericFormat } from 'react-number-format';
import { TCustomFormikSlider } from '../types';
import './style.css';

const CustomFormikSlider = ({
    minCurrentValue,
    maxCurrentValue,
    minValue,
    maxValue,
    minInputName,
    maxInputName,
    step,
    format,
    setFieldValue
  }: TCustomFormikSlider) => (
  <div className="slider-wrapper">
    <div className="slider__inputs">
      <Field name={minInputName}>
        {({ field }: FieldProps) => <NumericFormat
              className="slider__input"
              data-testid={minInputName}
              thousandSeparator={true}
              value={Number(field.value)}
              onValueChange={({ floatValue }) => setFieldValue(minInputName, floatValue)}
              suffix={format}
            />
        }
      </Field>

      <Field name={maxInputName}>
        {({ field }: FieldProps) => <NumericFormat
              className="slider__input"
              data-testid={maxInputName}
              thousandSeparator={true}
              value={Number(field.value)}
              onValueChange={({ floatValue }) => setFieldValue(maxInputName, floatValue)}
              suffix={format}
            />
        }
      </Field>
    </div>

    <Slider range min={minValue} max={maxValue} value={[minCurrentValue, maxCurrentValue]} step={step}
      onChange={([min, max]) => {
        setFieldValue(minInputName, min);
        setFieldValue(maxInputName, max);
      }}
      className="slider"
    />
  </div>
);

export default CustomFormikSlider;
