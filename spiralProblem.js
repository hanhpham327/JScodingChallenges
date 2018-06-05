function spiralArrays(input){
    for(var x=0;x<input;x++){
        window["Array"+(x)]=[];     
    }
    // console.log(window["Array"+(input-1)])
    for (var k=0;k<=input-1;k++){
    window["Array0"][k]=k+1
    }
    //trying to get the last position's value
    var lastColumn=[]
    for (var f=0;f<=input-2;f++){
        lastColumn[f]=window["Array0"][input-1]+1+f
        // f=window["Array0"][input-1]+1
        }
    // console.log(window["Array0"])
    // console.log([lastColumn])
    for (var f=1;f<=input-1;f++){
        window["Array"+f][input-1]=lastColumn[f-1];
    }
    for (var f=(input-1)-1;f>=0;f--){
        window["Array"+(input-1)][f]=window["Array"+(input-1)][f+1]+1
        }
    
    for (var x=0;x<input;x++){
        // if (!window["Array"+x][0]){
        //     window["Array"+(input-1)][f]+
        // }
    }

    for(var x=0;x<input;x++){
        console.log(window["Array"+(x)])
    }



    
    
    
}
console.log(spiralArrays(5))