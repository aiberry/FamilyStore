import template from './footer.html';
import './footer.less';

class FooterCtrl {
  constructor(FooterMenuService) {
    this.service = FooterMenuService;
  }
}

export default {
  controller: FooterCtrl,
  template
};
