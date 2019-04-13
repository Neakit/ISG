export const state = () => ({
  selectedTab: '',
})

export const mutations = {
  setCurrentTab (state, id) {
    state.selectedTab = id
  }
}
export const getters = {
  currentTab (state) {
    return state.selectedTab;
  }
}