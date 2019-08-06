import axios from "axios";

export default {
  createTask: function(body) {
    return axios.post("https://jumble-dash.herokuapp.com/api/task", body);
  },
  getTasks: function(id) {
    return axios.get("https://jumble-dash.herokuapp.com/api/task/" + id);
  },
  updateTask: function(id, body) {
    return axios.put("https://jumble-dash.herokuapp.com/api/task/" + id, body);
  },
  removeTask: function(id) {
    return axios.delete("https://jumble-dash.herokuapp.com/api/task/" + id);
  }
};