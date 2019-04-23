// see https://github.com/championswimmer/vuex-persist#tips-for-nuxt
import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({}).plugin(store);
  });
}