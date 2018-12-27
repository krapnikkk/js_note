Validator.prototype.add = function( dom, rules ){
    var self = this;
    for ( var i = 0, rule;i<rules.length; rule = rules[ i++ ] ){
        (function( rule ){
            var strategyAry = rule.strategy.split( ':' );
            var errorMsg = rule.errorMsg;
            self.cache.push(function(){
                var strategy = strategyAry.shift();
                strategyAry.unshift( dom.value );
                strategyAry.push( errorMsg );
                return strategies[ strategy ].apply( dom, strategyAry );
            });
        })( rule )
    }
};