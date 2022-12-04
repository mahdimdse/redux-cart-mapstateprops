import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export interface CartItem {
  id: number;
  name: string;
  shopId: string;
}

export interface Shop {
  id: string;
  name: string;
}

export interface Cart {
  cartItems: CartItem[] | [];
}

export interface DefaultAction {
  type: string;
  cartItems: CartItem[] | [];
  newItem: CartItem | null;
  deleteItemId: number | null;
}

enum autoComplete {
  on = 'on',
  off = 'off',
}

export interface InputFieldProps {
  placeHolder: string;
  name: string;
  isRequired?: boolean;
  isAutoCompleteEnabled?: autoComplete;
  form?: string;
}

export interface SelectProps {
  placeHolder: string;
  name: string;
  isRequired?: boolean;
  options: Shop[] | null;
  form?: string;
}

enum contentType {
  json = 'application/json',
}

export interface ApiProps {
  url: string;
  contentType?: contentType;
}

export interface ListProps {
    shops: Shop[] | null;
    cartItems: CartItem[] | null;
    dispatch: Dispatch<AnyAction>;
}