import axios from 'axios'
const url = `http://localhost:4000`

class GiveModel {
  static all = () => {
    let req = axios.get(`${url}/gives`)
    return req
  }
  static show = (giveId) => {
    return fetch(`${url}/gives/${giveId}`).then(res => res.json())
  }

  static create = (giveData) => {
    console.log('in the give model it is found!')
    return fetch(`${url}/gives`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(giveData)
    }).then(res => res.json())
  }
  static destroy = (giveId) => {
    return fetch(`${url}/gives/${giveId}`, {method: "DELETE"}).then(res => res.json())
  }
}

export default GiveModel
