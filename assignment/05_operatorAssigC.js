var eligibility = function (gradScore, hscScore, sscScore, candidateName) {
  var result =
    gradScore >= 70 || hscScore >= 80 || sscScore >= 90
      ? ` Congrates ${candidateName}, You are eligible for TCS interview`
      : `${candidateName}, Unfortunately you are not eligible for TCS interview`;
  console.log(result);
  /*  if(result==true){
          console.log(`${candidateName}, You are eligible for TCS interview`);
      }
      else{
          console.log(`${candidateName}, Unfortunately you are not eligible for TCS interview`); 
      }*/
};
eligibility(80, 86, 90, "Sneha");
eligibility(70, 65, 55, "Arya");
eligibility(60, 79, 88, "Disha");
