var memberDetailApp = new Vue({
  el: '#memberDetailApp',
  data: {
    member: {}
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
        startDate:''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
