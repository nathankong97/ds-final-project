var memberEditApp = new Vue({
  el: '#memberEditApp',
  data: {
    member: {},
    id: {memberGuid:""}
  },
  methods: {
    getGuid() {
      var params = (new URL(document.location)).searchParams;
      this.id.memberGuid = params.get("memberGuid");
    },
    fetchMemberbyGUID() {
      fetch('api/memberEdit/index.php', {
        method: 'POST',
        body: JSON.stringify(this.id),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then(json => { memberEditApp.member = json[0] })
    }
  },
  created() {
    this.getGuid();
    this.fetchMemberbyGUID();
  }
});
