import axios from 'axios'
import request from '@/assets/js/request'

export const state = () => ({
  channelList: null
})

export const mutations = {
  SET_CHANNEL_LIST: (state, value) => {
    state.channelList = value
  }
}

export const actions = {
  setChannelList({ commit }, value) {
    commit('SET_CHANNEL_LIST', value)
  },
  fetchChannelList({ commit }) {
    return request({
      url: '/channels/get-all',
      method: 'post',
      data: { page: 1, limit: 999999 }
    })
  }
}