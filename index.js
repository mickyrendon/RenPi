import { menuEvent } from './src/menu.js'
import { serviceImpar } from './src/services.js'

globalThis.addEventListener('load', async () => {
    const { deleteLoader } = await import('./src/preloader.js')
    return deleteLoader()
})


const body = document.querySelector('body')

body.addEventListener('click', menuEvent, false)
serviceImpar()

globalThis.addEventListener("scroll", async () => { 
    const { handleScrollAnimation } = await import('./src/scrollAnimation.js')
    return handleScrollAnimation()
})
