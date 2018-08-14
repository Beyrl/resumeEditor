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
          <h2>个人信息</h2>
          <el-form>
            <el-form-item label="名称">
              <el-input v-model="profile.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="profile.age"></el-input>
            </el-form-item>
            <el-form-item label="出生年月">
              <el-input v-model="profile.birth"></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li :class="{active:currentTab === 1}">
          <EditorHistory :editorHistory="studyHistory" :labels = "{school:'学校',duration:'时间',degree:'学历'}" :title="'学习经历'"/>
        </li>
        <li :class="{active:currentTab === 2}">
          <!-- :title="'工作经历'" 只要加了v-bind，后面的就会被当成一个变量，就要写js的写法，js写字符串要加单引号，外面的双引号是html的，里面的才是js字符串的 -->
          <EditorHistory :editorHistory ="workHistory" :labels = "{company:'公司',workContent:'公司经历'}" :title="'工作经历'"/>
        </li>
        <li :class="{active:currentTab === 3}">
          <h2>项目经历</h2>
            <el-form  label-width="80px">
              <el-form-item label="名称">
                <el-input></el-input>
              </el-form-item>
            </el-form>
        </li>
        <li :class="{active:currentTab === 4}">
          <h2>获奖情况</h2>
            <el-form  label-width="80px">
              <el-form-item label="名称">
                <el-input></el-input>
              </el-form-item>
            </el-form>
        </li>
        <li :class="{active:currentTab === 5}">
          <h2>联系方式</h2>
            <el-form  label-width="80px">
              <el-form-item label="名称">
                <el-input></el-input>
              </el-form-item>
            </el-form>
        </li>
      </ol>
  </div>
</template>

<script>
import EditorHistory from './EditorHistory'
export default {
  data () {
    return {
      currentTab: 0,
      editorTag :[1,2,3,4,5,6],
      profile:{
        name:'',age:'',birth:''
      },
      workHistory:[
        {company:'',workContent:''}
      ],
      studyHistory:[
        {school:'',duration:'',degree:''}
      ]
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