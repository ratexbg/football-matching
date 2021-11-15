import './App.css';
import Player from './Components/Player';
import Field from './Components/Field';


const Rating = () => {
    
   var win = true;

   
//     var rating1 = 1000;
//     var rating2 = 1300;
//     var rating3 = 1900;
//     var rating4 = 1300;
//     var rating5 = 1900;

//     var rating6 = 1010;
//     var rating7 = 1200;
//     var rating8 = 2100;
//     var rating9 = 2300;
//     var rating10 = 1800;

    // var arr_rate_team1 = [person1.rate]; 
    // var arr_rate_team2 = [rating6,rating7,rating8,rating9,rating10]; 


    var sum = arr_rate_team1.reduce((a, b) => a + b, 0) + arr_rate_team2.reduce((a, b) => a + b, 0) ;
  
    var avr = sum/ (arr_rate_team1.length + arr_rate_team2.length)

    

console.log(avr);

function Adjust_elo(avr) {
    if (rating1<=avr && win === true) {
    rating1 = rating1+ 25;
        
    }  
    
}

Adjust_elo();
    
return 0;     


}

export default Rating