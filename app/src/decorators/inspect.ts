export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: any[]) {
            //Ações para o decorator
            console.log(`-------Método ${propertyKey}`)
            console.log(`------------paramentros: ${JSON.stringify(args)}`)
            //Padrão do decorator
            const retorno = metodoOriginal.apply(this, args)
            return retorno
        }
        return descriptor
    }
}