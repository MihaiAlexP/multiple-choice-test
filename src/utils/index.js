export const fakeRequest = (ms, result) =>
  new Promise((resolve) => {
    window.setTimeout(
      () => {
        return resolve(result)
      }, ms)
  });

export const formatJSON = (data, key) => {
  const arr = data[key];
  
  if (Array.isArray(arr)) {
    return arr.map((item) => {
      item.status = null;
      item.selectedVariants = [];
      return item;
    });
  }

  return [];
}
