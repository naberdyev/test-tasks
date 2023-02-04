function generateMultiplicationTable(number) {
  for (let i = 0; i <= number; i++) {
    const line = [];

    for (let k = 1; k <= number; k++) {
      let product;
      if (i === 0) {
        product = k;
      } else {
        product = i * k;
      }
      const productLength = product.toString().length;
      const formatedProduct =
        productLength < (number * k).toString().length
          ? `${" ".repeat(
              (number * k).toString().length - productLength
            )}${product}`
          : `${product}`;
      line.push(formatedProduct);
    }
    console.log(
      `${
        i === 0
          ? " ".repeat(number.toString().length)
          : `${" ".repeat(number.toString().length - i.toString().length)}${i}`
      } ${line.join(" ")}`
    );
  }
}

generateMultiplicationTable(20);

//time spent - 15 min
