/**
 * 一个基于列表的应用
 */
const List = require("./List");
var list = `1. 9.0 The Godfather (1972) 144,382 教父1 
        　　2. 9.0 The Shawshank Redemption (1994) 174,704 申肖克得救赎 
        　　3. 8.9 The Godfather: Part II (1974) 82,933 教父2 
        　　4. 8.9 The Lord of the Rings: The Return of the King (2003) 128,480 魔戒3 
        　　5. 8.8 Schindler's List (1993) 110,462 辛德勒名单 
        　　6. 8.7 Shichinin no samurai (1954) 38,316 七武士 
        　　7. 8.7 Casablanca (1942) 74,525 卡萨布兰卡 
        　　8. 8.7 Star Wars (1977) 154,282 星球大战4 
        　　9. 8.7 Star Wars: Episode V - The Empire Strikes Back (1980) 120,352 星球大战5帝国反击战 
        　　10. 8.7 Buono, il brutto, il cattivo, Il (1966) 37,755 黄金三镖客 
        　　11. 8.7 Pulp Fiction (1994) 154,214 低俗小说 
        　　12. 8.7 One Flew Over the Cuckoo's Nest (1975) 79,458 飞越疯人院 
        　　13. 8.7 The Lord of the Rings: The Fellowship of the Ring (2001) 177,649 魔戒1 
        　　14. 8.7 Rear Window (1954) 46,671 后窗 
        　　15. 8.6 The Lord of the Rings: The Two Towers (2002) 134,259 指环王2 
        　　16. 8.6 Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964) 71,808 奇爱博士 
        　　17. 8.6 Citizen Kane (1941) 68,319 公民凯恩 
        　　18. 8.6 The Usual Suspects (1995) 116,852 非常嫌疑犯 
        　　19. 8.6 Raiders of the Lost Ark (1981) 104,682 印地安那琼斯 
        　　20. 8.6 Cidade de Deus (2002) 35,635 上帝之城 `;

function createArr(list) {
    var arr = list.split("\n");
    arr.forEach((item, index) => {
        arr[index] = item.trim();
    });
    return arr;
}



function Customer(name,movie){
    this.name = name;
    this.movie = movie;
}

function displayList(list) {
    for(list.front();list.currentPosition()<list.length;list.next()){
        let item = list.getElement();
        if(item instanceof Customer){
            console.log(`${item["name"]} ${item["movie"]}`);
        }else{
            console.log(item);
        }
        
    }
}

function checkOut(name,movie,filmList,customerList){
    if(filmList.contains(movie)){
        var c = new Customer(name,movie);
        customerList.append(c);
        filmList.remove(movie);
    }else{
        console.log(`${movie} is not available`);
    }
}

function test(){
    var movies = createArr(list);
    var movieList = new List();
    for (var i = 0; i < movies.length; i++) {
        movieList.append(movies[i]);
    }
    
    var customers = new List();
    console.log(`Available movies:\n`);
    displayList(movieList);
    checkOut("John","8. 8.7 Star Wars (1977) 154,282 星球大战4",movieList,customers);
    console.log(`Customer Rentals:\n`);
    displayList(customers);
}

test();