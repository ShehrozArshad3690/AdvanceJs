let numbers=[100,200,300,4000];
console.log(numbers);
let show=numbers[Symbol.iterator]();
show.next();
show.next();
console.log(show.next());
console.log(show.next().value);          //used to get just value
console.log(show.next().done);              //used to check wheather array is empty or not




///// number iterator with loop


let marks=[34,76,87,23];
let marksShow=marks[Symbol.iterator]();
let i=marksShow.next();
while (!i.done) {                               //jb tk marksshow.done true ni ho jati tb tk while condition chaly
    console.log(i.value);
    i=marksShow.next();
};


///// string iterator with loop


let str="Shehroz Arshad";
let chr=str[Symbol.iterator]();
let ii=chr.next();
while (!ii.done) {                               //jb tk marksshow.done true ni ho jati tb tk while condition chaly
    console.log(ii.value);
    ii=chr.next();
};


//// making own iterator 


function numberIterator(arr) {
    var nextNum=0;
    return{
        next(){
            if (nextNum<arr.length) {
                return{
                    value: arr[nextNum++],
                    done: false
                }
            } else {
                return{
                    value: arr[nextNum++],
                    done: true
                }
            }
        }
    }
}

let numb=[1,2,4,5];
let numb1=numberIterator(numb);

numb1.next()
numb1.next()
numb1.next()
numb1.next()
console.log(numb1.next());