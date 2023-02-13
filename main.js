const localStorageKey = 'to-do-list-vn'

function newTask ()
{
    let input = document.getElementById('input-new-task')

    //validation
    if(!input.value)
    {
        alert('Digite algo para inserir em sua lista')
    }
    //else if ()

    //increment to localStorage
    else {
        //puxando o testo do localStorage
        let values = JSON.parse(localStorage.getItem('localStorageKey') || "[]")
        //Capurando os valores do input
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
    
    }
}
