export function randomCardNumber() {
  const nums = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));
  return `${nums.slice(0, 4).join('')} ${nums.slice(4, 8).join('')} ${nums.slice(8, 12).join('')} ${2020 + Math.floor(Math.random() * 10)}`;
}
export function randomExpiry() {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(24 + Math.floor(Math.random() * 6));
  return `${month}/${year}`;
}