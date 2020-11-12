window.addEventListener(`keydown`, startMove);

function startMove(event){
    if(event.key == `w` || event.key == `ArrowUp` || event.key == `s` || event.key == `ArrowDown` ||
        event.key == `a` || event.key == `ArrowLeft` || event.key == `d` || event.key == `ArrowRight`){
        let inputArray = [];
        let outputArray = [];
        let firstGameCheck = true;

        for(let i = 0; i < 16; i++){
            inputArray[i] = document.getElementsByClassName(`input${i}`)[0].innerHTML;

            if(inputArray[i] != ` `) firstGameCheck = false;
        }

        if(firstGameCheck){
            let randomNumber = Math.floor(Math.random() * 16);
            document.getElementsByClassName(`input${randomNumber}`)[0].innerHTML = `2`;
            document.getElementsByClassName(`input${randomNumber}`)[0].className = `input${randomNumber} two`;
        } else {
            let firstLine = [];
            let secondLine = [];
            let thirdLine = [];
            let fourthLine = [];

            if(event.key == `w` || event.key == `ArrowUp`){

                for(let i = 0; i < 4; i++){
                    firstLine[i] = inputArray[i*4];
                    secondLine[i] = inputArray[i*4+1];
                    thirdLine[i] = inputArray[i*4+2];
                    fourthLine[i] = inputArray[i*4+3];
                }

            } else if(event.key == `s` || event.key == `ArrowDown`){

                for(let i = 0; i < 4; i++){
                    firstLine[i] = inputArray[i+12-i*5];
                    secondLine[i] = inputArray[i+13-i*5];
                    thirdLine[i] = inputArray[i+14-i*5];
                    fourthLine[i] = inputArray[i+15-i*5];
                }
            
            } else if(event.key == `a` || event.key == `ArrowLeft`){
            
                for(let i = 0; i < 4; i++){
                    firstLine[i] = inputArray[i];
                    secondLine[i] = inputArray[i+4];
                    thirdLine[i] = inputArray[i+8];
                    fourthLine[i] = inputArray[i+12];
                }
           
            } else if(event.key == `d` || event.key == `ArrowRight`){
            
                for(let i = 0; i < 4; i++){
                    firstLine[i] = inputArray[i+3-i*2];
                    secondLine[i] = inputArray[i+7-i*2];
                    thirdLine[i] = inputArray[i+11-i*2];
                    fourthLine[i] = inputArray[i+15-i*2];
                }
            
            }

            let arrayWithSortedLines = [];
            arrayWithSortedLines[0] = firstLine;
            arrayWithSortedLines[1] = secondLine;
            arrayWithSortedLines[2] = thirdLine;
            arrayWithSortedLines[3] = fourthLine;
           
            for(let i = 0; i < 4; i++){
                let counter=0;
                for(let j = 0; j < 4; ){ //takes empty fields between cells with numbers
                    
                    if((arrayWithSortedLines[i][j+1] == ` `||arrayWithSortedLines[i][j+1] != ` `) && arrayWithSortedLines[i][j] == ` ` && (j+1) != 4){
                        arrayWithSortedLines[i][j] = arrayWithSortedLines[i][j+1];
                        arrayWithSortedLines[i].splice([j+1], 1);
                        arrayWithSortedLines[i].push(` `);
                        counter++;
                        if(counter == 3){
                            j++;
                            counter=0;
                        }                        
                    }else {
                        j++;
                    }
                }

                for(let j = 0; j < 4;){
                    if(arrayWithSortedLines[i][j+1] == ` ` || (j + 1) == 4){ //if the next cell is empty, then there are no more numbers in this line
                        break;
                    }

                    if(arrayWithSortedLines[i][j] == arrayWithSortedLines[i][j+1]){
                        arrayWithSortedLines[i][j] = (+arrayWithSortedLines[i][j] * 2) + ``;
                        arrayWithSortedLines[i].splice([j+1], 1);
                        arrayWithSortedLines[i].push(` `);
                        j++;
                    }else {
                        j++;
                    }

                }
            }

            if(event.key == `w` || event.key == `ArrowUp`){
                

                outputArray = [arrayWithSortedLines[0][0], arrayWithSortedLines[1][0], arrayWithSortedLines[2][0],arrayWithSortedLines[3][0],
                    arrayWithSortedLines[0][1], arrayWithSortedLines[1][1], arrayWithSortedLines[2][1], arrayWithSortedLines[3][1],
                    arrayWithSortedLines[0][2], arrayWithSortedLines[1][2], arrayWithSortedLines[2][2], arrayWithSortedLines[3][2], 
                    arrayWithSortedLines[0][3], arrayWithSortedLines[1][3], arrayWithSortedLines[2][3], arrayWithSortedLines[3][3]];
                
            } else if(event.key == `s` || event.key == `ArrowDown`){

                outputArray = [arrayWithSortedLines[0][3], arrayWithSortedLines[1][3], arrayWithSortedLines[2][3], arrayWithSortedLines[3][3], 
                    arrayWithSortedLines[0][2], arrayWithSortedLines[1][2], arrayWithSortedLines[2][2], arrayWithSortedLines[3][2], 
                    arrayWithSortedLines[0][1], arrayWithSortedLines[1][1], arrayWithSortedLines[2][1], arrayWithSortedLines[3][1], 
                    arrayWithSortedLines[0][0], arrayWithSortedLines[1][0], arrayWithSortedLines[2][0], arrayWithSortedLines[3][0]];

            } else if(event.key == `a` || event.key == `ArrowLeft`){
            
                outputArray = [arrayWithSortedLines[0][0], arrayWithSortedLines[0][1], arrayWithSortedLines[0][2], arrayWithSortedLines[0][3], 
                    arrayWithSortedLines[1][0], arrayWithSortedLines[1][1], arrayWithSortedLines[1][2], arrayWithSortedLines[1][3], 
                    arrayWithSortedLines[2][0], arrayWithSortedLines[2][1], arrayWithSortedLines[2][2], arrayWithSortedLines[2][3],
                    arrayWithSortedLines[3][0], arrayWithSortedLines[3][1], arrayWithSortedLines[3][2], arrayWithSortedLines[3][3]];
               
            } else if(event.key == `d` || event.key == `ArrowRight`){
             
                outputArray = [arrayWithSortedLines[0][3], arrayWithSortedLines[0][2], arrayWithSortedLines[0][1], arrayWithSortedLines[0][0], 
                    arrayWithSortedLines[1][3], arrayWithSortedLines[1][2], arrayWithSortedLines[1][1], arrayWithSortedLines[1][0], 
                    arrayWithSortedLines[2][3], arrayWithSortedLines[2][2], arrayWithSortedLines[2][1], arrayWithSortedLines[2][0], 
                    arrayWithSortedLines[3][3], arrayWithSortedLines[3][2], arrayWithSortedLines[3][1], arrayWithSortedLines[3][0]];

            }
            console.log(outputArray);

            for(let i = 0; i < 16; i++){
                document.getElementsByClassName(`input${i}`)[0].innerHTML = ` `;
                document.getElementsByClassName(`input${i}`)[0].className = `input${i}`;
                
                if(outputArray[i] != ` `){
                    switch (outputArray[i]){
                        case `2`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `2`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} two`;
                        break;

                        case `4`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `4`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} four`;
                        break;

                        case `8`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `8`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} eight`;
                        break;

                        case `16`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `16`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} sixteen`;
                        break;

                        case `32`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `32`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} thirtyTwo`;
                        break;

                        case `64`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `64`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} sixtyFour`;
                        break;

                        case `128`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `128`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} oneHundredTwentyEight`;
                        break;

                        case `256`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `256`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} twoHundredFiftySix`;
                        break;

                        case `512`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `512`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} fiveHundredTwelve`;
                        break;

                        case `1024`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `1024`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} oneThousandTwentyFour`;
                        break;

                        case `2048`:
                            document.getElementsByClassName(`input${i}`)[0].innerHTML = `2048`;
                            document.getElementsByClassName(`input${i}`)[0].className = `input${i} twoThousandFortyEight`;
                        break;
                    }
                }
            }
        }

        while(true){
            let randomNumber = Math.floor(Math.random() * 16);
            if(document.getElementsByClassName(`input${randomNumber}`)[0].innerHTML == ` `){
                document.getElementsByClassName(`input${randomNumber}`)[0].innerHTML = `2`;
                document.getElementsByClassName(`input${randomNumber}`)[0].className = `input${randomNumber} two`;
                break;
            }

        }
        
    
    }   
}