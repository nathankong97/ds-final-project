var certificateEditApp = new Vue({
  el: '#certificateEditApp',
  data: {
    certificate: {},
    guid: {}
  },
  methods: {
    getGuid() {
      var params = (new URL(document.location)).searchParams;
      this.guid = params.get("certificationId");
    },
    fetchCertificationbyGUID() {
      fetch('api/certificateEdit/index.php?guid='+ this.guid)
      .then( response => response.json() )
      .then( json => { this.certificate = json[0] } )
    },
    handleUpdate() {
      fetch('api/certifications/update.php', {
        method: 'POST',
        body: JSON.stringify(this.certificate),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("This certificate was edited");
      window.alert("We will go back to Certifications List");
      window.location.href = 'certification.html';
    }
  },
  created() {
    this.getGuid();
    this.fetchCertificationbyGUID();
  }
});
