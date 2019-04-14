export const state = () => ({
  selectedTab: '',
  modalDialog: false
})

export const mutations = {
  setCurrentTab (state, id) {
    state.selectedTab = id
  },
  openModal(state){
    state.modalDialog = true;
  },
  closeModal(state){
    state.modalDialog = false;
  }
}
export const getters = {
  currentTab (state) {
    return state.selectedTab;
  }
}