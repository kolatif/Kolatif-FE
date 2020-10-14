export const state = () => ({
  snackbar: {
    showing: false,
    text: '',
  },
})

export const mutations = {
  SET_SNACKBAR(state, snackbar) {
    state.snackbars = snackbar
  },
  REMOVE(state, snackbar) {
    snackbar.showing = false
  },
}

export const actions = {
  setSnackbar({ commit }, snackbar) {
    snackbar.showing = true
    snackbar.color = snackbar.color || 'success'
    commit('SET_SNACKBAR', snackbar)
  },

  remove({ commit }, snackbar) {
    commit('REMOVE', snackbar)
  },
}
