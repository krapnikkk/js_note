var strategies = {
    isNonEmpty: function (value, errorMsg) {
        if (value == "") {
            console.log(errorMsg);
        }
    },
    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            console.log(errorMsg);
        }
    },
    isMobile: function (value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            console.log(errorMsg);
        }
    }
};

//Validator 类
var Validator = function(){
    this.cache = []; // 保存校验规则方法
};
/**
 *
 * @param dom   表单domName
 * @param rule      规则名称&配置
 * @param errorMsg  错误信息
 */
Validator.prototype.add = function( dom, rule, errorMsg ){
    var ary = rule.split( ':' ); // 把 strategy 和参数分开
    this.cache.push(function(){ // 把校验的步骤用空函数包装起来，并且放入 cache
        var strategy = ary.shift(); // 用户挑选的 strategy
        ary.unshift( dom.value ); // 把 input 的 value 添加进参数列表
        ary.push( errorMsg ); // 把 errorMsg 添加进参数列表
        return strategies[ strategy ].apply( dom, ary );
    });
};
Validator.prototype.check = function(){
    for ( var i = 0, validatorFunc; validatorFunc = this.cache[ i++ ]; ){
        var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
        if ( msg ){ // 如果有确切的返回值，说明校验没有通过
            return msg;
        }
    }
};



var validataFunc = function(){
    var validator = new Validator();
    /***************添加一些校验规则****************/
    validator.add( registerForm.userName, 'isNonEmpty', '用户名不能为空' );
    validator.add( registerForm.password, 'minLength:6', '密码长度不能少于 6 位' );
    validator.add( registerForm.phoneNumber, 'isMobile', '手机号码格式不正确' );

    var errorMsg = validator.check(); // 获得校验结果
    return errorMsg; // 返回校验结果
};

var registerForm = document.getElementById( 'registerForm' );
registerForm.onsubmit = function(){
    var errorMsg = validataFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
    if ( errorMsg ){
        alert ( errorMsg );
        return false; // 阻止表单提交
    }
};
