<template>
    <div>
        <table>
            <thead>
            <tr>
                <th class="setting-head responsive-head"></th>
                <th></th>
            </tr>
            </thead>
            <tbody class="base">
            <tr>
                <td class="top-line">
                    <div class="avatar">
                        <img src="../../assets/img/default-avatar.jpg">
                    </div>
                </td>
                <td class="top-line">
                    <a class="btn btn-hollow">
                        <input unselectable="on" type="file" class="hide">
                        更改头像
                    </a>
                </td>
            </tr>
            <tr>
                <td class="setting-title">
                    昵称
                </td>
                <td><input type="text" placeholder="请输入昵称"></td>
            </tr>
            <tr>
                <td class="setting-title">电子邮件</td>
                <td>
                    <form>
                        <input type="button" value="点击绑定" class="btn btn-hollow">
                        <!--<input type="email" placeholder="请输入你的常用邮箱">-->
                    </form>
                </td>
            </tr>
            <tr>
                <td class="setting-title">手机</td>
                <td class="setted" @mouseenter="show=true" @mouseleave="show=false">
                    <div>157****5180</div>
                    <i class="fa fa-check"></i>
                    <span>已验证</span>
                    <a class="cancel-bind" v-if="show">解除绑定</a>
                </td>
            </tr>
            <tr>
                <td class="setting-title setting-editor">常用编辑器</td>
                <td>
                    <div class="col-xs-8">
                        <input type="radio" value="plain" name="fu">
                        <span>富文本</span>
                    </div>
                    <div class="col-xs-16">
                        <input type="radio" value="markdown" name="fu">
                        <span>Markdown
								<a href="/p/q81RER" target="_blank" class="help">
									<i class="fa fa-question-circle"></i>
								</a>
							</span>
                    </div>
                    <p>切换后对新建文章生效</p>
                </td>
            </tr>
            <tr>
                <td class="setting-title setting-verticle">语言设置</td>
                <td>
                    <div class="col-xs-8">
                        <input type="radio" value="zh-CN" name="zh">
                        <span>中文简体</span>
                    </div>
                    <div class="col-xs-16">
                        <input type="radio" value="zh-TW" name="zh">
                        <span>中文繁体</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="setting-title setting-verticle">接收谁的简信</td>
                <td>
                    <div class="col-xs-8">
                        <input type="radio" value="true" name="suo">
                        <span class="responsive-span">所有人</span>
                    </div>
                    <div class="col-xs-16">
                        <input type="radio" value="false" name="suo">
                        <span class="responsive-span">我关注的人、我发过简信的人</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="setting-title setting-verticle">提醒邮件通知</td>
                <td>
                    <div class="col-xs-8">
                        <input type="radio" value="instantly" name="dong">
                        <span class="responsive-span">所有动态</span>
                    </div>
                    <div class="col-xs-11">
                        <input type="radio" value="later" name="dong">
                        <span class="responsive-span">每天未读汇总</span>
                    </div>
                    <div class="col-xs-5">
                        <input type="radio" value="none" name="dong">
                        <span class="responsive-span">不接收</span>
                    </div>
                </td>
            </tr>
            </tbody>
        </table> <input type="submit" class="btn btn-success setting-save" value="保存">
        <!---->
        <!---->
    </div>
</template>

<script>
    export default {
        name: "basic",
        data(){
            return{
                show:false
            }
        }
    }
</script>

<style scoped>
    .col-xs-5 {
        width: 20.83333%;
        float: left;
    }
    .col-xs-11 {
        width: 45.83333%;
        float: left;
    }
    .col-xs-8 {
        width: 33.3333333%;
        float: left;
    }
    .col-xs-16 {
        width: 66.666666667%;
        float: left;
    }
     table {
        width: 100%;
    }
     tr {
        border-bottom: 1px solid #f0f0f0;
    }
    table {
        background-color: transparent;
        border-collapse: collapse;
        border-spacing: 0;
    }
    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
     tr:first-child {
        border: none;
    }
     .top-line {
        padding-top: 0;
    }
    .main td {
        padding: 20px 0;
    }
     .avatar {
        width: 100px;
        height: 100px;
    }
    .avatar img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
     .btn-hollow {
        font-size: 14px;
    }
    .btn-hollow {
        border: 1px solid rgba(59,194,29,.7);
        color: #42c02e!important;
    }
     .btn-hollow {
        padding: 4px 12px;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        border-radius: 40px;
        background: none;
    }
    .btn-hollow:focus, .btn-hollow:hover {
        border: 1px solid #42c02e;
        color: #42c02e!important;
        background-color: rgba(59,194,29,.05);
    }
     .hide {
        position: absolute;
        display: block!important;
        width: 82px;
        opacity: 0;
    }
    .setting-title {
        font-size: 15px;
        color: #969696 !important;
    }
     input[type=email], input[type=text] {
        padding: 5px 10px;
        font-size: 15px;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        background-color: hsla(0,0%,71%,.1);
    }
    .main .setted div {
        font-size: 15px;
        display: inline-block;
    }
     .setted span{
        margin: 0 0 0 10px;
        font-size: 14px;
        color: #969696;
    }
    .help i{
        color: #969696!important;
    }
     .setted i{
        color: #969696!important;
        margin-left: 10px;
    }
    td, th {
        display: table-cell;
        vertical-align: inherit;
    }
    input[type=radio] {
        margin: 4px 0 0;
        line-height: normal;
        box-sizing: border-box;
        padding: 0;
    }
     span {
        margin: 0 20px 0 6px;
        font-size: 15px;
    }
     p {
        margin: 0;
        padding: 8px 0 0;
        font-size: 12px;
        color: #969696;
        clear: both;
    }
     .setting-editor {
        line-height: 26px;
    }
     .setting-save {
        width: 100px;
        margin: 30px 0 60px;
        border-radius: 20px;
        border: none;
    }
    .cancel-bind{
        margin: 0 0 0 10px;
        font-size: 14px;
        color: #969696!important;
    }
</style>