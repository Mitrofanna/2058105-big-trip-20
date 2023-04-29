import View from './view.js';
import CardView from './card-view.js';

class RouteListView extends View {
  constructor() {
    super();

    this.classList.add('trip-list');
    this.setAttribute('role', 'list');
  }

  /**
   * @override
   */
  render() {
    const views = new Array(4).fill().map(this.createItemView);
    this.replaceChildren(...views);
  }

  createItemView() {
    const view = new CardView;
    view.classList.add('trip-list__item');
    view.setAttribute('role', 'listitem');
    view.render();

    return view;
  }
}

customElements.define('route-list-view', RouteListView);

export default RouteListView;

