import { CartItem, Shop } from '../../types';
import { getShopName } from '../../utils';
import { store } from '../../store';
import { removeItem } from '../../store/actions/cartActions';

const ItemRow = (props: { value: CartItem; shops: Shop[] | null }) => {
  const { value, shops } = props;

  const deleteItem = (itemId: number) => {
    store.dispatch(removeItem(itemId));
  };

  return (
    <tr className={'cart--items__item-row'} key={value.id}>
      <td className='cart--items__item-row__col'>{value.name}</td>
      <td className='cart--items__item-row__col'>{getShopName(value.shopId, shops)}</td>
      <td className='cart--items__item-row__col'>
        <button
        className='btn btn-borderless btn-danger'
          onClick={() => {
            deleteItem(value.id);
          }}
        >
          {' '}
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ItemRow;
