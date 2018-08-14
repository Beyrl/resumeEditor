<template>
	<div id="app">
		<Topbar class="topbar"/>
		<main>
			<Editor class="editor"/>
			<Preview class="preview"/>
		</main>
	</div>
</template>

<script>
	import Topbar from './components/Topbar'
	import Preview from './components/Preview'
	import Editor from './components/Editor'//快捷键：shift+alt+down:向下复制一行
  export default {
		components: {
			Topbar,Preview,Editor
		}
	}
</script>

<style lang="less">
#app{
	height:100vh;
	display:flex;
	flex-direction:column;
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
}
	
</style>
