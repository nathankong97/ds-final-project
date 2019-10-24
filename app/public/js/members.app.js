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
      window.alert("Member was created");
      window.location.href = 'members.html';
    },
    handleClick(member) { //check if row is needed here//
      memberDetailApp.member = member;
    },
    handleEdit(m) {
      window.location.href = 'editmember.html?memberGuid='+m.memberGuid;
    },
    handleDelete(m) {
      fetch('api/firefighters/delete.php', {
        method: 'POST',
        body: JSON.stringify(m),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("Member was deleted");
      window.location.href = 'members.html';
    }
  },
  created() {
    this.fetchMembers();
  }
});
