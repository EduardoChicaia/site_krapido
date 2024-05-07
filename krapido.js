function openModal (){
    const modal = document.getElementById('modal_container')
    modal.classList.add('active')


    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'close'){
            modal.classList.remove('active')
        }
    })
}