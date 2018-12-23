var a = 1;
var func1 = function(){
    var b = 2;
    var func2 = function(){
        var c = 3;
        console.log ( b ); // b
        console.log ( a ); // a
    };
    func2();
    console.log ( c ); // Uncaught ReferenceError: c is not defined
};
func1();