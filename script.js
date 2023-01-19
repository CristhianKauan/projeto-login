

function mostrar(x){
    

    switch(x){

    case 1:

    var framer=document.getElementById('framep')
    framer.classList.add('mostrar');
    break

    case 2:

    var framer=document.getElementById('framer')
    framer.classList.add('mostrar');
    break

    case 3:

    var framer=document.getElementById('framey')
    framer.classList.add('mostrar');
    break

    case 4:
    var framer=document.getElementById('framep')
    framer.classList.add('mostrar');
    
    var framer=document.getElementById('framer')
    framer.classList.add('mostrar');
    
    var framer=document.getElementById('framey')
    framer.classList.add('mostrar');
    }

}

function esconder(x){

    switch(x){
        case 1:
            var framer=document.getElementById('framep')
            framer.classList.remove('mostrar');
        break

        case 2:
            var framer=document.getElementById('framer')
            framer.classList.remove('mostrar');
        break
        
        case 3:
            var framer=document.getElementById('framey')
            framer.classList.remove('mostrar');
        break

        case 4:
            var framer=document.getElementById('framep')
            framer.classList.remove('mostrar');

            var framer=document.getElementById('framer')
            framer.classList.remove('mostrar');

            var framer=document.getElementById('framey')
            framer.classList.remove('mostrar');
        break
    }

}

