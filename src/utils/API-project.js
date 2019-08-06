import axios from "axios";

export default {
  findProjects: function() {
    return axios.get("https://jumble-dash.herokuapp.com/api/project");
  },
  createProject: function(body) {
    return axios.post("https://jumble-dash.herokuapp.com/api/project", body);
  },
  getProject: function(id) {
    return axios.get("https://jumble-dash.herokuapp.com/api/project/" + id);
  },
  updateProject: function(id, body) {
    return axios.put("https://jumble-dash.herokuapp.com/api/project/" + id, body);
  },
  deleteProject: function(id) {
    return axios.delete("https://jumble-dash.herokuapp.com/api/project/" + id);
  }
};