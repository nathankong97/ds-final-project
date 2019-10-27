var certificationsApp = new Vue({
  el: '#certificationsApp',
  data: {
    certifications: [],
    certificate: {}
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications/index.php')
      .then(response => response.json())
      .then(json => { certificationsApp.certifications = json })
    },
    handleSubmit() {
      fetch('api/certifications/post.php', {
        method: 'POST',
        body: JSON.stringify(this.certificate),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("Certificate was created");
      window.location.href = 'certification.html';
    },


    handleClick(c) {
      fetch('api/certificationMembers/index.php', {
        method: 'POST',
        body: JSON.stringify(c),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }).then(response => response.json())
        .then(json => { certificateDetailApp.certMember = json })
      certificateDetailApp.certificate = c;
    },
    handleEdit(c) {
      window.location.href = 'editcertificate.html?certificationId='+c.certificationId;
    },


    handleDelete(c) {
      fetch('api/certifications/delete.php', {
        method: 'POST',
        body: JSON.stringify(c),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("Certificate was deleted");
      window.location.href = 'certification.html';
    }
  },
  created() {
    this.fetchCertifications();
  }
});
