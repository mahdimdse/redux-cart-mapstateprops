import InputField from './inputField';
import SelectField from './selectField';
import { Shop } from '../../../types';

const AddForm = (props: {
  shops: Shop[] | null;
  form?: string | undefined;
}) => {
  const { shops, form } = props;

  return (
    <thead>
      <tr>
        <th className='cart--items__item-row__head'>
          <InputField
            placeHolder={'Name'}
            name={'productName'}
            isRequired={true}
            form={form}
          />
        </th>
        <th className='cart--items__item-row__head'>
          <SelectField
            placeHolder={'shop'}
            name={'shopId'}
            isRequired={true}
            options={shops}
            form={form}
          />
        </th>
        <th className='cart--items__item-row__head'>
          <button className='btn btn-success ml__3 ml__sm__0' type='submit' form={form}>
            Add
          </button>
        </th>
      </tr>
    </thead>
  );
};

export default AddForm;
