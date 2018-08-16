<template>
	<div id="app" :class={previewMode:previewMode}>
		<Topbar class="topbar" @preview="preview" />
		<main>
			<Editor :resume="resume" class="editor"/>
			<Preview :resume="resume" class="preview"/>
		</main>
		<section class="modal">
			<div>
				<h1>登录页</h1>
			</div>
		</section>
		<el-button class="exitPreview" @click="exitPreview">退出预览</el-button>
	</div>
</template>

<script>
	import Topbar from './components/Topbar'
	import Preview from './components/Preview'
	import Editor from './components/Editor'//快捷键：shift+alt+down:向下复制一行
	export default {
		data(){
			return{
				previewMode:false,
				resume:{
					profile:[
						{name:'姓名',value:'',nameValue:'name'},
						{name:'性别',value:'',nameValue:'sex'},
						{name:'年龄',value:'',nameValue:'age'},
						{name:'民族',value:'',nameValue:'nationality'},
						{name:'学历',value:'',nameValue:'academicLevel'},
						{name:'出生年月',value:'',nameValue:'birth'},
						{name:'工作年限',value:'',nameValue:'workYear'},
						{name:'暂住地址',value:'',nameValue:'address'},
						{name:'电话',value:'',nameValue:'phone'},
						{name:'邮箱',value:'',nameValue:'email'}
					],
					workHistory:[
						{company:'',workContent:''}
					],
					studyHistory:[
						{school:'',duration:'',Professional:'',degree:''}
					],
					projectHistory:[
						{projectName:'',projectContent:''}
					],
					prizeHistory:[
						{prizeName:'',prizeContent:''}
					],
					contact:[
						{mobile:'',eMail:'',weChat:''}
					]
				}
			}
		},
		components: {
			Topbar,Preview,Editor
		},
		methods:{
			preview:function(){
				this.previewMode = true;
			},
			exitPreview:function(){
				this.previewMode = false;
			}
		}
	}
</script>

<style lang="less">
#app{
	height:100vh;
	display:flex;
	flex-direction:column;
	&.previewMode{
		.topbar{display:none;}
		.editor{display:none;}
		.preview{
			max-width:800px;
			margin:32px auto;
		}
		.exitPreview{
			display:inline-block;
			position:fixed;
			right:16px;
			bottom:32px;
		}
	}
	.topbar{
		box-shadow:0 0 3px hsla(0,0,0,0.5);
		z-index: 1;
	}
	main{
		display: flex;
		flex:1;
		background:#DDD;
		.editor{
			width:40em;
			margin:16px 8px 16px 16px;
			background:#fff;
			box-shadow:0 0 3px hsla(0,0,0,0.5);
			border-radius: 4px;
			overflow:hidden;
		}
		.preview{
			flex:1;
			margin:16px 16px 16px 8px;
			background:#fff;
			box-shadow:0 0 3px hsla(0,0,0,0.5);
			border-radius: 4px;
			overflow:hidden;
		}
	}
	.exitPreview{
		display:none;
	}
	.modal{
		position:fixed;
		width:100%;
		height:100%;
		background:rgba(0, 0, 0, 0.7);
		z-index:10;
	}
}
	
</style>
