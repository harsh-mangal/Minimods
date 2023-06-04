// utils.js
export function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }
    
    return str.slice(0, maxLength) + '...';
  }
  
  // utils.js

export const formatPrice = (price) => {
  const priceStr = String(price);

  const parts = priceStr.split('.');
  const rupees = parts[0];
  const paise = parts[1];

  const formattedRupees = rupees.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const formattedPrice = paise ? `₹${formattedRupees}.${paise}` : `₹${formattedRupees}`;

  return formattedPrice;
};
