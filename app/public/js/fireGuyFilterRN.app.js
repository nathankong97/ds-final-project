var fireGuyFilterRN = new Vue({
  el: '#fireGuyFilterRN',
  data: {
    FirefightersFilterRN: []
  },
  methods: {
    fetchFirefightersFilterRN() {
      fetch('api/reports/firefightersFilterRN.php')
      .then(response => response.json())
      .then(json => { fireGuyFilterRN.FirefightersFilterRN = json })
    }
  },
  created() {
    this.fetchFirefightersFilterRN();
  }
});
