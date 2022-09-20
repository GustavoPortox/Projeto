
    var checkboxes = document.querySelectorAll('.checkboxOk')
    var checkboxesNok = document.querySelectorAll('.checkboxNok')
    var count = 0;
    for(var i = 0; i < checkboxes.length; i++){
         checkboxes[i].addEventListener('click', function(){
            if(this.checked == true){
                count++;
            } else {
                count--;
            }
            var result = ((count * 100) / 12) 
            document.getElementById('number').innerHTML = result.toFixed(2) + '%';
            //var circulo = document.querySelector('circle')
            //var desenhaCirculo = getAttribute('stroke-dasharray')
            //document.getElementById('circle').innerHTML = result
         })
    }
    function stopDefAction(e){
      e.preventDefault()
    }
    if(checkboxes === true){
    document.getElementsByClassName('checkboxNok').addEventListener('click',
      stopDefAction, false
    )
  }