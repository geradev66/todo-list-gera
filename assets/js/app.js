document.addEventListener('DOMContentLoaded', function(){
const campo = document.querySelector('#campoTarea');
const boton = document.querySelector('#botonTarea');
const mostrar = document.querySelector('.tareas')




    boton.addEventListener('click', function(e){
        e.preventDefault()
        agregarTarea()

    })
        
    mostrar.addEventListener('click',function(e){
        cambiarSucces(e)
    })

    function agregarTarea(){
        const textoTarea = campo.value.trim()
        if(textoTarea !== ''){
            mostrar.innerHTML += `
            <div class="tareas mt-4">
                    <div class="alert alert-primary d-flex justify-content-between" id="successTarea" role="alert">
                        <span>${textoTarea}</span>
                            <span>
                                <button id= "tarea-finalizada" type="button" class="btn btn-success"><i class="fa-solid fa-check"></i> terminada</button>
                                <button id="borrarTarea" type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Eliminar</button>
                            </span>
                    </div>
            </div>
            `
            
        }

        campo.value=''
    }


    function cambiarSucces(e){
        /*Uso de e.target: e.target se refiere al elemento específico que fue clicado. Con e.target.matches('.btn-success'), se verifica si el elemento clicado es un botón con la clase btn-success. */
        if(e.target && e.target.matches('.btn-success')){ 
            /*Uso de closest: e.target.closest('.alert') encuentra el contenedor de alerta más cercano al botón clicado. Esto asegura que la clase alert-success se aplique al contenedor correcto de la tarea. */
            let tarea = e.target.closest('.alert')
            if(tarea){
                tarea.classList.add('alert-success')
                tarea.classList.remove('alert-primary')

            }
        }

        if (e.target && e.target.matches('.btn-danger')) {
            eliminarTarea(e.target);
        }

    }

    function eliminarTarea(boton){
        let tarea = boton.closest('.tareas')
            if(tarea){
                tarea.remove()
            }
    }

})