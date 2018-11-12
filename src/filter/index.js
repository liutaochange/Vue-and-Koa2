// money 格式化，保留两位小数
export const toMoney = (money = 0) => {
  return money.toFixed(2);
}