const body = document.querySelector('body')

const menuEvent = (e) => {
    const menuM = document.querySelector('.menu-mobile')

    console.log(e.target.tagName)

    e.target.classList.contains('menu-m-btn')
    ?(
        menuM.classList.toggle('hidde'),
        e.target.classList.toggle('menu-m-icon-rollup'),
        e.target.classList.toggle('menu-m-icon-dropdown')
    ): e.target.tagName === 'A'
    ?(
        menuM.classList.toggle('hidde')
    ): console.log('no funciona la lista' + e.target.tagName)

    e.stopPropagation()
}
body.addEventListener('click', menuEvent, false)

const serviceImpar = () => {
    const servicesCard =  document.querySelectorAll('.service-card')
    const newArray = [...servicesCard]
    console.log(newArray)

    newArray.forEach((element, idx) => {
        const impar = idx % 2 !== 0
        const trues = impar[idx] !== true
        console.log(idx)

        !impar 
        ?(
            element.classList.add('straight')
        ):(
            element.classList.add('reverse')
        )
    })

}
serviceImpar()

// function iniciarVideo() {
//     const video = document.querySelector('.intro-video')
//     video.play()
// }
// iniciarVideo()