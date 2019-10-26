var membersCertificationApp = new Vue({
  el: '#membersCertificationApp',
  data: {
    members: [],
    certs: [],
    memberCerts: []
  },
  methods: {
    fetchAllMembers() {
      fetch('api/firefighters/index.php')
      .then(response => response.json())
      .then(json => { membersCertificationApp.members = json })
    },
    fetchAllCerts() {
      fetch('api/certifications/index.php')
      .then(response => response.json())
      .then(json => { membersCertificationApp.certs = json })
    },
    fetchMemberCerts() {
      fetch('api/membersWithCertification/all.php')
      .then(response => response.json())
      .then(json => { membersCertificationApp.memberCerts = json })
    }
  },
  created() {
    this.fetchAllMembers();
    this.fetchAllCerts();
    this.fetchMemberCerts();
  }
});
