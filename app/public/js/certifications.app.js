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
    }
  },
  created() {
    this.fetchCertifications();
  }
});
