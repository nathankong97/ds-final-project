var membersApp = new Vue({
  el: '#membersApp',
  data: {
    members: []
  },
  methods: {
    fetchMembers() {
      fetch('api/members.php')
      .then(response => response.json())
      .then(json => { membersApp.members = json })
    }
  },
  created() {
    this.fetchMembers();
  }
});
