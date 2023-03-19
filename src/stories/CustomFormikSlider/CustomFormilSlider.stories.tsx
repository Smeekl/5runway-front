import { Form, Formik } from 'formik';
import { Story } from '@storybook/react';
import CustomFormikSlider from '../../components/CustomFormikSlider/CustomFormikSlider';

export default {
  component: CustomFormikSlider,
  title: 'CustomFormikSlider',
  argTypes: {
    minInputName: {
      description: 'Input name which equal to formik mininal option value',
    },
    maxInputName: {
      description: 'Input name which equal to formik maximal option value',
    },
    minValue: {
      description: 'Minimal value for slider',
    },
    maxValue: {
      description: 'Maximal value for slider',
    },
    step: {
      description: 'Value which will increase/decrease value of input for every action',
    },
    setFieldValue: {
      description: 'Formik internal function which helps slider work with form',
    },
    minCurrentValue: {
      description: 'Minimal internal form value in this moment',
    },
    maxCurrentValue: {
      description: 'Maximal internal form value in this moment',
    },
    format: {
      description: 'Symbol(currency) which will be used for inputs',
    }
  }
}

const Template: Story = () => (
  <Formik
    initialValues={{
      model: '',
      location: '',
      minPrice: 400000,
      maxPrice: 600000,
    }}
    onSubmit={() => undefined}
  >
    {({ setFieldValue, values }) => (
      <Form>
        <CustomFormikSlider 
          minInputName="minPrice"
          maxInputName="maxPrice"
          minCurrentValue={values.minPrice}
          maxCurrentValue={values.maxPrice}
          minValue={0}
          maxValue={1200000}
          step={10000}
          format={'$'}
          setFieldValue={setFieldValue} />
      </Form>
    )}
  </Formik>
);

export const DefaultSlider = Template.bind({});
