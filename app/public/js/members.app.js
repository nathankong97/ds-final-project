var membersApp = new Vue({
  el: '#membersApp',
  data: {
    members: []
  },
  methods: {
    fetchMembers() {
      fetch('api/firefighters/index.php')
      .then(response => response.json())
      .then(json => { membersApp.members = json })
    },
    handleClick(member) {
      memberDetailApp.member = member;
    }
  },
  created() {
    this.fetchMembers();
  }
});
