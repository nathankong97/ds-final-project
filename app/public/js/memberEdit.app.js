var memberEditApp = new Vue({
  el: '#memberEditApp',
  data: {
    member: {},
    guid: {}
  },
  methods: {
    getGuid() {
      var params = (new URL(document.location)).searchParams;
      this.guid = params.get("memberGuid");
    },
    fetchMemberbyGUID() {
      fetch('api/memberEdit/index.php?guid='+ this.guid)
      .then( response => response.json() )
      .then( json => { this.member = json[0] } )
    },
    handleUpdate() {
      fetch('api/firefighters/update.php', {
        method: 'POST',
        body: JSON.stringify(this.member),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("This member was edited");
      window.alert("We will go back to Member List");
      window.location.href = 'members.html';
    }
  },
  created() {
    this.getGuid();
    this.fetchMemberbyGUID();
  }
});
