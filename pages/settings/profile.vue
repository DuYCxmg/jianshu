<template>
    <div>
        <table>
            <thead>
            <tr>
                <th class="setting-head"></th>
                <th></th>
            </tr>
            </thead>
            <tbody class="information">
            <tr>
                <td class="top-line setting-title setting-verticle">
                    性别
                </td>
                <td class="top-line">
                    <input name="sex" value="1" type="radio">
                    <span>男</span>
                    <input name="sex" value="2" type="radio">
                    <span>女</span>
                    <input name="sex" value="0" type="radio">
                    <span>保密</span></td>
            </tr>
            <tr>
                <td class="setting-title pull-left">个人简介</td>
                <td>
                    <form><textarea placeholder="填写你的个人简介"></textarea></form>
                </td>
            </tr>
            <tr>
                <td class="setting-title pull-left setting-input">个人网站</td>
                <td>
                    <form><input name="website" placeholder="http://你的网址" type="text">
                        <p class="pull-right">填写后会在个人主页显示图标</p>
                    </form>
                </td>
            </tr>
            <tr>
                <td class="setting-title">微信二维码</td>
                <td class="weixin-qrcode"><input class="hide" type="file">
                    <a class="btn btn-hollow"><input class="hide" type="file"> 更换图片
                    </a>
                    <p class="pull-right">上传后会在个人主页显示图标</p>
                </td>
            </tr>
            <tr>
                <td class="setting-title setting-input pull-left">社交帐号</td>
                <td class="social-bind">
                    <p>你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。</p>
                    <p>如果帐号被占用，你可以在
                        <a href="/p/eea64a29cf9d">简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。</p>
                    <ul class="social-bind-list">
                        <li>
                            <div class="bind-name"><i class="fa fa-weibo"></i>
                                <a href="javascript:void(0)">绑定微博
                                    <i class="fa fa-chevron-right"></i></a>
                            </div>
                        </li>
                        <li>
                            <div class="bind-name"><i class="fa fa-weixin"></i>
                                <a href="javascript:void(0)">绑定微信
                                    <i class="fa fa-chevron-right"></i></a>
                            </div>
                        </li>
                        <li class="has-bind">
                            <div class="bind-name"><i class="fa fa-qq"></i>
                                <i class="fa fa-check"></i>
                                <span>已绑定</span>
                                <a class="cancel-bind">解除绑定</a>
                            </div>
                            <!---->
                        </li>
                        <li>
                            <div class="bind-name"><i class="fa fa-leaf"></i>
                                <a href="javascript:void(0)">绑定豆瓣
                                    <i class="fa fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="bind-name"><i class="fa fa-google"></i>
                                <a href="javascript:void(0)">绑定 Google+
                                    <i class="fa fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </td>
            </tr>
            </tbody>
        </table> <input class="btn btn-success setting-save" value="保存" type="submit">
    </div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped>
    .setting .main {
        padding-left:0
    }
    .setting .main .setting-save {
        width:100px;
        margin:30px 0 60px;
        border-radius:20px;
        border:none
    }
    .setting .main table {
        width:100%
    }
    .setting .main tr {
        border-bottom:1px solid #f0f0f0
    }
    span {
        margin: 0 20px 0 6px;
        font-size: 15px;
        vertical-align: middle;
    }
     tr {
        border-color:#2f2f2f;
         border-bottom: 1px solid #f0f0f0;
    }
    tr:last-child {
        border:none
    }
     td {
        padding:20px 0
    }
    form {
        margin:0
    }
     input {
        border-color:#2f2f2f
    }
     input.btn {
        border-color:#42c02e
    }
    input[type=email],
    input[type=text] {
        padding:5px 10px;
        font-size:15px;
        border:1px solid #c8c8c8;
        border-radius:4px;
        background-color:hsla(0,0%,71%,.1)
    }
     input[type=email] {
        width:280px
    }
    textarea {
        width:100%;
        height:100px;
        margin-bottom:10px;
        padding:8px 10px;
        font-size:15px;
        border:1px solid #c8c8c8;
        border-radius:4px;
        background-color:hsla(0,0%,71%,.1);
        display:block;
        resize:none;
        outline-style:none;
    }
    p {
        margin:0;
        padding:8px 0 0;
        font-size:12px;
        color:#969696;
        clear:both
    }
     p a {
        color:#3194d0!important;
    }
     p.active {
        color:#333
    }
    span {
        margin:0 20px 0 6px;
        font-size:15px;
        vertical-align:middle
    }
     .setting-head {
        width:150px
    }
    .avatar {
        width:100px;
        height:100px
    }
    .top-line {
        padding-top:0
    }
    .setting-save {
        width: 100px;
        margin: 30px 0 60px;
        border-radius: 20px;
        border: none;
    }
     .setting-title {
        font-size:15px;
        color:#969696
    }
     .setting-input {
        line-height:33px
    }
     .btn-success{
         color:#fff;
         background-color: #42C02E;
     }
    .setting-verticle {
        vertical-align:bottom
    }
    .btn-hollow {
        font-size:14px;
        border: 1px solid rgba(59,194,29,.7);
        color: #42c02e !important;
    }
    .hide {
        position:absolute;
        display:block!important;
        width:82px;
        opacity:0
    }
    .setted div {
        font-size:15px;
        display:inline-block
    }
    .setted i {
        margin:0 0 0 10px;
        font-size:12px;
        color:#969696;
        vertical-align:middle
    }
    .setted a,
    .setted span {
        margin:0 0 0 3px;
        font-size:14px;
        color:#969696
    }
    .setted a {
        margin-left:8px
    }
    .setted a:hover {
        color:#2f2f2f
    }
     .cancel-bind {
        font-size:12px;
        color:#969696;
        display:none
    }
     .cancel-bind:hover {
        color:#c8c8c8
    }
    .setted:hover .cancel-bind {
        display:inline
    }
    .base tr:first-child {
        border:none
    }
    .information .modal-body {
        padding:20px
    }
     .information input[name=website] {
        width:100%;
        margin-bottom:10px
    }
    .information .cancel-btn {
        margin-left:20px;
        font-size:14px;
        color:#969696;
        line-height:30px;
        vertical-align:middle
    }
    .information .cancel-btn:hover {
        color:#2f2f2f
    }
     .information .person-description {
        min-height:300px
    }
     .information .weixin-qrcode img {
        width:84px;
        height:84px;
        margin-right:10px
    }
    .information .weixin-qrcode p.active {
        padding-top:35px;
        color:#969696
    }
    .information .weixin-qrcode p.active:hover {
        color:#c8c8c8
    }
     .information .weixin-qrcode .cancel-bind {
        display:none;
        padding-left:8px;
        font-size:12px;
        color:#969696
    }
    .information .weixin-qrcode:hover .cancel-bind {
        display:inline
    }
    .information .social-bind {
        padding-bottom:10px
    }
     .information .social-bind-list {
        margin:0;
        list-style:none
    }
     .information .social-bind-list li {
        border-bottom:1px solid #f0f0f0!important;
        line-height:50px;
        font-size:0
    }
     .information .social-bind-list li {
        border-color:#2f2f2f
    }
     .information .social-bind-list li:last-child {
        border:none
    }
     .information .social-bind-list i {
        width:30px;
        font-size:20px;
        vertical-align:middle;
        display:inline-block
    }
    .information .social-bind-list span {
        margin:0 0 0 10px;
        font-size:12px
    }
     .information .social-bind-list .bind-name {
        display:inline-block
    }
     .information .social-bind-list .bind-name a {
        margin:0 0 0 20px;
        font-size:14px;
        vertical-align:middle
    }
    .information .social-bind-list .bind-name a {
        color:#969696
    }
     .information .social-bind-list .bind-name a:hover {
        color:#c8c8c8
    }
    .information .social-bind-list .bind-name span {
        margin:0 0 0 3px;
        font-size:14px;
        color:#969696
    }
     .information .social-bind-list .bind-name .ic-arrow {
        font-size:14px
    }
     .information .social-bind-list .bind-name .ic-collections-followed {
        width:auto;
        margin-left:20px;
        font-size:12px;
        color:#969696
    }
     .information .social-bind-list .bind-name .cancel-bind {
        font-size:12px;
        color:#969696;
        display:none
    }
     .information .social-bind-list li.has-bind:hover .cancel-bind {
        display:inherit
    }
     .information .social-bind-list .pull-right {
        font-size:16px
    }
    .information .social-bind-list .pull-right input {
        margin-right:-4px
    }
     .information .social-bind-list .pull-right span {
        color:#969696
    }
     .information .social-bind-list .pull-right span.active {
        color:#333
    }
     .information .fa-check{
         font-size: 12px!important;
         color:#969696;
         width: 15px!important;
         margin:2px 0 0  16px;
     }
     .information .fa-chevron-right{
         font-size: 12px!important;
         color: #969696;
     }
     .information .fa-weibo {
        color:#ea6f5a
    }
     .information .fa-weixin {
        color:#42c02e
    }
    .information .fa-qq {
        color:#3194d0
    }
     .information .fa-leaf {
        color:#42c02e
    }
    .information .fa-google {
        color:#ec6149
    }
    .information .change-password p {
        margin-bottom:15px
    }
    .delete-account-content .show-button {
        font-size:15px;
        color:#969696
    }
    .setting .main .delete-account-content .content h4 {
        margin-bottom:25px
    }
    .setting .main .delete-account-content .content ul {
        margin-bottom:25px;
        padding-left:20px;
        font-size:14px
    }
    .information .social-bind-list li {
        border-bottom: 1px solid #f0f0f0;
        line-height: 50px;
        font-size: 0;
    }
    .setting .main .delete-account-content .content .btn-hollow {
        margin-right:10px
    }
</style>