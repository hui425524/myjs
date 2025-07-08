//未排序號碼
let sortBefore = document.getElementById("sortBefore");
//排序後號碼
let sortAfter = document.getElementById("sortAfter");
//第二區號碼
let secNo = document.getElementById("secNo");


//威力採用for
function lott1() {

    //建立存放號碼的空陣列
    let lott = [];

    //第一個號碼

    let lottNo = Math.floor(Math.random() * 38) + 1;
    lott.push(lottNo);
    console.log(lottNo);

    //第二個號碼後，每個號碼都要檢查有沒有重複
    //因為還要5個號碼
    for(let i=1;i<=5;i++){
        //亂數取號碼
        lottNo = Math.floor(Math.random() * 38) + 1;
        //檢查是否重複
        //沒有重複就放到lottNo中
        if(lott.includes(lottNo) == false){
            lott.push(lottNo);
        }else{
            i--;//若重複-1；代表這次執行的次數不算數，所以需再取得一次
        }
    }
    console.log(lott);

    //未排序
    sortBefore.textContent="排序前:"+lott;

    //排序
    lott.sort((a,b)=>{
        return a-b;
    })
     sortAfter.textContent="排序後:"+lott;

     //第二區
     secNo.textContent="第二區號碼: "+(Math.floor(Math.random()*8)+1);

}

////////////////////////威力採用While

// function lott2(){
//     let lott=[];

//     let count =1;
//     while(lott.length<6){
//         //取亂數號碼
//         let lottNo=Math.floor(Math.random()*49)+1;

//         //檢查是否重複
//         if(lott.includes(lottNo)==false){//沒有重複
//             lott.push(lottNo);//放入樂透
//             count++;
//         }

//     }
//         //未排序
//     sortBefore.textContent="排序前:"+lott;

//     //排序
//     lott.sort((a,b)=>{
//         return a-b;
//     })
//      sortAfter.textContent="排序後:"+lott;

//      //第二區(不能與第一區重複)

//      secNo.textContent="第二區號碼: "+(Math.floor(Math.random()*8)+1);
     


// }



function lott2(){
    let lott2=[];

    while(1){
    if(lott2.length ==6){
        break;
    }
//取亂數號碼
        let lottNo2=Math.floor(Math.random()*49)+1;

        //檢查是否重複
        if(lott2.includes(lottNo2)==false){//沒有重複
            lott2.push(lottNo2);//放入樂透
            
        }

    }

    ///取出陣列最後一個值，當特別號POP
    //secNo.textContent="特別號-----"+lott.pop();


    //未排序
    sortBefore.textContent="排序前:"+lott2;

    //排序
    lott2.sort((a,b)=>{
        return a-b;
    })
     sortAfter.textContent="排序後:"+lott2;

     //第二區
     while(1){
        let lottNo2=Math.floor(Math.random()*49)+1;

        if(lott2.includes(lottNo2)==false){//沒有重複
            secNo.textContent="特別號:"+lottNo2;
            break;
        }

     }




}





/////////////////////////////////////////今彩539
function lott3(){

    let lott=[];

    while(1){
        //檢查是否已經有5個號碼
    if(lott.length ==5){
        break;
    }
//取亂數號碼
        let lottNo3=Math.floor(Math.random()*39)+1;

        //檢查是否重複
        if(lott.includes(lottNo3)==false){//沒有重複
            lott.push(lottNo3);//放入樂透
            
        }

    }
        //未排序
    sortBefore.textContent="排序前:"+lott;

    //排序
    lott.sort((a,b)=>{
        return a-b;
    })
     sortAfter.textContent="排序後:"+lott;

     //今彩沒有第二區
     secNo.textContent="";



}



