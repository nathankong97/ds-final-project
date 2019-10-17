var certificationsApp = new Vue({
  el: '#certificationsApp',
  data: {
    certifications: []
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications/index.php')
      .then(response => response.json())
      .then(json => { certificationsApp.certifications = json })
    }
  },
  created() {
    this.fetchCertifications();
  }
});
