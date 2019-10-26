var fireGuyReport = new Vue({
  el: '#fireGuyReport',
  data: {
    Firefighters: [],
    FirefightersFilterRN: [],
    FirefightersFilterSN: [],
    firefighter: {}

  },
  methods: {
    fetchFirefighters() {
      fetch('api/reports/firefighters.php')
      .then(response => response.json())
      .then(json => { fireGuyReport.Firefighters = json })
    },
//changes made below
    handleSubmitFFdetails(event) {
          fetch('api/reports/firefightersFiltered.php', {
            method: 'POST',
            body: JSON.stringify(firefighter),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then(response => response.json())
          .then(json => { fireGuyReport.Firefighters = json })
          window.alert("Report Filtered");
        },
    fetchFirefightersFilterRN() {
            fetch('api/reports/firefightersFilterRN.php')
            .then(response => response.json())
            .then(json => { fireGuyReport.FirefightersFilterRN = json })
          },
    fetchFirefightersFilterSN() {
            fetch('api/reports/firefightersFilterSN.php')
            .then(response => response.json())
            .then(json => { fireGuyReport.FirefightersFilterSN = json })
          }

//changes made above

  },
  created() {
    this.fetchFirefighters();
    this.fetchFirefightersFilterRN();
    this.fetchFirefightersFilterSN();

  }
});
