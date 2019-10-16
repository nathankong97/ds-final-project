var fireGuyReport = new Vue({
  el: '#fireGuyReport',
  data: {
    Firefighters: []
  },
  methods: {
    fetchFirefighters() {
      fetch('../api/fireGuyReport.php')
      .then(response => response.json())
      .then(json => { fireGuyReport.Firefighters = json })
    }
  },
  created() {
    this.fetchFirefighters();
  }
});
