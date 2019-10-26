var expCertApp = new Vue({
  el: '#expCertApp',
  data: {
    ExpCerts: [],
    ExpCertsFilter: [],
    certs: {
      certificationName:" "
    }

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
    },

    handleSubmitCertDetail(event) {
          fetch('api/reports/expCertsFiltered.php', {
            method: 'POST',
            body: JSON.stringify(this.certs),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then(response => response.json())
          .then(json => { expCertApp.ExpCerts = json })
        },
  },
  created() {
    this.fetchExpCerts();
    this.fetchExpCertsFilter();
  }
});
