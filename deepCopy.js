function deepCopy(obj, seen = new WeakMap()) {
  // примитивы (числа, строки и тд)
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // если уже копировали (защита от циклов)
  if (seen.has(obj)) {
    return seen.get(obj);
  }

  // Date
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // массив или объект
  const copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);

  for (let key in obj) {
    copy[key] = deepCopy(obj[key], seen);
  }

  return copy;
}
