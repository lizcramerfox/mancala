import apiUrl from '../apiConfig'
import axios from 'axios'

export const gameIndex = (user) => {
  return axios({
    url: apiUrl + '/games',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const gameShow = (user, game, id) => {
  return axios({
    url: apiUrl + `/games/${id}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: game,
  })
}

export const gameCreate = (user, game) => {
  return axios({
    url: apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: game,
  })
}

export const gameUpdate = (user, game, id) => {
  return axios({
    url: apiUrl + `/games/${id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: game,
  })
}

export const gameDestroy = (user, id) => {
  return axios({
    url: apiUrl + `/games/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
