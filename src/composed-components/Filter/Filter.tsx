import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FILTER_DEFAULT } from '@constants';
import Button from '@components/Button/Button';
import CustomFormikSlider from '@components/CustomFormikSlider/CustomFormikSlider';
import './style.css';

const Filter = () => {
  const navigate = useNavigate();

  return (
    <div className="filter">
      <Formik
        initialValues={{
          model: '',
          location: '',
          minPrice: FILTER_DEFAULT.START_MIN_PRICE,
          maxPrice: FILTER_DEFAULT.START_MAX_PRICE,
          minMileage: FILTER_DEFAULT.START_MIN_MILEAGE,
          maxMileage: FILTER_DEFAULT.START_MAX_MILEAGE,
        }}
        onSubmit={(values) => {
          navigate('../product', { replace: true, state: values });
        }}
        validateOnChange={false}
      >
        {({ setFieldValue, resetForm, values }) => (
          <Form>
            <div className="filter__reset">
              <span onClick={() => resetForm()}
                className="filter__reset-button">CLEAR</span>
            </div>

            <p className="filter__name">Model</p>
            <Field
              name="model"
              data-testid="model"
              type="model"
              placeholder="BEECHCRAFT PREMIER"
              className="filter__field"
            />

            <div className="filter__line"></div>

            <p className="filter__name">Price</p>
            <CustomFormikSlider
              minInputName={FILTER_DEFAULT.MIN_PRICE_NAME}
              maxInputName={FILTER_DEFAULT.MAX_PRICE_NAME}
              minCurrentValue={values.minPrice}
              maxCurrentValue={values.maxPrice}
              minValue={FILTER_DEFAULT.MIN_PRICE}
              maxValue={FILTER_DEFAULT.MAX_PRICE}
              step={FILTER_DEFAULT.PRICE_STEP}
              format={FILTER_DEFAULT.PRICE_FORMAT}
              setFieldValue={setFieldValue}
            />

            <div className="filter__line"></div>

            <p className="filter__name">Mileage</p>
            <CustomFormikSlider
              minInputName={FILTER_DEFAULT.MIN_MILEAGE_NAME}
              maxInputName={FILTER_DEFAULT.MAX_MILEAGE_NAME}
              minCurrentValue={values.minMileage}
              maxCurrentValue={values.maxMileage}
              minValue={FILTER_DEFAULT.MIN_MILEAGE}
              maxValue={FILTER_DEFAULT.MAX_MILEAGE}
              step={FILTER_DEFAULT.MILEAGE_STEP}
              format={FILTER_DEFAULT.MILEAGE_FORMAT}
              setFieldValue={setFieldValue}
            />

            <div className="filter__line"></div>

            <p className="filter__name">Location</p>
            <Field
              name="location"
              data-testid="location"
              type="location"
              placeholder="Ukraine, Kharkiv"
              className="filter__field"
            />

            <Button
              htmlType="submit"
              className="filter__button"
              data-testid="filter__button"
            >
              Show Results
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
