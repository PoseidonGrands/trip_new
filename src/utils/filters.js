function priceFormat(price) {
  if (isNaN(price) || price === undefined || price === null) {
    return price
  }
  return `${price.toFixed(2)}`
}

function countSatis(star, commentCount) {
  let res = (star / commentCount).toFixed(2) * 100
  console.log(star, commentCount)
  console.log((star / commentCount).toFixed(2) * 100)
  return ((star / commentCount) * 100).toFixed(2)
}

export { priceFormat, countSatis }
