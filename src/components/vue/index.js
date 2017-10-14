/**
 * Created by dcpai on 2017/7/3.
 */
export const Home = require('./home.vue');
export const Hamburger = require('./Hamburger/index.vue');
export const AppBase = require('./app-base');
export const Api = require('./api');

import Api2 from '../services/api';
import App from '../services/app';
import Config from '../services/config';
import Types from '../services/types';
import Filter from '../services/filter';
import Items from '../services/items';
import Utils from '../services/utils';



export const $Api = Api2;
export const $App = App;
export const $Config = Config;
export const $Types = Types;
export const $Filter = Filter;
export const $Items = Items;
export const $Utils = Utils;

