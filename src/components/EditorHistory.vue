<!--  -->
<template>
    <div>
        <h2>{{title}}</h2>
        <el-form v-for="(item,index) in editorHistory" :key="index">
            <el-form-item v-for="(key,index) in keys" :key="index" :label="labels[key] || key">
                <el-input v-model="item[key]"></el-input>
            </el-form-item>
            <i class="el-icon-error" @click="removeHistory(index)"></i>
            <hr>
        </el-form>
        <el-button class="add" type="primary" @click="addExperience">添加{{title}}</el-button>
    </div>
</template>
<script>
export default {
  data () {
    return {

    };
  },
  props:['editorHistory','labels','title'],
  computed:{
      keys:function (){
          return Object.keys(this.editorHistory[0])
      }
  },
  methods: {
    addExperience:function(){
        console.log(this.editorHistory);
        const json = {}
        this.keys.map((key) => {
            json[key]=''
        })
        this.editorHistory.push(json);
    },
    removeHistory:function(index){
        this.editorHistory.splice(index,1);//从第index个开始，删除1个。
    }
  }
}
</script>
<style lang='less' scoped>
    .el-icon-error{
        cursor: pointer;
    }
</style>