var fireGuyFilterSN = new Vue({
  el: '#fireGuyFilterSN',
  data: {
    FirefightersFilterSN: []
  },
  methods: {
    fetchFirefightersFilterSN() {
      fetch('api/reports/firefightersFilterSN.php')
      .then(response => response.json())
      .then(json => { fireGuyFilterSN.FirefightersFilterSN = json })
    }
  },
  created() {
    this.fetchFirefightersFilterSN();
  }
});
