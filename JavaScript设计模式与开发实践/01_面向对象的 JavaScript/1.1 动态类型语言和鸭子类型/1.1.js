var duck = {
    duckSinging:function(){
        console.log('gagaga');
    }
};

var chicken = {
    duckSinging:function(){
        console.log('gagaga');
    }
};

var choir = [];

var joinChoir = function(animal){
    if(animal&&typeof animal.duckSinging === "function"){
        choir.push(animal);
        console.log('join success！');
        console.log('choir menber count:' + choir.length);
    }
};

joinChoir(duck);
joinChoir(chicken);