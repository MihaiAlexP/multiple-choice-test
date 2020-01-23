export const fakeRequest = (ms, result) =>
  new Promise((resolve) => {
    window.setTimeout(
      () => {
        return resolve(result)
      }, ms)
  });

export const formatJSON = (jsonStr, key) => {
  const arr = JSON.parse(jsonStr)[key];
  
  if (Array.isArray(arr)) {
    return arr.map((item) => {
      item.status = -1;
      item.selectedVariants = [];
      return item;
    });
  }

  return [];
}
