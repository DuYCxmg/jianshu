<template>
    <div >
        <my-header></my-header>
        <div class="container bookmarks">
            <div class="row">
                <div class="col-xs-18 col-xs-offset-3 main">
                    <img class="tag-banner" src="../assets/img/bookmarks.png" alt="Collect note">
                    <!-- 文章列表模块 -->
                    <ul class="note-list">

                        <li id="note-24245924" data-note-id="24245924" class="have-img">
                            <a class="wrap-img" href="javascript:void(0)" target="_blank">
                                <img class="" src="../assets/img/bookmarks-1.jpg" alt="120">
                            </a>
                            <div class="content" @mouseleave="markShow=false" @mouseover="markShow=true">
                                <div class="author">
                                    <a class="avatar"  href="javascript:void(0)">
                                        <img src="../assets/img/default-avatar.jpg" alt="64">
                                    </a>
                                    <div class="info">
                                        <a class="nickname"  href="/u/123">可可西里里</a>
                                        <a  href="javascript:void(0)">
                                            <img class="badge-icon" data-toggle="tooltip" title="" src="../assets/img/following.png" alt="Verified account" data-original-title="简书伯乐" width="30" height="30">
                                        </a> <span class="time" data-shared-at="2018-02-23T15:48:28+08:00">02.23 15:48</span>
                                    </div>
                                </div>
                                <a class="title"  href="/p/0372147dcdc1">女生都爱的仙女裙怎么穿？</a>
                                <p class="abstract">
                                    文/可可西里里 今天的着装话题说说仙女裙--仙女裙的特点：飘逸柔美，常用的布料是网纱、雪纺、蕾丝等面料.有些美女可能要说仙女裙太薄了，要夏天穿才对--如果这样想那您就奥特...
                                </p>
                                <div class="meta">

                                    <a target="_blank" href="/p/0372147dcdc1">
                                        <i class="iconfont fa fa-eye"></i> 4487
                                    </a>
                                    <a target="_blank" href="/p/0372147dcdc1#comments">
                                        <i class="iconfont fa fa-comment-o"></i> 35
                                    </a> <span style="font-size: 12px"><i class="iconfont fa fa-heart-o"></i> 45</span>
                                    <a v-if="markShow" class="cancel">取消收藏</a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <!---->
                </div>
            </div>
            <div class="side-tool">
                <ul>
                    <li data-placement="left" data-toggle="tooltip" data-container="body" data-original-title="回到顶部" style="display: none;">
                        <a class="function-button"><i class="iconfont ic-backtop"></i></a>
                    </li>
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import myHeader from "~/components/myHeader"
    export default {
        name: "bookmarks",
        components:{
            myHeader
        },
        data:function(){
            return{
                markShow:false
            }
        }
    }
</script>

<style scoped>
    *{
        font-size: 17px;
    }
    *, ::after, ::before {
        box-sizing: border-box;
    }
    .container {
        width: 960px;
    }
    .bookmarks .row {
        padding-top: 30px
    }
    .col-xs-offset-3 {
        margin-left: 12.5%;
    }
    .col-xs-18 {
        width: 75%;
        float: left;
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .tag-banner {
        margin-bottom: 30px;
        width: 100%;
        min-height: 100px;
        background-color: hsla(0,0%,71%,.2);
        border-radius: 6px;
    }
    img {
        border: 0;
        vertical-align: middle;
    }
    .note-list .title {
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
    .note-list .title:hover {
        text-decoration: underline;
    }
    .note-list .author {
        margin-bottom: 14px;
        font-size: 13px;
    }
    .note-list .author a:hover {
        color: #2f2f2f;
    }
    .note-list li {
        word-wrap: break-word;
    }
    li {
        line-height: 20px;
    }
    .note-list {
        list-style: none;
    }
    .note-list .author .info .nickname {
        vertical-align: middle;
    }
    .note-list .author .info .badge-icon {
        width: 15px;
        height: 15px;
    }
    .note-list .author .info span {
        display: inline-block;
        padding-left: 3px;
        color: #969696;
        vertical-align: middle;
        font-size: 13px;
    }
    .note-list li.have-img {
        min-height: 140px;
    }
    .note-list .abstract {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
    }
    .note-list .meta {
        padding-right: 0 !important;
        font-size: 12px!important;
        font-weight: 400;
        line-height: 20px;
    }
    .note-list .meta a {
        margin-right: 10px;
        font-size: 12px;
        color: #b4b4b4!important;
    }
    .note-list .meta a:hover{
        color: #919191!important;
    }
    .iconfont {
        font-size: inherit;
        font-style: normal;
        font-weight: 400 !important;
    }
</style>