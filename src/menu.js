export const menuEvent = (e) => {
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