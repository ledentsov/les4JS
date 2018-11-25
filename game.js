function bogtyr(){
    let levels = [
        {
            '1':{
                lvlText: 'На лево пойдешь-коня потеряешь, на право пойдешь жизни потеряешь, прямо пойдешь-жену найдешь',
                answers:{
                    '1': ' Пойти налево',
                    '2': ' Пойти на право',
                    '3': ' Пойти прямо'
                }
            }
        },
        {
            '1':{
                lvlText: 'вы встретили соловья разбойника',
                answers:{
                    '1': ' сразиться с ним',
                    '2': ' попробовать обойти'
                }
            },
            '2':{
                lvlText: 'вы встретили змея горыныча',
                answers:{
                    '1': ' Украсть сокровиша',
                    '2': ' сразиться с ним'
                }
            },
            '3':{
                lvlText: 'вы встретили Варвару-крассавицу',
                answers:{
                    '1': ' Жениться на ней'
                }
                    
            }
        }
    ];

    let endOfTheGame=false;
    let currentStage=0;
    let userChoise='1';

    while(!endOfTheGame){
        console.log(levels);
        if (currentStage >= 0 && currentStage < levels.length){
            let choises='';
            for(let answer in levels[currentStage][userChoise].answers){
                choises+=answer+levels[currentStage][userChoise].answers[answer]+ '\n';
            }
        userChoise = prompt(levels[currentStage][userChoise].lvlText + '\n' + choises);    
        currentStage++;
        }else{
            if (userChoise == '1'){ 
                alert('И жили вы долго и счастливо!');
                endOfTheGame = true;
            }
                else{
                    alert("Вы умерли");
                    endOfTheGame = true;
                }
            
        }
    }
}
function numbers(){
    
}