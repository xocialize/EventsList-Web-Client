import template from './main.html';
import styles from './main.scss';

export default {
  template,
  bindings: {
  },
  controller: [controller]
};

function controller(){
  this.styles = styles;
}
