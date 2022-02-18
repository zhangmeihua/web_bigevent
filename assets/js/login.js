$(function(){
    //点击去注册
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })
    //点击去登录
    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })

    //从layui中获取form元素
    var form = layui.form
    form.verify({
        pwd:[/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
        //检验两次密码是否一致的规则
        repwd:function(value){
            var pwd = $('.reg-box [name=password]').val()
            if(pwd !== value){
                return '两次密码不一致！'
            }
        }
    })

    //监听注册表单的提交事件
    $('#form_reg').on('sumit',function(e){
        e.preventDefault()
        $.post('http://ajax.frontend.itheima.net/api/reguser',{
            username:$('#form_reg [name=username]').val(),
            password:$('#form_reg [name=password]').val()
        },
        function(res){
                if(res.status !== 0){
                    return console.log('res.message')
                }
                console.log('注册成功！')
        })

    })
    
})