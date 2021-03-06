/**
 * @Author: csx
 * @Description
 * @Date: 2021/4/15 19:06
 * @Last Modified by: csx
 * @Last Modified time: 2021/4/15 19:06
 */

import Vue from 'vue';
import Vuex from 'vuex';
import app from './app';
import user from './user';
import intervention from './intervention';
import getters from './getters';

Vue.use(Vuex);

const modules = {
  modules: {
    app,
    user,
    intervention,
  },
  getters,
};

const store = new Vuex.Store(modules);

export default store;
