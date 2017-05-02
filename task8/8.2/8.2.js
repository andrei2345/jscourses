var block = document.getElementById('block');

window.addEventListener('scroll', function() {
    
    if (window.pageYOffset >= 2000 && window.pageYOffset <= 7000) {
          block.classList.add('zona2');
          block.classList.remove('zona3')
       }
  
    if (window.pageYOffset>=7000){
     block.classList.add('zona3');
     block.classList.remove('zona2')

   	}

  	if (window.pageYOffset<=2000){
  	 	
  	 	block.classList.remove('zona2')

  	 }
 
   	

   })