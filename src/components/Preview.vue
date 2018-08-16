<!--  -->
<template>
  <div id="preview">
    <!-- <h1>{{resume.profile.name}}个人简历</h1> -->
    <section>
      <h3 v-if="resume.profile != null">个人信息</h3>
      <p v-for="(item,index) in resume.profile" :key="index">{{item.name}}：{{item.value}}</p>
    </section>
    <section class="education">
      <h3>教育经历</h3>
      <ul v-for="(item,index) in resume.studyHistory" :key="index">
        <li v-for="(key,index) in keys" :key="index">{{item[key]}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:['resume'],
  computed:{
      keys:function (){
          return Object.keys(this.resume.studyHistory[0])
      }
  }
}

</script>
<style lang='less' scoped>
#preview{
  padding:16px;
  h1{
    text-align:center;
  }
  section{
    h3{
      margin:10px 0;
    }
    p{
      color:#444;
      line-height:24px;
      font-size:16px;
      font-weight:600;
    }
    &.education{
      ul{
        display:flex;
        margin:5px 0;
        align-items:center;
        justify-content:space-between;
        color:#444;
        li{
          display: inline-block;
          font-weight:bold;
        }
      }
    }
  }
}
</style>