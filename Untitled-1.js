/*function narcissistic(value) {
    // Code me to return true or false
    let arr = value.toString().split('');
    
    let result = arr.map(x=>Math.pow(x, arr.length)).reduce(function(sum, current) {
        return sum + current;
        }, 0);
    
    console.log(arr)
    console.log(result);

    if (result == value){
        return true;
    } else {
        return false;
    }

}

narcissistic(153)*/

/*function duplicateEncode(word){
    let arr = word.toLowerCase().split('');
    let result = {};
    
        for (let i = 0; i < arr.length; i++ ){
            let a = arr[i];
            if (result[a]!=undefined){
                result[a]++;
            }else {
                result[a]=1;
                
            }
        }

        console.log(arr)
        //console.log(result);

        let rep = [];
        for (let key in result){
            if(result[key]>1){
                rep.push(key);
            }
        }
        //console.log(rep);
        //let letter = Object.keys(result);

        let finish = [];
        for (let elem of arr){
            if(rep.includes(elem)){
                finish.push(')');

            }else {
                finish.push('(')
            }
        }

        //return finish.join('');
        console.log(finish.join(''));
    

    }*/

/*function duplicateEncode1(word){
    word = word.toLowerCase().split('')
    console.log(word);
    let x = word.map( function (a, _i, w) {
        console.log(word);           
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
        console.log(x);
    }

duplicateEncode1('artur')*/

/*function persistence(num,i) {

    i = i||0;
    let arr = String(num).split('');
    
    let result = arr.reduce(function(mn, current) {
        return mn * current;
    }, 1);

    
    if (arr.length!=1){
        i++
        return persistence(result,i);
        
    } else {
        return i
    }



}

persistence(999) */


/*function rgb(r, g, b){

    r = (r>=0 && r<=255)? r : (r<0)? 0 : 255;
    g = (g>=0 && g<=255)? g : (g<0)? 0 : 255;
    b = (b>=0 && b<=255)? b : (b<0)? 0 : 255;
    // if(r<0){
    //     r=0
    // }
    // if(r>255){
    //     r=255
    // }
    // if(g<0){
    //     g=0
    // }
    // if(g>255){
    //     g=255
    // }
    // if(b<0){
    //     b=0
    // }
    // if(b>255){
    //     b=255
    // }
    r=r.toString(16);
    g=g.toString(16);
    b=b.toString(16);


    //padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    
    if (r.length < 2) {
        r = "0" + r;
    }
    if (g.length < 2) {
        g = "0" + g;
    }
    if (b.length < 2) {
        b = "0" + b;
    }
    return (r+g+b).toUpperCase()

}
console.log(rgb(-20,300,350))*/

/*function spinWords(expression){
    expression = expression.split(' ');

    for (let i = 0; i < expression.length;i++){
        expression[i]=[expression[i]];
    }

    expression = expression.map(item =>item.join('').split('')).map(function(elem){
        if (elem.length < 5){
            return elem.join('')
        } else {
            return elem = elem.reverse().join('')
        }
    }).join(' ')

    return expression
}

console.log(spinWords("Hey fellow warriors"))*/

/*function anagrams(word, words) {
    let arr = [];
    for (let i = 0; i < words.length; i++){
        if (word.split('').sort().join('')==words[i].split('').sort().join('')){
            arr.push(words[i])
        } 
    }
    return arr
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))*/


/*function humanReadable(seconds) {
    let hour = Math.floor(seconds/3600);
    let min = Math.floor((seconds - hour*3600)/60);
    let sec = seconds - (hour*3600) - (min*60);

    if (hour   < 10) {hour  = "0"+hour;}
    if (min < 10) {min = "0"+min;}
    if (sec < 10) {sec = "0"+sec;}

    return console.log(`${hour}:${min}:${sec}`)

}

humanReadable(99999)*/


/*function getFilt(str){
    str = str.toLowerCase().split('').filter(function (e, i, arr) {
        return arr.lastIndexOf(e) !== i;
    })


    let result = [];

    for (let elem of str) {
    if (!result.includes(elem)) {
        result.push(elem);
    }
    }

    return result.length;
    
}

console.log(getFilt("aabbcde"))*/


/*function snail(array){
    const arr = [];

    while (array.length) {
        arr.push(
            ...array.shift(),
            ...array.map(a => a.pop()),
            ...array.pop().reverse(),
            ...array.map(a => a.shift()).reverse()
            
        );
    }
    return arr
}*/


/*function spiral(array) {
    const arr = [];

    function func2(array){
        
        let arr1 = array.shift();
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        if(array.length){
            arr2 = array.map(a => a.pop());  
        }
        if(array.length) {
            arr3 = array.pop().reverse(); 
        } 
        if(array.length) {  
            arr4 = array.map(a => a.shift()).reverse();
        }
        
        
        arr.push(arr1,arr2, arr3,arr4);
        
    }
    
    while (array.length !== 0){  
        func2(array)
    }

    let result = [];

    arr.forEach(element => {
        element.forEach(elem => {
            result.push(elem)
        });
        
    });

    return result;
}
console.log(spiral([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10],[11, 12, 13, 14, 15],[16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
//console.log(spiral([[1,  2,   3,  4], [5,  6,   7,  8], [9,  10, 11, 12], [13, 14, 15, 16]]))
    
//console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

//console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10],[11, 12, 13, 14, 15],[16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))*/


//let arr = [1, 2, 3, 4, 5, 6, 7];
/*function inBetween(a,b){
    for(let i=0; i<arr.length; i++){
        if (arr[i]>=a&&arr[i]<=b){
            console.log(arr[i])
        }
    }
}*/

/*function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}
console.log(arr.filter(inBetween(3, 6)))*/


//function cakes(recipe, available) {
    

    //if(Object.keys(recipe).map(item =>Object.keys(available).includes(item))&&(Object.keys(recipe).length<=Object.keys(available).length)){
        //let b = Object.values(Object.fromEntries(Object.entries(recipe).sort()));
        //let c = Object.values(Object.fromEntries(Object.entries(available).sort()));

        //let b1 = Object.entries(recipe).sort();
        //let b2 = Object.fromEntries(b1);
        //let b = Object.values(b2);

        /*let b1 = Object.entries(recipe).sort().join().split(',')
        let b =[]
        for (let j=0; j<b1.length; j++){
            if ((j+1)%2==0){
                b.push(b1[j])
            }
        }*/

        //let c1 = Object.entries(available).sort();
        //let c2 = Object.fromEntries(c1);
        //let c= Object.values(c2);

        /*let c1 = Object.entries(available).sort().join().split(',')
        let c =[]
        for (let k=0; k<c1.length; k++){
            if ((k+1)%2==0){
                c.push(c1[k])
            }
        }

        let res = [];  

        for (let i=0; i<=b.length; i++){
            if(Math.floor(c[i]/b[i])>=1){
                res.push(Math.floor(c[i]/b[i]))
            } else {
        return 0
            }
    
    
        }
    return Math.min( ...res )
    } else {
        return 0
    }

}*/



//console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

/*let rec = {"sugar":500,"flour":2000,"milk":2000,"apples":15,"oil":20}
let b1 = Object.entries(rec).sort().join().split(',')
let b =[]
for (let j=0; j<b1.length; j++){
    if ((j+1)%2==0){
        b.push(b1[j])
    }
}*/


//console.log(b)
//let b2 = Object.fromEntries(b1);
//let b = Object.values(b2)
//let q = Object.fromEntries(Object.entries(rec).sort())

//let o = {... b}
//console.log(key)
/*function qqq(rec, ava){
    let changes = [];
    for (let [key, val] of Object.entries(rec)){
        if (key in ava){
            oldVal = ava[key];
            ava[key] = val;
            changes.push(Math.floor(oldVal/val))
            console.log(changes);
            //Math.min( ...changes )
            //return Math.min.apply(null, changes)
            /*return changes.reduce(function(a, b) {
            return Math.min(a, b)})
        } else {
            return 0
        }
    } 
    //return Math.min( ...changes )
    return Math.min( ...changes )
    let min = changes[0];
    let max = min;
    for (i = 1; i < changes.length; ++i) {
        if (changes[i] > max) max = changes[i];
        if (changes[i] < min) min = changes[i];
    }
    console.log(changes)
    console.log(min)
}
//new: val,
//old: oldVal
console.log(qqq3({"cream":200,"flour":300,"sugar":150,"milk":100,"oil":100}, {"sugar":1700,"flour":20000,"milk":20000,"oil":30000,"cream":5000}))*/



/*let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
let required = {flour: 500, sugar: 200, eggs: 1}
let z = Object.entries(recept)
let x = Object.fromEntries(z)

let result = Object.keys(recept).map((key) => [key, recept[key]]);
console.log(result);*/

/*function qqq3(rec, ava){
    let changes = [];

    return Math.min(...Object.keys(rec).map(x => Math.floor(ava[x]/rec[x] || 0)))
    console.log(Math.min(...z))
    for (let [key, val] of Object.entries(rec)){
        if (key in ava){
            oldVal = ava[key];
            ava[key] = val;
            changes.push(Math.floor(oldVal/val))
            
        } else {
            return 0
        }
    } 
    return Math.min( ...changes )
    
}*/


/*function sayHi() {
    console.log(this.name);
  }
  
  let user = { name: "John" };
  let admin = { name: "Admin" };
  
  // используем 'call' для передачи различных объектов в качестве 'this'
  sayHi.call(user); // John
  sayHi.call( admin ); // Admin*/

/*class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

  // использование
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);*/


function add(a, b) {


    return (Number(a) + Number(b)).toString(); // Fix me!
}
