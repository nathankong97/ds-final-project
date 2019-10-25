var expCertFilter = new Vue({
  el: '#expCertFilter',
  data: {
    ExpCertsFilter: []
  },
  methods: {
    fetchExpCertsFilter() {
      fetch('api/reports/expCertsFilter.php')
      .then(response => response.json())
      .then(json => { expCertFilter.ExpCertsFilter = json })
    }
  },
  created() {
    this.fetchExpCertsFilter();
  }
});
