export const serviceImpar = () => {
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