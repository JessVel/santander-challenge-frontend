const calculateCelcius = temp => {
  if (!temp) return;
  const tempc = Math.floor(((temp - 32) * 5) / 9);
  return tempc;
};

export default calculateCelcius;
