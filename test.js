// 分數判斷
function testscore(score){
    
    if(score<60 && score >=0){
        console.log('不及格');
    } else if(score>=60 && score <70){
       console.log('丁');
    } else if(score>=70 && score <80){
        console.log('丙');
    }else if(score>=80 && score <90){
        console.log('乙');
    }else if(score>=90 && score <=100){
        console.log('甲');
    }else{
        console.log('輸入錯誤，無此分數');
    }
}

//分數判斷(解決辦法2)
function testscore2(score) {
    let levels ={
        10:'甲',
        9:'甲',
        8:'乙',
        7:'丙',
        6:'丁',
     }
     
     let x=Math.floor(score/10);//除於10取整數(去小數點)
     let level =levels[x]?levels[x]:level='不及格';
     
     console.log(level);
}


//for迴圈

function stu_test(){

  let stu ={
    name:'david',
    age:10,
  }
  for (let key in stu){
    let value = stu[key];
    console.log(key,value);
  }
}

function multi_for(){
  for (let i =1; i<=9;i++){
    for(let j=1;j<=9;j++){
      console.log(i+'x'+j+'='+i*j);
    }
  }
}


//while迴圈

function multi_while(){
let i=1;
let j=1;
  while(i<10){
    while(j<10){
      console.log(i+'x'+j+'='+i*j);
      j++;
    }
    i++;
    j=1;
  }
}