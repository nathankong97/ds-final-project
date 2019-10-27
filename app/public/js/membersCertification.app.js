var membersCertificationApp = new Vue({
  el: '#membersCertificationApp',
  data: {
    members: [],
    certs: [],
    memberCerts: [],
    memberWithCert: {}
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
    },
    handleSubmit() {
      fetch('api/membersWithCertification/post.php', {
        method:'POST',
        body: JSON.stringify(this.memberWithCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("Certification has added to this firefighter");
      window.location.href = 'memberCert.html';
    }
  },
  created() {
    this.fetchAllMembers();
    this.fetchAllCerts();
    this.fetchMemberCerts();
  }
});
