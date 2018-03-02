<template>
    <div>
        <ul class="user-list" infinite-scroll-url="/users/e1dee8bdf974/followers" data-placeholder="user">
            <li>
                <a class="avatar" href="/u/49d62a85da4c">
                    <img src="//upload.jianshu.io/users/upload_avatars/10321180/1fb605b9-f10b-44ae-b5b9-289fa9dca0e0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="180">
                </a>
                <div class="info">
                    <a class="name" href="/u/49d62a85da4c">帆帅无敌</a>
                    <div class="meta">
                        <span>关注 2</span><span>粉丝 1</span><span>文章 0</span>
                    </div>
                    <div class="meta">
                        写了 0 字，获得了 0 个喜欢
                    </div>
                </div>
                <a class="btn btn-hollow off user-follow-button"
                   @click="IsFollow" @mouseover="noFollow"
                   :class="followObj"
                   @mouseleave="beFollow">
                    <i class="fa" :class="iconObj" ref="icon"></i>
                    <span ref="followUser">关注</span>

                </a>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "fans",
        data:function(){
            return{
                iconObj:{
                    'fa-plus-square-o':true,
                    'fa-check':false
                },
                followObj:{
                    'follow':true,
                    'following':false
                }
            }
        },
        methods:{
            IsFollow:function(){
                let isfollow = this.$refs.followUser.innerHTML;
                this.followObj.follow = !this.followObj.follow;
                this.followObj.following = !this.followObj.following;
                this.iconObj['fa-plus-square-o'] = !this.iconObj['fa-plus-square-o'];
                this.iconObj['fa-check'] = !this.iconObj['fa-check'];
                this.$refs.followUser.innerHTML = isfollow == '关注' ? '已关注' : '关注';
            },
            noFollow:function(){
                let word = this.$refs.followUser.innerHTML;
                if(word == '已关注'){
                    this.$refs.followUser.innerHTML = '取消关注';
                    this.$refs.icon.className = 'fa fa-close';
                }
            },
            beFollow:function(){
                let word = this.$refs.followUser.innerHTML;
                if(word == '取消关注'){
                    this.$refs.followUser.innerHTML = '已关注';
                    this.$refs.icon.className = 'fa fa-check';
                }
            },

        }
    }
</script>

<style scoped>
    .follow {
        background:#42c02e!important;
        color:#ffff!important;
    }
    .following {
        background:#fff!important;
        color:#969696!important;
        border:1px solid #ccc!important;
    }
    span{
        margin-right: 10px;
        padding-right: 10px;
        border-right: 1px solid #969696;
    }
</style>