var mixin = {
  data(){
    return {
      yyx_name: 'yyx'
    }
  },
  methods:{
    showName(){
      console.log("mixinName",this.yyx_name)
    }
  }
}
export default mixin