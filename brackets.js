function isValid(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // если открывающая скобка — кладём в стек
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      // если стек пуст — ошибка
      if (stack.length === 0) {
        return false;
      }

      let last = stack.pop();

      // проверяем соответствие
      if (
        (char === ")" && last !== "(") ||
        (char === "]" && last !== "[") ||
        (char === "}" && last !== "{")
      ) {
        return false;
      }
    }
  }

  // если стек пуст — всё ок
  return stack.length === 0;
}
