export function domInjector( seletor: string ){
    return function( target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name} com getter para a propriedade ${propertyKey}.`)
        let elemento: HTMLElement
        
        const getter = function() {
            if (!elemento){
                console.log(`Buscando elemento ${seletor} para ${propertyKey}.`)
                elemento = <HTMLElement>document.querySelector(seletor)
            }
            return elemento
        }

        Object.defineProperty( 
            target, 
            propertyKey, 
            { get: getter}
        )

    } 
}