//const addCard = async (name) => {
//  const response = await fetch('http://localhost:3001/cards', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(name)
//  });
//
//  const data = await response.json();
//  if (!response.ok) {
//    const errorMsg = data?.message;
//    throw new Error(errorMsg)
//  }
//
//  return data;
//};
//
//const getCards = async () => {
//  const response = await fetch('http://localhost:3001/cards', {
//    method: 'GET'
//  });
//  return response.json();
//};
//
//export default {
//  addUser,
//  getUsers
//};
