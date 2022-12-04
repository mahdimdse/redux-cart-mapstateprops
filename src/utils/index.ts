import { Shop } from '../types';

export const getShopName = (shopId: string, shops: Shop[] | null) => {
  const shop = shops?.find((shop) => shop.id === shopId);
  return shop?.name;
};
