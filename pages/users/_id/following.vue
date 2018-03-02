<template>
    <div>
        <my-header></my-header>
        <div class="person my-container">
            <div class="row">
                <div class="col-8 main">
                    <div class="main-top">
                        <nuxt-link class="avatar" to="/u/123">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <div class="title">
                            <nuxt-link class="name" to="/u/123">
                                测试用户123
                            </nuxt-link>
                            <i class="fa fa-mars"></i>
                        </div>
                        <div class="info">
                            <ul>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/users/123/following">
                                            <p>1</p>
                                            关注
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/users/123/followers">
                                            <p>1</p>
                                            粉丝
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/u/123">
                                            <p>32</p>
                                            文章
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>5000</p>
                                        字数
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>100</p>
                                        收获喜欢
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="trigger-menu">
                        <li :class="{active:currentTab == 'MyNotify'}">
                            <a href="javascript:void(0)" @click="toggleTab('MyNotify')">
                                关注用户&nbsp;1
                            </a>
                        </li>
                        <li :class="{active:currentTab == 'MyFans'}">
                            <a href="javascript:void(0)" @click="toggleTab('MyFans')">
                                <i class="fa fa-fire"></i>
                                粉丝&nbsp;1
                            </a>
                        </li>
                    </ul>
                    <div id="list-container">
                        <!--动态组件-->
                        <component :is="currentTab" keep-alive></component>
                    </div>
                </div>
                <div class="col-4 aside">
                    <div class="title">个人介绍</div>
                    <a class="function-btn" @click="showTextarea=true" href="javascript:void(0)">
                        <i class="fa fa-pencil-square-o"></i> 编辑
                    </a>
                    <div class="showTextarea" v-if="showTextarea">
                        <textarea name="usernamebuzhidao"></textarea>
                        <input class="save btn btn-hollow" type="submit" @click="showTextarea=false" value="保存">
                        <a class="cancel" href="javascript:void(0)" @click="showTextarea=false">取消</a>
                    </div>
                    <div class="description">
                        <div class="js-intro">
                            逃跑医生，预防医学专家，抗衰老顾问，创业者，奶爸！人生意义思考者，东方智慧践行者。非著名作家坯子。
                        </div>
                    </div>
                    <ul class="list user-dynamic">
                        <li>
                            <nuxt-link to="/users/123/collection">
                                <i class="fa fa-book"></i>
                                <span>我关注的专题/文集</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/users/123/like">
                                <i class="fa fa-heart-o"></i>
                                <span>我喜欢的文章</span>
                            </nuxt-link>
                        </li>
                    </ul>
                    <div>
                        <!--创建的专题-->
                        <div class="title">
                            我创建的专题
                        </div>
                        <nuxt-link to="/collection/new" class="function-btn new-collection-btn">
                            <i class="fa fa-plus"></i><span>新建专题</span>
                        </nuxt-link>
                        <ul class="list">
                            <li>
                                <nuxt-link to="/collection/123" class="avatar-collection">
                                    <img src="~assets/img/movie.jpg">
                                </nuxt-link>
                                <nuxt-link to="/collection/123" class="name">
                                    朱焘源值班报告
                                </nuxt-link>
                            </li>
                        </ul>
                        <!--管理的专题-->
                        <div class="title">
                            我管理的专题
                        </div>
                        <ul class="list">
                            <li>
                                <nuxt-link to="/collection/123" class="avatar-collection">
                                    <img src="~assets/img/movie.jpg">
                                </nuxt-link>
                                <nuxt-link to="/collection/123" class="name">
                                    朱焘源值班报告
                                </nuxt-link>
                            </li>
                        </ul>
                        <!--创建的文集-->
                        <div class="title">
                            我创建的文集
                        </div>
                        <ul class="list">
                            <li>
                                <nuxt-link to="/note/123" class="avatar-collection">
                                    <i class="fa fa-book"></i>
                                </nuxt-link>
                                <nuxt-link to="/note/123" class="name">
                                    朱焘源值班报告
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from '~/components/myHeader'
    import MyNotify from '@/components/follow/Notify'
    import MyFans from '@/components/follow/Fans'
    export default {
        name:'',
        data () {
            return {
                currentTab:'MyNotify',
                showTextarea:false
            }
        },
        methods:{
            toggleTab:function(tab){
                this.currentTab = tab;
            }
        },
        components:{
            myHeader,
            MyNotify,
            MyFans
        }
    }
</script>
<style scoped>
    .aside .showTextarea {
    }
    .aside .showTextarea textarea{
        margin-bottom: 10px;
        width: 100%;
        height: 125px;
        padding: 10px 10px;
        font-size: 14px;
        background-color: hsla(0,0%,71%,.1);
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        resize: none;
        outline: none;
    }
    .aside .showTextarea .save{
        padding: 5px 20px;
        font-size: 14px;
        border: 1px solid rgba(59,194,29,.7);
        color: #42c02e!important;
    }
    .aside .showTextarea .save:hover{
        border: 1px solid #42c02e;
        color: #42c02e !important;
        background-color: rgba(59,194,29,.05);
    }
    .aside .showTextarea .cancel{
        margin-left: 10px;
        font-size: 14px;
        color: #969696 !important;
        line-height: 34px;
        vertical-align: middle;
        cursor: pointer;
    }
</style>