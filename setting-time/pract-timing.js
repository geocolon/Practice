'use strict';

const countFive = () => {
  let i;
    
  function doSetTimeout(i) {
    setTimeout(() => {
      console.log('Wait one sec...', i);
    }, 5000); 
  }
    
  for(i = 1; i <= 5; i++){
    doSetTimeout(i);
  }
  
};
  
countFive();
  