/**
 * @abstract
 * @template {View} V
 * @template {Model} M
 */
class Presenter {
  /**
   * @param {V} view
   * @param {M} model
   */
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.addEventListeners();
    //отложенный вызов updateView будет вызван после дочернего презентера, чтобы все переменные дочерние в т.ч. textMap сработал правильно
    window.queueMicrotask(() => this.updateView());
    window.addEventListener('popstate', () => this.handleWindowPopState.bind(this));
  }

  handleWindowPopState() {
    this.updateView();
  }

  updateView() {
    this.view.state = this.createViewState();
    this.view.render();
  }

  /**
   * @abstract
   */
  addEventListeners() {}

  /**
   * @abstract
   */
  createViewState() {
    return null;
  }

  /**
   * @param {Object<string, string>} params
   */
  setUrlParams(params) {
    const url = this.getUrl();

    url.search = '';

    Object.keys(params).forEach((key) => {
      url.searchParams.set(key, params[key]);
    });

    window.history.pushState(null, '', url.href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  /**
   * @return {Object<string, string>}
   */
  getUrlParams() {
    const url = this.getUrl();

    return Object.fromEntries(url.searchParams);
  }

  /**
   * @return {URL}
   */
  getUrl() {
    return new URL(window.location.href);
  }
}

export default Presenter;
