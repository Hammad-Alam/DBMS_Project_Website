import { create } from 'zustand';

type CartItem = {
  id: number;
  name: string;
  description?: string;
  picture: string;
  price: number;
  count: number;
  stock: number;
  type?: string;
  isFeature: boolean;
};

type CartStore = {
  cartItems: CartItem[];
  totalAmount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
};

const calculateTotalAmount = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + (item.price * item.count), 0);
};

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  totalAmount: 0,
  
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
      let updatedCartItems;
      if (existingItem) {
        updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + item.count }
            : cartItem
        );
      } else {
        updatedCartItems = [...state.cartItems, item];
      }
      return {
        cartItems: updatedCartItems,
        totalAmount: calculateTotalAmount(updatedCartItems),
      };
    });
  },
  removeFromCart: (itemId) => {
    set((state) => {
      const updatedCartItems = state.cartItems.filter((item) => item.id !== itemId);
      return {
        cartItems: updatedCartItems,
        totalAmount: calculateTotalAmount(updatedCartItems),
      };
    });
  },
  updateQuantity: (itemId, quantity) => {
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === itemId ? { ...item, count: quantity } : item
      );
      return {
        cartItems: updatedCartItems,
        totalAmount: calculateTotalAmount(updatedCartItems),
      };
    });
  },
}));

export default useCartStore;
