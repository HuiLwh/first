import { createStore } from "vuex";

export default createStore({
  state: {
    collapse: false,
    tagsList:[]
  },
  getters: {},
  mutations: {
    // 
    handleCollapse(state,payload){
      console.log(state)
      state.collapse = payload
    },
    // 添加 tag
    setTagsItem(state,payload){
      state.tagsList.push(payload)
    },
    // 删除
    delTagsItem(state,payload){
      state.tagsList.splice(payload,1)
    }
  },
  actions: {},
  modules: {},
});
