var fireGuyReport = new Vue({
  el: '#fireGuyReport',
  data: {
    Firefighters: [],
    firefighter:{}
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
            body: JSON.stringify(Firefighter.stationNumber),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then(response => response.json())
          .then(json => { fireGuyReport.Firefighters = json })
          window.alert("Report Filtered");
        }

//changes made above

  },
  created() {
    this.fetchFirefighters();
  }
});
