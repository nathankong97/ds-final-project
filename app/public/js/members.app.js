var membersApp = new Vue({
  el: '#membersApp',
  data: {
    members: [],
    member: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/firefighters/index.php')
      .then(response => response.json())
      .then(json => { membersApp.members = json })
    },
    handleSubmit(event) {
      fetch('api/firefighters/post.php', {
        method: 'POST',
        body: JSON.stringify(this.member),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {membersApp.members.push( json[0] )})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
    },
    handleClick(member) { //check if row is needed here//
      memberDetailApp.member = member;
    }
  },
  created() {
    this.fetchMembers();
  }
});
