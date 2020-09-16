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

export const gameShow = (user, id) => {
  return axios({
    url: apiUrl + `/games/${id}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const gameCreate = (user) => {
  return axios({
    url: apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
  })
}

// export const gameUpdate = (user, game, id) => {
//   return axios({
//     url: apiUrl + `/memories/${id}`,
//     method: 'PATCH',
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     },
//     data: {
//       game: {
//         title: game.title,
//         description: game.description,
//         people: game.people
//       }
//     }
//   })
// }
//
// export const gameDestroy = (user, id) => {
//   return axios({
//     url: apiUrl + `/memories/${id}`,
//     method: 'DELETE',
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     }
//   })
// }
