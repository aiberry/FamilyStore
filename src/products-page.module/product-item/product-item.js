import template from './product-item.html';
import './product-item.less';

class ProductItemCtrl {
  toggleOptions(displayOptions) {
    return !displayOptions;
  }

  setOption(option, item) {
    item.selectedOption = option; //eslint-disable-line
    item.displayOptions = false; //eslint-disable-line
  }
}

export default {
  controller: ProductItemCtrl,
  bindings: {
    item: '<'
  },
  template
};
