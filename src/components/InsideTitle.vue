<template>
    <div class="insidetitle">
    	<div class="title">{{insideInfo.title}}</div>
    	<span>{{insideInfo.smallTitle}}</span>
    </div>
</template>

<script>
export default {
	name: "insidetitle",
	props: ['insideInfo']
}
</script>

<style rel="stylesheet" scoped>
.insidetitle
{
	height: 100px;
	border-bottom: 1px solid #D9D9D9;
	padding-left: 20px;
}
.insidetitle .title
{
	padding-top: 20px;
    color: #333333;
    font-size: 16px;
}
.insidetitle span {
    margin-top: 29px;
    width: 50px;
    height: 30px;
    font-size: 14px;
    color: #409EFF;
    display: block;
    border-bottom: 2px solid #409EFF;
}
</style>