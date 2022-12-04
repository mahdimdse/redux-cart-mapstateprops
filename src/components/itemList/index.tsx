import { connect } from 'react-redux';
import { ListProps } from '../../types';
import ItemRow from '../itemRow';

const ItemList = (props: ListProps) => {
  const { cartItems, shops } = props;
  return (
      <tbody>
        {cartItems?.length ? (
          cartItems.map((item, key) => {
            return <ItemRow key={key} value={item} shops={shops} />;
          })
        ) : (
          <tr className='cart--items__item-row text-center'>
            <td colSpan={3}>No items available!</td>
          </tr>
        )}
      </tbody>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.cartReducers.cartItems,
  };
};
export default connect(mapStateToProps)(ItemList);
