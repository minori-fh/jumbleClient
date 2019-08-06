import axios from "axios";

export default {
  createAssignee: function(body) {
    return axios.post("https://jumble-dash.herokuapp.com/api/assignee", body);
  },
  getAssignees: function(id) {
    return axios.get("https://jumble-dash.herokuapp.com/api/assignee/" + id);
  },
  updateAssignee: function(id, body) {
    return axios.put("https://jumble-dash.herokuapp.com/api/assignee/" + id, body);
  },
  removeAssignee: function(id) {
    return axios.delete("https://jumble-dash.herokuapp.com/api/assignee/" + id);
  }
};