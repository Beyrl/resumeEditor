<!--  -->
<template>
  <div id="editor">
      <nav>
        <ol>
          <li v-for="(item,index) in editorTag" :key="index" 
              :class="{active:currentTab === index}"
              @click="click(index)">
             {{item}}
          </li>
        </ol>
      </nav>
      <ol class="panes">
        <li :class="{active:currentTab === 0}">
          <h2>基本信息</h2>
          <el-form>
            <el-form-item v-for="(item,index) in resume.profile" :key="index" :label="item.name">
              <el-input v-model="item.value"></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li :class="{active:currentTab === 1}">
          <EditorHistory :editorHistory="resume.studyHistory" :labels = "{school:'学校',duration:'时间',Professional:'专业',degree:'学历'}" :title="'教育经历'"/>
        </li>
        <li :class="{active:currentTab === 2}">
          <!-- :title="'工作经历'" 只要加了v-bind，后面的就会被当成一个变量，就要写js的写法，js写字符串要加单引号，外面的双引号是html的，里面的才是js字符串的 -->
          <EditorHistory :editorHistory ="resume.workHistory" :labels = "{company:'公司',workContent:'公司经历'}" :title="'工作经历'"/>
        </li>
        <li :class="{active:currentTab === 3}">
          <EditorHistory :editorHistory ="resume.projectHistory" :labels = "{projectName:'项目名称',projectContent:'项目内容'}" :title="'项目经历'"/>
        </li>
        <li :class="{active:currentTab === 4}">
          <EditorHistory :editorHistory ="resume.prizeHistory" :labels = "{prizeName:'获奖名称',prizeContent:'获奖内容'}" :title="'获奖情况'"/>
        </li>
        <li :class="{active:currentTab === 5}">
          <h2>联系方式</h2>
            <el-form>
            <el-form-item label="电话">
              <el-input v-model="resume.contact.mobile"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="resume.contact.eMail"></el-input>
            </el-form-item>
            <el-form-item label="微信">
              <el-input v-model="resume.contact.weChat"></el-input>
            </el-form-item>
          </el-form>
        </li>
      </ol>
  </div>
</template>

<script>
import EditorHistory from './EditorHistory'
export default {
  props:['resume'],
  computed:{
     keys:function (){
          return Object.keys(this.resume.profile);
      }
  },
  data () {
    return {
      currentTab: 0,
      editorTag :[1,2,3,4,5,6]
    };
  },
  components:{
    EditorHistory
  },
  methods: {
    click:function(index){
      this.currentTab = index
    }
  }
}
</script>
<style lang='less' scoped>
#editor{
  min-height: 100px;
  display:flex;
  nav{
    width:50px;
    background:#000;
    color:white;
    text-align:center;
    li{
      height:40px;
      line-height:40px;
      border-bottom:1px solid #fff;
      cursor:pointer;
      &.active{
        background:#fff;
        color:#000;
      }
    }
  }
  .panes{
    flex:1;
    width:100%;
    li{
      display:none;
      padding:32px;
      height:100%;
      overflow-y:scroll;
      &.active{
        display:block
      }
      .el-form{
        .el-icon-error{
          cursor:pointer;
        }
      }
    }
  }
}
</style>