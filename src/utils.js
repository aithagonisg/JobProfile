export const getCurrencyFormat = (data) => {
  const dataString = data.toString();
  let lastThree = dataString.substring(dataString.length - 3);
  const otherNumbers = dataString.substring(0, dataString.length - 3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
};
