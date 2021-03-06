import request from "superagent"

// server.use('/api/v1/tweets',tweetsRoute)

export const addATweetAPI = tweetObj => {
  return request
    .post('/api/v1/tweets')
    .send(tweetObj)
    .then(res => res.body)
}

export const getUsersTweetsAPI = userID => {
  return request
    .get(`/api/v1/tweets/${userID}`)
    .then(res => res.body)
}

export const deleteATweetAPI = tweetID => {
  return request
      .del(`/api/v1/tweets/${tweetID}`)
      .then(res => res.body)
}

export const getAllUsersFollowingTweetsAPI = userID => {
  return request
    .get(`/api/v1/tweets/following/${userID}`)
    .then(res => res.body)
}

export const addLikeAPI = tweet =>{
  return request
        .post('/api/v1/tweets/like')
        .send(tweet)
        .then(res=>res.body)
}


export const deleteLikeAPI = tweet =>{
  return request
        .delete('/api/v1/tweets/like')
        .send(tweet)
        .then(res=>res.body)
}


export const updateLikeCountAPI = tweet =>{
  return request
        .patch('/api/v1/tweets/like')
        .send(tweet)
        .then(res=>res.body)
}