const uppercase = require('./exercicio-1')

it('Escreva um teste que verifique a chamada do callback de uma função uppercase', (done) => {
    const callback = (data) => {
        expect(data).toBe('ABCD');
        done()
    }
    uppercase('abcd', callback)
})

