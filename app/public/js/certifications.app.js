var certificationsApp = new Vue({
  el: '#certificationsApp',
  data: {
    certifications: []
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications.php')
      .then(response => response.json())
      .then(json => { certificationsApp.certifications = json })
    }
  },
  created() {
    this.fetchCertifications();
  }
});
