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
    // console.log(newArray)

    newArray.forEach((element, idx) => {
        const impar = idx % 2 !== 0
        const trues = impar[idx] !== true
        // console.log(idx)

        !impar 
        ?(
            element.classList.add('straight')
        ):(
            element.classList.add('reverse')
        )
    })

}
serviceImpar()


// onload
// globalThis.addEventListener('load', () => preloader())



// function iniciarVideo() {
//     const video = document.querySelector('.intro-video')
//     video.play()
// }
// iniciarVideo()



// preloader
// const preloader = () => {
//     const preloader =  document.querySelector('.preloader')
    
//     setTimeout(() => {
//         body.classList.toggle('overflow-none')
//         preloader.classList.remove('grid')
//         preloader.classList.add('hidde')

//     }, 3000)
// }
const deleteLoader = () => {
    // const body = document.body
    const loaderCtr = document.querySelector('.preloader')
    
    if(loaderCtr.childElementCount > 0){
        body.classList.toggle('overflow-none')

        // body.classList.remove('ov-hidden')
        // body.classList.add('overflow-auto')

        loaderCtr.classList.add('animate__fadeOut')
        
        

        setTimeout(() => {
            loaderCtr.classList.remove('w-screen', 'h-screen', 'fixed', 'top-0', 'z-30', 'grid', 'place-items-center', 'bkg-main-black', 'ov-hidden', 'animate__fadeIn')
            loaderCtr.classList.add('hidde')
        }, 300)


        const arr =  [...loaderCtr.childNodes]
        
        arr.forEach(element => {
            return element.remove()
        })
    }
}

globalThis.addEventListener('load', () => {
    // const { deleteLoader } = await import('../js/preload/onload.js')
    return deleteLoader()
})