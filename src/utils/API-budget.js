import axios from "axios";

export default {
  createBudget: function(body) {
    return axios.post("https://jumble-dash.herokuapp.com/api/budget", body);
  },
  getBudget: function(id) {
    return axios.get("https://jumble-dash.herokuapp.com/api/budget/" + id);
  },
  updateBudget: function(id, body) {
    return axios.put("https://jumble-dash.herokuapp.com/api/budget/" + id, body);
  }
};