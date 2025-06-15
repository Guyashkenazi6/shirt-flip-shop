
import { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { toast } from "sonner";

export interface CartItem {
  id: string; // Unique ID for cart item (e.g., productId-color-size)
  productId: number;
  name: string;
  price: number;
  quantity: number;
  color: { name: string; value: string };
  size: string;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any, color: any, size: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const localData = localStorage.getItem('cart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: any, color: any, size: string, quantity: number) => {
    const itemId = `${product.id}-${color.name}-${size}`;
    const existingItem = cartItems.find(item => item.id === itemId);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      const newItem: CartItem = {
        id: itemId,
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
        color,
        size,
        image: color.frontImage || product.frontImage,
      };
      setCartItems([...cartItems, newItem]);
    }
    toast.success("Added to cart", {
      description: `${quantity} x ${product.name} (${size}, ${color.name})`,
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
     toast.info("Item removed", {
      description: `Item has been removed from your cart.`,
    });
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === itemId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
