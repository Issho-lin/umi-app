const { API_ENV } = process.env

let env = ''

switch (true) {
  case API_ENV === 'dev':
    env = '/api'
    break
  case API_ENV === 'test':
    break
  case API_ENV === 'prod':
    break
  default:
    break
}

export default {
  env,
}
