'use strict';

const countFive = () => {
  let i;
  
  function doSetTimeout(i) {
    setTimeout(() => {
        
      console.log('Wait one sec...', i);
    }, i * 1000); 
  }
  
  for(i = 1; i <= 5; i++){
    doSetTimeout(i);
  }

};

countFive();
