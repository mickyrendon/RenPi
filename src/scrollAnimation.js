const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  )
}

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
}

export const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    elementInView(el, 1.25)?
    displayScrollElement(el): null
    
    // code to scroll up animation
    // else if (elementOutofView(el)) {
      //   hideScrollElement(el)
      // }
  })
}
  


  // code to scroll up animation
  // const elementOutofView = (el) => {
  //   const elementTop = el.getBoundingClientRect().top;
  
  //   return (
  //     elementTop > (window.innerHeight || document.documentElement.clientHeight)
  //   )
  // }

  // const hideScrollElement = (element) => {
  //   element.classList.remove("scrolled")
  // }