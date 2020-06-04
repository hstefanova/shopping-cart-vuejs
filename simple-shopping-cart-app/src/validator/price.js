export function priceValidator(value) {
  return /^\d*\.?\d*$/.test(value) ? true : false;
}
