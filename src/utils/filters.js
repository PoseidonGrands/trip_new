function priceFormat(price) {
  if (isNaN(price) || price === undefined || price === null) {
    return price
  }
  return `${price.toFixed(2)}`
}

function countSatis(score) {
  const maxScore = 5
  return parseInt((score / maxScore) * 100)
}

export { priceFormat, countSatis }
