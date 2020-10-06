
import {config} from '../config'

export default class Communications {
    constructor(){}

    static getLampModels() {
        return ["Модель 1", "Модель 2", "Модель 3"]
    }

    static getUsers() {
       return ["Пользователь 1", "Пользователь 2", "Пользователь 3"]
    }

    static auth(user){
        return new Promise((resolve, reject) => {
            fetch("/auth", {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *client
              body: JSON.stringify(user)
            })
            .then((res)=>{
                res.json().then((data)=>{
                  resolve(data)
                })
            })
          })
    }
}

