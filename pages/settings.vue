<template>
    <div class="setting-container">
        <myheader></myheader>
        <div class="content container my-container">
            <div class="row">
                <div class="aside">
                    <ul>
                        <li>
                            <nuxt-link active-class="active" exact to="/settings/basic" exact>
                                <i class="fa fa-list-ul"></i>
                                <span>基础设置</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link active-class="active" to="/settings/profile">
                                <i class="fa fa-address-card"></i>
                                <span>个人资料</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link active-class="active" to="/settings/1">
                                <i class="fa fa-bookmark"></i>
                                <span>微博认证</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link active-class="active" to="/settings/2">
                                <i class="fa fa-ban"></i>
                                <span>黑名单</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link active-class="active" to="/settings/3">
                                <i class="fa fa-yen"></i>
                                <span>赞赏设置</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link active-class="active" to="/settings/misc">
                                <i class="fa fa-cog"></i>
                                <span>账号管理</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xs-16 col-xs-offset-8 main">
                <nuxt-child/>
            </div>
        </div>
    </div>
</template>

<script>
    import myheader from '../components/myHeader'

    export default {
        name: "settings",
        components:{
            myheader
        }
    }
</script>

<style scoped>
    *, ::before, ::after {

        box-sizing: border-box;

    }
    .content{
        width: 960px!important;
        margin: 0 auto!important;
        padding: 0 15px;
        overflow: hidden;
    }
    .content .row{
        padding: 15px 0;
        margin: 0 -15px;
    }
    .content .row .aside{
        position: fixed;
        top: 0;
        bottom: 0;
        margin: 86px 0 0;
        padding: 0 0 30px;
        width: 280px;
        overflow: auto;
    }
    .content .row .aside ul{
        margin-top: 0;
        margin-bottom: 10px;
    }
    .content .row .aside ul li{
        line-height: 20px;
        margin: 0;
        color: #333;
    }
    .content .row .aside ul li a:hover{
        background-color: #f0f0f0;
    }
    .content .row .aside ul li a{
        height: auto;
        padding: 10px 25px;
        line-height: 30px;
        display: block;
        background-color: transparent;
    }
    .content .row .aside ul li a i{
        margin-right: 15px;
        font-size: 22px;
        color: white;
        background-color: #969696;
        padding: 8px;
        display: inline-block;
        width: 40px;
        text-align: center;
        border-radius: 3px;
        vertical-align: middle;
    }
    .content .row .aside ul li a span{
        font-size: 15px;
        vertical-align: middle;
    }
    .content .row .aside ul li a.active {
        background-color: #f0f0f0;
        border-radius: 4px;
    }

    @media (max-width: 1080px) {
        .content{
            width: 750px!important;
        }
        .aside{
            width: 218.75px!important;
        }
    }
    @media (max-width: 750px) {
        .news-container{
            overflow: hidden;
        }
    }
    .col-xs-offset-8 {
        margin-left: 33.33333%;
    }
    .setting .main {
        padding-left: 0;
    }
    .col-xs-16 {
        width: 66.66667%;
        float: left;
    }
</style>