export default ({ $axios }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    console.log('axios request', config)
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    console.log('axios response', config)
  })
  // エラーログ
  $axios.onError((e) => {
    console.log('axios error', e.response)
  })
}
