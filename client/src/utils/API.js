import axios from "axios";

export default {
  getCrytosAPI: (query) => {
    return axios.get("/api/crypto/")
    ;
  },
  getCrytoHistoricalAPI: (crypto) => {
    console.log('cryt', crypto)
    return axios.get("/api/historical", {params: {q: crypto}})
  },
  sendEmail: function(emailInfo){
    return axios.post("api/emailInfo", emailInfo)
  }
};
