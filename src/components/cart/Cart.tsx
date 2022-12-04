import { useState, useEffect } from 'react';
import serialize from 'form-serialize';
import { store } from '../../store';
import { toast } from 'react-toastify';
import { setCart, addItem } from '../../store/actions/cartActions';
import CartTitle from '../cartTitle';
import AddForm from './addForm';
import ItemList from '../itemList';
import { fetchApi } from '../../api';
import { Shop } from '../../types';
import '../../styles/style.scss';
import '../../styles/responsive.scss';

const shopUrl = 'shop.json';
const formId = 'addToCart';

const Cart = () => {
  const [shops, setShops] = useState<Shop[] | null>([]);

  const getData = async () => {
    const shopData = await fetchApi({ url: shopUrl }).then((data) => {
      return data;
    });
    if (shopData?.data?.length) {
      setShops(shopData.data);
    }
  };

  const initItems = () => {
    var cartItems = localStorage.getItem("cartItems");
    if(cartItems){
      store.dispatch(setCart(JSON.parse(cartItems)));
    }
    else {
      store.dispatch(setCart([]));
    }
  }
  const clearForm = (body: any) => {
    const formFields = Object.keys(body);
    if (formFields.length) {
      formFields.forEach((name) => {
        const input = document.querySelector(
          `[name=${name}]`,
        ) as HTMLInputElement | null;
        if (input) input.value = '';
      });
    }
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const body: any = serialize(form, { hash: true, empty: false });

    const { shopId, productName } = body;

    if (shopId && productName) {
      const newItem = {
        id: Date.now(),
        name: productName,
        shopId: shopId,
      };
      store.dispatch(addItem(newItem));
      toast.success('Successfully Added to Cart');
      clearForm(body);
    }
  };

  useEffect(() => {
    getData();
    initItems();
  }, []);

  return (
    <div className={'cart-main'}>
        <CartTitle />
        <form className={'cart-main__form'} id={formId} onSubmit={submitForm}/>
        <table className='cart--items'>
          <AddForm shops={shops} form={formId}/>
          <ItemList shops={shops}/>
        </table>
    </div>
  )
};

export default Cart;