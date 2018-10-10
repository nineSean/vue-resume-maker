import AV from "./leancloud.js"

export default function (userData) {
  let {id, attributes: {username}} = userData || AV.User.current() || {id: '', attributes: {username: ''}}
  return {username, id}
}
