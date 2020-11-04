export const actions = {
  nuxtServerInit({ dispatch }) {
    const channelFetchPm = dispatch('app/fetchChannelList')
    return Promise.all([channelFetchPm])
      .then(results => {
        console.log(results)
        dispatch('app/setChannelList', results[0])
      })
  }
  // user login

}