<!--  -->
<template>
  <div id="topbar">
    <div class="logo">RESUME</div>
    <div class="actions">
      <el-button class="login" type="primary">登录</el-button>
      <el-button class="register">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
  #topbar{
    display:flex;
    justify-content: space-between;
    padding:16px;
    font-size:20px;
    align-items:center;
    
  }
</style>