export const numberToCurrency = (number: number | undefined) => {
  if (number) return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
