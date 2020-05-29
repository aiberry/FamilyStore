import template from './header-slide.html';
import './header-slide.less';

class SliderCtrl {
  onChartClick() {
    /* eslint-disable-next-line no-console */
    console.log('Chart clicked');
  }
}

export default {
  controller: SliderCtrl,
  template
};
