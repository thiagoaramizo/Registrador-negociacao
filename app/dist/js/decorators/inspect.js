export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`-------Método ${propertyKey}`);
            console.log(`------------paramentros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map