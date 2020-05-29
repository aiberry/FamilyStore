import angular from 'angular';

import headerSlide from './header-slide/header-slide';
import productsList from './products-list/products-list';
import productItem from './product-item/product-item';
import footer from './footer/footer';
import ItemsService from './items.service';
import FooterMenuService from './footer-menu.service';
import productsFilter from './productsFilter';

export default angular
  .module('todosApp', [])
  .component('productsList', productsList)
  .component('headerSlide', headerSlide)
  .component('productItem', productItem)
  .component('footer', footer)
  .service('ItemsService', ItemsService)
  .service('FooterMenuService', FooterMenuService)
  .filter('productsFilter', productsFilter);
