
let sortBefore =document.getElementById("sortBefore");
let sortAfter =document.getElementById("sortAfter");
let secNo =document.getElementById("secNo");


function  getLott(tp,firMax,firNo,secMax,secNum) {

    let lott=[];
    if(tp===2){
        firNo+=1;
    }

    while(1){

        if(lott.length == firNo){
            break;
        }


        let lottNo=Math.floor(Math.random()*firMax+1);

        if(!lott.includes(lottNo)){

            lott.push(lottNo);
        }

    }
    sortBefore.textContent = lott;
    sortAfter.textContent = lott.sort((a,b)=>a-b);
    secNo.textContent ="";

    //////
    if(tp!==3){

        if(tp===1){
            secNo.textContent = Math.floor(Math.random()*secMax+1);

        }else if(tp===2){

            secNo.textContent = lott.pop();
        }

    }



  }