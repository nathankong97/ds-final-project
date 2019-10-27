var certificateDetailApp = new Vue({
  el: '#certificateDetailApp',
  data: {
    certificate: {},
    certMember:{}
  },
  methods: {
    handleReset() {
      this.certificate = {
        certificationId: '',
        certificationName: '',
        certifyingAgency: '',
        defaultExpirationPd: ''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
