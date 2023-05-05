import './views/brief-view.js';
import './views/add-view.js';
import './views/filter-view.js';
import './views/sort-view.js';
import './views/route-list-view.js';
import './views/route-list-view.js';
import AppModel from './models/app-model.js';

const appModel = new AppModel();
//console.log(appModel.getPoints());
/**
 * @type {BriefView}
 */
const briefView = document.querySelector('brief-view');

/**
 * @type {AddView}
 */
const addView = document.querySelector('add-view');

/**
 * @type {FilterView}
 */
const filterView = document.querySelector('filter-view');

/**
 * @type {FilterView}
 */
const sortView = document.querySelector('sort-view');

/**
 * @type {RouteListView}
 */
const routeListView = document.querySelector('route-list-view');

briefView.render();
addView.render();
filterView.render();
sortView.render();
routeListView.render();
