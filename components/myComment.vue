<template>
    <div>
        <div id="comment-list" class="comment-list">
            <!--提交的留言表单-->
            <form class="new-comment">
                <nuxt-link class="avatar" to="/u/213">
                    <img src="../assets/img/default-avatar.jpg">
                </nuxt-link>
                <textarea @focus="send=true" placeholder="写下你的评论"
                  v-model="value"
                ></textarea>
                <!--评论框下面的弹出部分-->
                <transition :duration="200" name="fade">
                    <div v-if="send" class="write-function-block clearfix">
                        <div class="emoji-modal-wrap">
                            <a href="javascript:void(0)" @click="showEmoji=!showEmoji" class="emoji">
                                <i class="fa fa-smile-o"></i>
                            </a>
                            <transition :duration="200" name="fade">
                                <!--表情框部分-->
                                <div v-if="showEmoji" class="emoji-modal arrow-up">
                                  <vue-emoji @select="selectEmoji"></vue-emoji>
                                </div>
                            </transition>
                        </div>
                        <div class="hint">
                            Ctrl+Enter 发表
                        </div>
                        <a class="btn btn-send" href="javascript:void(0)">发送</a>
                        <a class="cancel" href="javascript:void(0)" @click="send=false">取消</a>
                    </div>
                </transition>
            </form>
            <!--留言的列表-->
             <div id="normal-comment-list" class="normal-comment-list">
                 <!--留言的排序-->
                  <div class="top-title">
                      <span>25条评论</span>
                      <a href="javascript:void(0)" class="author-only">只看作者</a>
                      <div class="pull-right">
                          <a href="javascript:void(0)">按喜欢排序</a>
                          <a href="javascript:void(0)">按时间正序</a>
                          <a href="javascript:void(0)">按时间倒序</a>
                      </div>
                  </div>
                 <!--留言的正文-->
                 <div class="comment-placeholder" style="display:none;">
                     <div class="author">
                         <div class="avatar">
                         </div>
                         <div class="info">
                             <div class="name"></div>
                             <div class="meta"></div>
                         </div>
                     </div>
                     <div class="title"></div>
                     <div class="title animated-delay"></div>
                     <div class="tool-group">
                         <i class="fa fa-thumbs-o-up"></i>
                         <div class="zan"></div>
                         <i class="fa fa-comment-o"></i>
                         <div class="like"></div>
                     </div>
                 </div>
                 <div class="comment" v-for="(comment,index) in comments">
                    <!--一级回复-->
                     <div class="comment-content">
                        <!--作者-->
                         <div class="author">
                                 <nuxt-link class="avatar" to="/u/123">
                                     <img :src="comment.user.avatar" alt="">
                                 </nuxt-link>
                             <div class="info">
                                 <nuxt-link to="/u/123" class="name">
                                     {{comment.user.nick_name}}
                                 </nuxt-link>
                                 <div class="meta">
                                     <span>
                                         {{comment.floor}}楼 {{comment.create_at}}
                                     </span>
                                 </div>
                             </div>
                         </div>
                         <div class="comment-wrap"></div>
                         <!--正文-->
                     </div>
                     <!--二级回复-->
                    <div class="sub-comment-list">

                    </div>
                 </div>
             </div>
        </div>
    </div>
</template>
<script>
    //导入表情组件
    import vueEmoji from "../components/vueEmoji"
    export default {
        name:'myComment',
        data () {
            return {
                //评论框下面的按钮显示参数
                send:false,
                showEmoji:false,
                value:"",
                //模拟的数据
                comments:[
                    {
                        id:19935725,
                        floor:2,
                        liked:true,
                        likes_count:12,
                        node_id:23054702,
                        user_id:6780849,
                        user:{
                            avatar:"/default-avatar.jpg",
                            id:6780849,
                            is_author:false,
                            nick_name:"七岁就很拽",
                            badge:null
                        },
                        create_at:"2018-01-25T09:38:14.000+08.00",
                        children_count:3,
                        compiled_content:"像我这样优秀的人" +
                        "本该灿烂过一生" +
                        "怎么二十多年到头来" +
                        "还在人海里浮沉" +
                        "像我这样聪明的人" +
                        "早就告别了单纯" +
                        "怎么还是用了一段情" +
                        "去换一身伤痕" +
                        "像我这样迷茫的人" +
                        "像我这样寻找的人" +
                        "像我这样碌碌无为的人" +
                        "你还见过多少人" +
                        "像我这样庸俗的人" +
                        "从不喜欢装深沉" +
                        "怎么偶尔听到老歌时" +
                        "忽然也晃了神" +
                        "像我这样懦弱的人" +
                        "凡事都要留几分" +
                        "怎么曾经也会为了谁" +
                        "想过奋不顾身" +
                        "像我这样迷茫的人" +
                        "像我这样寻找的人" +
                        "像我这样碌碌无为的人" +
                        "你还见过多少人" +
                        "像我这样孤单的人" +
                        "像我这样傻的人" +
                        "像我这样不甘平凡的人" +
                        "世界上有多少人" +
                        "像我这样莫名其妙的人" +
                        "会不会有人心疼",
                        children:[
                            {
                                id:20013397,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nickname:"Bowman_"
                                },
                                parent_id:19935725,
                                created_at:"2018-01-27T13:19:11.000+08:00",
                                compiled_content:"是你李大钊飘了，还是我陈独秀拿不动刀了"
                            },
                            {
                                id:20013397,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nickname:"Bowman_"
                                },
                                parent_id:19935725,
                                created_at:"2018-01-27T13:19:11.000+08:00",
                                compiled_content:"是你李大钊飘了，还是我陈独秀拿不动刀了"
                            },
                            {
                                id:20013397,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nickname:"Bowman_"
                                },
                                parent_id:19935725,
                                created_at:"2018-01-27T13:19:11.000+08:00",
                                compiled_content:"是你李大钊飘了，还是我陈独秀拿不动刀了"
                            }
                        ]

                    },
                    {
                        id:19935726,
                        floor:3,
                        liked:true,
                        likes_count:12,
                        node_id:23054702,
                        user_id:6780849,
                        user:{
                            avatar:"/default-avatar.jpg",
                            id:6780849,
                            is_author:false,
                            nick_name:"八岁也很拽",
                            badge:null
                        },
                        create_at:"2018-01-25T09:38:14.000+08.00",
                        children_count:3,
                        compiled_content: "怎么二十多年到头来" +
                        "还在人海里浮沉" +
                        "像我这样聪明的人" +
                        "早就告别了单纯" +
                        "怎么还是用了一段情" +
                        "去换一身伤痕",
                        children:[
                            {
                                id:20013397,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nickname:"Bowman_"
                                },
                                parent_id:19935725,
                                created_at:"2018-01-27T13:19:11.000+08:00",
                                compiled_content:"所以不要奢求别人的感同身受，所有的安慰不过是道德层面的关心，自己伤口还是要自己愈合，孤独也只好默默忍耐"
                            },
                            {
                                id:20013397,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nickname:"Bowman_"
                                },
                                parent_id:19935725,
                                created_at:"2018-01-27T13:19:11.000+08:00",
                                compiled_content:"在深夜一个人的房间里，你自己不出点动静，就什么声音也没有"
                            },
                            {
                                id:20013397,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nickname:"Bowman_"
                                },
                                parent_id:19935725,
                                created_at:"2018-01-27T13:19:11.000+08:00",
                                compiled_content:"你以为你习惯了孤独，其实只是习惯了以为。"
                            }
                        ]

                    },
                    {
                        id:19935727,
                        floor:4,
                        liked:true,
                        likes_count:12,
                        node_id:23054702,
                        user_id:6780849,
                        user:{
                            avatar:"/default-avatar.jpg",
                            id:6780849,
                            is_author:false,
                            nick_name:"十岁还是拽",
                            badge:null
                        },
                        create_at:"2018-01-25T09:38:14.000+08.00",
                        children_count:3,
                        compiled_content:"像我这样优秀的人" +
                        "本该灿烂过一生" +
                        "怎么二十多年到头来" +
                        "还在人海里浮沉" +
                        "像我这样聪明的人" +
                        "早就告别了单纯" +
                        "怎么还是用了一段情" +
                        "去换一身伤痕" +
                        "像我这样迷茫的人" +
                        "像我这样寻找的人" +
                        "像我这样碌碌无为的人",
                        children:[
                            {
                                id:20013399,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nickname:"Bowman_"
                                },
                                parent_id:19935725,
                                created_at:"2018-01-27T13:19:11.000+08:00",
                                compiled_content:"你还见过多少人"
                            },
                            {
                                id:20013395,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nickname:"Bowman_"
                                },
                                parent_id:19935725,
                                created_at:"2018-01-27T13:19:11.000+08:00",
                                compiled_content:"凡事都要留几分"
                            },
                            {
                                id:20013345,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nickname:"Bowman_"
                                },
                                parent_id:19935725,
                                created_at:"2018-01-27T13:19:11.000+08:00",
                                compiled_content:"世界上有多少人"
                            }
                        ]

                    },
                    {
                        id:19935728,
                        floor:5,
                        liked:true,
                        likes_count:12,
                        node_id:23054702,
                        user_id:6780849,
                        user:{
                            avatar:"/default-avatar.jpg",
                            id:6780849,
                            is_author:false,
                            nick_name:"十一特别拽",
                            badge:null
                        },
                        create_at:"2018-01-25T09:38:14.000+08.00",
                        children_count:0,
                        compiled_content:"怎么感觉你思维忧伤的很发散啊"
                    }

                ]
            }
        },
        components:{
            vueEmoji
        },
        methods:{
            //表情绑定的对象
            selectEmoji:function(code){
                this.showEmoji =false;
                this.value +=code;
            },
            sendData:function(){
                console.log("发送value值发送给后台")
            }
        }
    }
</script>
<style scoped>
    .fade-enter-active,.fade-leave-active {
        opacity: 1;
        transition: .3s;
        -webkit-transition: .3s
    }
    .fade-enter,.fade-leave-to {
        opacity: 0;
        transform: translate3d(0,-5%,0);
        -webkit-transform: translate3d(0,-5%,0);
        transition: .3s;
        -webkit-transition: .3s
    }
    .note .post .comment-list {
        padding-top:20px;
        margin-bottom:200px;/*注意,一会儿要删*/
    }
    .note .post .comment-list .new-comment {
        position:relative;
        margin-left:48px;
        margin-bottom:20px;
    }
    .note .post .comment-list .avatar {
        width:38px;
        height:38px;
        display:inline-block;
        margin-right:5px;
    }
    .note .post .comment-list .new-comment .avatar {
        position:absolute;
        left:-48px;
    }
    .note .post .comment-list .new-comment textarea {
        width:100%;
        height:80px;
        padding:10px 15px;
        border:1px solid #ccc;
        border-radius: 4px;
        display:inline-block;
        vertical-align: top;
        outline-style: none;
        resize: none;
        font-size:13px;
        background:#f8f8f8;
    }
    .note .post .comment-list .new-comment .emoji-modal-wrap {
        position:relative;
    }
    .note .post .comment-list .new-comment .emoji {
        float:left;
        margin-top:14px;
    }
    .note .post .comment-list .new-comment .emoji i {
        font-size:25px;
        color:#969696;
    }
    .note .post .comment-list .new-comment .emoji i:hover {
        color:#333;
    }
    .note .post .comment-list .new-comment .hint {
        float:left;
        margin:20px 0 0 20px;
        font-size:13px;
        color:#969696;
    }
    .note .post .comment-list .new-comment .cancel {
        float:right;
        font-size:16px;
        margin:18px 30px 0 0;
        color:#969696!important;
    }
    .note .post .comment-list .new-comment .cancel:hover {
        color:#333!important;
    }
    .note .post .comment-list .new-comment .btn-send {
        float:right;
        width:78px;
        padding:8px 18px;
        margin:10px 0;
        font-size:18px;
        background:#42c02e;
        border-radius: 20px;
        color:#fff!important;
        box-shadow: none;
    }
    .note .post .comment-list .new-comment .btn-send:hover {
        background:#3db922;
    }
    .note .post .comment-list .new-comment .emoji-modal-wrap .emoji-modal {
        position:absolute;
        top:50px;
        left:-48px;
        width:402px;
        height:208px;
        padding:10px;
        border:1px solid #d9d9d9;
        border-radius:4px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
        z-index:10001;
        background-color: white!important;
    }
    .arrow-up:after {
        content:'';
        display:inline-block;
        position:absolute;
        left:53px;
        top:-1px;
        width:10px;
        height:10px;
        border-left: 1px solid #d9d9d9;
        border-top: 1px solid #d9d9d9;
        background:#fff;
        transform: translate3d(0,-50%,0) rotate(45deg);
    }
    .note .post .comment-list .normal-comment-list{
        margin-top: 30px;
    }
    .note .post .comment-list .top-title{
        padding-bottom:20px;
        border-bottom: 1px solid #f0f0f0;
    }
    .note .post .comment-list .top-title span{
        font-size: 17px;
        font-weight: 700;
    }
    .note .post .comment-list .top-title .author-only{
        font-size: 12px;
        padding: 4px 8px;
        border: 1px solid #e1e1e1;
        border-radius: 12px;
        margin-left: 10px;
        color: #969696!important;
    }
    .note .post .comment-list .top-title .pull-right a{
        margin-left: 10px;
        font-size: 12px;
        color:#969696!important;
    }
    .note .post .comment-list .top-title .pull-right a.active{
        color:#2f2f2f!important;
    }
    .note .post .comment-list .comment{
        padding: 20px 0 30px 0;
        border-bottom: 1px solid #f0f0f0;
    }
    .note .post .comment-list .info{
        display: inline-block;
    }
    .note .post .comment-list .info .name{
        font-size: 15px;
    }
    .note .post .comment-list .info .meta{
        font-size: 12px;
        color: #969696;
    }
</style>