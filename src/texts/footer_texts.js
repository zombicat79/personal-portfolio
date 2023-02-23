const currentYear = new Date().getFullYear();
console.log(currentYear)

const footerTexts = {
    rights: {
        cat: `Tots els drets reservats © - ${currentYear}`,
        esp: `Todos los derechos reservados © - ${currentYear}`,
        eng: `All rights reserved © - ${currentYear}`
    }
}

export default footerTexts;