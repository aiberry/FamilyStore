import template from './products-list.html';
import './products-list.less';

class ProductsListCtrl {
  constructor(ItemsService) {
    this.service = ItemsService;
    this.showCategory = {
      men: true,
      women: true,
      child: false
    };
  }

  changeFilter(obj) {
    return !this.showCategory[obj];
  }

  resetFilters() {
    Object.keys(this.showCategory).forEach((key) => {
      this.showCategory[key] = true;
    });
  }
}

export default {
  controller: ProductsListCtrl,
  template
};
