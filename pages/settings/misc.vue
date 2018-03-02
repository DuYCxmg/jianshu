<template>
    <div>
        <table>
            <thead>
            <tr>
                <th class="setting-head"></th>
                <th></th>
            </tr>
            </thead>
            <tbody class="account">
            <tr>
                <td class="setting-title top-line">打包下载文章</td>
                <td class="top-line">
                    <a href="/backup/download" class="btn btn-hollow">下载所有文章</a>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="delete-account-content">
            <!---->
            <a href="javascript:void(0)" v-if="!showDelete" @click="showDelete=true" class="show-button">删除账号
              <i class="fa fa-chevron-down"></i>
            </a>
           <transition name="fade">
               <div  class="content" v-if="showDelete">
                   <h4>永久删除帐号</h4>
                   <ul>
                       <li>如果你不小心创建出了多余的帐号，或在绑定帐号的时候提示帐号被占用，你可以在
                           <a href="/p/eea64a29cf9d">简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。</li>
                       <li>如果你对简书上的某些内容、功能或社区规则不满意，你可以在
                           <a href="/help">帮助与反馈页</a>向我们提出。</li>
                       <li>删除帐号前，请确保已经没有任何公开或私密文章，且钱包中全部余额已清零。</li>
                       <li>删除帐号是不可逆的操作，删除后将无法恢复。</li>
                   </ul>
                   <a class="btn btn-hollow" @click="showDelete=false">保留我的帐号</a>
                   <a class="btn btn-delete">删除帐号</a>
               </div>
           </transition>
        </div>
        <!---->
    </div>
</template>

<script>
    export default {
        name: "misc",
        data:function(){
            return{
                showDelete:false
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
    .delete-account-content .show-button {
        font-size: 15px;
        color: #969696 !important;
    }
    li{
        list-style-type: disc;
    }
    h4{
        font-size: 18px;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
        margin-top: 10px;
        margin-bottom: 25px;
    }
     table {
        width:100%
    }
     tr {
        border-bottom:1px solid #f0f0f0;
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
    input[type=text] {
        padding:5px 10px;
        font-size:15px;
        border:1px solid #c8c8c8;
        border-radius:4px;
        background-color:hsla(0,0%,71%,.1)
    }
     p {
        margin:0;
        padding:8px 0 0;
        font-size:12px;
        color:#969696;
        clear:both
    }
     p a{
         color: #3194d0 !important;
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
     .top-line {
        padding-top:0
    }
     .setting-title {
        font-size:15px;
        color:#969696
    }
    .setting-input {
        line-height:33px
    }
     .setting-editor {
        line-height:26px
    }
    .setting-verticle {
        vertical-align:bottom
    }
    .btn-hollow {
        font-size:14px
    }
     .help {
        color:#969696
    }
     .account .btn-delete,
     .account .btn-hollow {
        font-size:14px;
         padding: 4px 12px;
         font-weight: 400;
         line-height: normal;
         border-radius: 40px;
         background: none;
    }
     .account .warn {
        margin:5px 0 20px;
        font-size:12px;
        color:#545454
    }
     .delete-account .modal-body {
        padding:20px;
        font-size:15px
    }
    .delete-account .action {
        margin-top:30px;
        font-size:14px;
        text-align:right
    }
     .delete-account .action a {
        margin-right:20px;
        color:#969696;
        vertical-align:middle
    }
     .delete-account .action a:hover {
        color:#2f2f2f
    }
    .btn-delete {
         border: 1px solid rgba(236,97,73,.7);
         color: #ea6f5a !important;
         margin-left: 10px;
    }
    .btn-delete:hover {
        border: 1px solid #ea6f5a;
        color: #ea6f5a !important;
        background-color: rgba(236,97,73,.05);
    }
    .delete-account-content {
        padding-top:20px;
        border-top:1px solid #f0f0f0!important;
    }
    .delete-account-content {
        border-color:#2f2f2f
    }
     .delete-account-content .show-button {
        font-size:15px;
        color:#969696
    }
    .delete-account-content .content h4 {
        margin-bottom:25px
    }
    .delete-account-content .content ul {
        margin-bottom:25px;
        padding-left:20px;
        font-size:14px
    }
     .delete-account-content .content ul li {
        margin-bottom:15px
    }
     .delete-account-content .content ul li a {
         color: #3194d0 !important;
    }
    .setting .main .delete-account-content .content .btn-hollow {
        margin-right:10px
    }
</style>