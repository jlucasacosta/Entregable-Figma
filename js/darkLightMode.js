const btnDark = document.querySelector('#switchDark')
const btnLight = document.querySelector('#switchLight')

btnDark.onclick = function() { 
    document.body.className = 'dark__mode'
    btnDark.classList = "switch ball"
    btnLight.classList.remove('ball')
}

btnLight.onclick = function() { 
    document.body.classList.remove('dark__mode')
    btnLight.classList = "switch ball"
    btnDark.classList.remove('ball')
}

