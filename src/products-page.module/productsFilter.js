export default function searchFilter() {
  /* eslint-disable-next-line func-names */
  return function (items, showCategory) {
    return items.filter((element) => {
      switch (element.type.toLowerCase()) {
        case 'men':
          return showCategory.men;
        case 'women':
          return showCategory.women;
        case 'child':
          return showCategory.child;
        case 'other':
          return false;
        default:
          return false;
      }
    });
  };
}
