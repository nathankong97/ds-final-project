var memberDetailApp = new Vue({
  el: '#memberDetailApp',
  data: {
    member: {},
    memberCert:{}
  },
  methods: {
    handleReset() {
      this.member = {
        memberGuid: '',
        firstName: '',
        lastName: '',
        position: '',
        sexAtBirth: '',
        address: '',
        workPhone: '',
        radioNumber:'',
        stationNumber:'',
        isActive:'',
        dob:'',
        startDate:'',
        emailAddress:''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
