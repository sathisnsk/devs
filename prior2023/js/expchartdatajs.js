import MyData from '../json/data.json' assert {type:'json'} ;
console.log(MyData);
let bar1= document.querySelector('.bar-3');
console.log(bar1);
let bars = ['bar-1', 'bar-2', 'bar-3', 'bar-4', 'bar-5', 'bar-6', 'bar-7' ];
let i =0;
for(i=0; i<MyData.length; i++)
{
 let  percent=MyData[i].amount;
 percent/=6;
 let x ="."+ bars[i];
 let bar1= document.querySelector(x);
 console.log(bar1);
    bar1.style.height=percent+"vh"; //alternate `${percent}%` backtick and dollar
    console.log(bars[i]);
}
// let bar2= document.querySelector('.bar-3');
// bar2.style.height="10%"; 