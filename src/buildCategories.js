function buildiTunesCategories(categories) {
  const arr = [];
  if (Array.isArray(categories)) {
    categories.forEach((category) => {
      if (category.subcats) {
        const elements = [
          { _attr: { text: category.text } },
        ];
        const cats = buildiTunesCategories(category.subcats);
        cats.forEach((cat) => {
          elements.push(cat);
        });
        arr.push({ 'itunes:category': elements });
      } else {
        arr.push({ 'itunes:category': { _attr: { text: category.text } } });
      }
    });
  }
  return arr;
}

function buildGooglePlayCategories(categories) {
  const arr = [];
  if (Array.isArray(categories)) {
    categories.forEach((category) => {
      if (category.subcats) {
        const elements = [
          { _attr: { text: category.text } },
        ];
        const cats = buildGooglePlayCategories(category.subcats);
        cats.forEach((cat) => {
          elements.push(cat);
        });
        arr.push({ 'googleplay:category': elements });
      } else {
        arr.push({ 'googleplay:category': { _attr: { text: category.text } } });
      }
    });
  }
  return arr;
}

export { buildiTunesCategories, buildGooglePlayCategories };
