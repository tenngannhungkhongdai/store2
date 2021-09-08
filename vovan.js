// let item=[
//     {
//         name:'banana',
//         taste:'sweet'
//     },{
//         name:'lemon',
//         taste:'sour'
//     },{
//         name:'pepper',
//         taste:'spicy'
//     }
// ]
// localStorage.setItem('fruit',JSON.stringify(item))
// let juice=localStorage.getItem('fruit')
// juice=JSON.parse(juice)
// alert(juice.length)
// let wordlist=[
//     // {
//     //     id:1,
//     //     word:'a',
//     //     spell:'b',
//     //     mean:'c',
//     //     use:'d',
//     //     phrase:'e',
//     //     note:'f',
//     // }
// ]
// localStorage.setItem('word',JSON.stringify(wordlist))
var a=0
function inloihat(){
    a++
    if(a==1){document.getElementById('i1').innerHTML="We're no strangers to love"}
    else if(a==2){document.getElementById('i2').innerHTML="You know the rules and so do I"}
    else if(a==3){document.getElementById('i3').innerHTML="A full commitment's what I'm thinking of"}
    else if(a==4){document.getElementById('i4').innerHTML="You wouldn't get this from any other guy"}
    else if(a==5){document.getElementById('i5').innerHTML="I just wanna tell you how I'm feeling"}
    else if(a==6){document.getElementById('i6').innerHTML="Gotta make you understand"}
    else{document.getElementById('i7').innerHTML='<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">full song</a>'}
}
var Demgio = setInterval(inloihat, 1000);
let users=[]
localStorage.setItem('users',JSON.stringify(users))