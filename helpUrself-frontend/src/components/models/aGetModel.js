import axios from 'axios'
const url = `http://localhost:4000`

class aGetModel {
  static all = () => {
    let req = axios.get(`${url}/gets`)
    return req
  }
  static show = (getId) => {
    return fetch(`${url}/gets/${getId}`).then(res => res.json())
  }
  static create = (get) => {
    let req = axios.post(`${url}/gets`, get)
    return req
  }

  static update = (getId, updatedObject) => {
    let request = axios.put(`${url}/gets/${getId}`, updatedObject)
    return request
  }

  static delete = (getId) => {
    console.log(`deleting ${getId}`)
    let request = axios.delete(`${url}/gets/${getId}`)
    return request
  }
}
    export default aGetModel



    //     return fetch(`${url}/gets`).then(res => res.json())
    //   }


    //   static update = (get) => {
    //     return fetch(`${url}/gets/${get._id}`, {method: "PUT"}).then(res => res.json());
    //   };

    //   static create = (getData) => {
    //     console.log('in the get model it is found!')
    //     return fetch(`${url}/gets`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(getData)
    //     }).then(res => res.json())
    //   }
    //   static destroy = (getId) => {
    //     return fetch(`${url}/gets/${getId}`, {method: "DELETE"}).then(res => res.json())
    //   }
    // }