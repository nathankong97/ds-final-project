var membersCertificationApp = new Vue({
  el: '#membersCertificationApp',
  data: {
    members: []
  },
  methods: {
    fetchMembers() {
      fetch('api/membersWithCertification/index.php')
      .then(response => response.json())
      .then(json => { membersCertificationApp.members = json })
    }
  },
  created() {
    this.fetchMembers();
  }
});
