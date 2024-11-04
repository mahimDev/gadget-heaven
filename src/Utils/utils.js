// get item
const getItemAddToCards = () => {
  const cards = localStorage.getItem("cards");
  if (cards) {
    const parseCard = JSON.parse(cards);
    return parseCard;
  } else {
    return [];
  }
};
// set item
const setItemAddToCard = (item) => {
  const storedCards = getItemAddToCards();
  storedCards.push(item);
  const cards = JSON.stringify(storedCards);
  const card = localStorage.setItem("cards", cards);
};
// delete item
// wishlist
// get item
const getItemWishlist = () => {
  const cards = localStorage.getItem("wishlist");
  if (cards) {
    const parseCard = JSON.parse(cards);
    return parseCard;
  } else {
    return [];
  }
};
// set item
const setItemWishlist = (item) => {
  const storedCards = getItemWishlist();
  storedCards.push(item);
  const cards = JSON.stringify(storedCards);
  const card = localStorage.setItem("wishlist", cards);
};
// delete item

export {
  setItemAddToCard,
  getItemAddToCards,
  setItemWishlist,
  getItemWishlist,
};
