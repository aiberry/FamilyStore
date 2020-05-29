import angular from 'angular';
import productsPage from './products-page.module';

angular.element(() => {
  angular.bootstrap(document, [productsPage.name]);
});
