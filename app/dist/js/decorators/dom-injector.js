export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype ${target.constructor.name} com getter para a propriedade ${propertyKey}.`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log(`Buscando elemento ${seletor} para ${propertyKey}.`);
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map