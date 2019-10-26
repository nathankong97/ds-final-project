var expCertApp = new Vue({
  el: '#expCertApp',
  data: {
    ExpCerts: [],
    ExpCertsFilter: []

  },
  methods: {
    fetchExpCerts() {
      fetch('api/reports/expCerts.php')
      .then(response => response.json())
      .then(json => { expCertApp.ExpCerts = json })
    },
    fetchExpCertsFilter() {
      fetch('api/reports/expCertsFilter.php')
      .then(response => response.json())
      .then(json => { expCertApp.ExpCertsFilter = json })
    }
  },
  created() {
    this.fetchExpCerts();
    this.fetchExpCertsFilter();
  }
});
