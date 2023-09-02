import CATEGORIAS from "../data/CATEGORIAS"

export const pedirCategorias = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORIAS)
        }, 100)
    })
}