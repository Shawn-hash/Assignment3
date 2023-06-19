const getCards = async () => {
  const response = await fetch('http://localhost:3000/cards', {
    method: 'GET'
  });
  return response.json();
};

export default {
  getCards
};
