const { somar, dividir } = require("../../models/calculadora")

test("Verifica se 1+1 = 1", () => {
    const soma = somar(1, 1)
    expect(soma).toBe(2)
})

test("Verifica se 3+1 = 4", () => {
    const soma = somar(3, 1)
    expect(soma).toBe(4)
})

test("Verifica se 'banana' + 4 = erro", () =>{
    const soma = somar('banana', 4)
    expect(soma).toBe('erro')
})

test("Verifica se 9/3 = 3", () => {
    const divisao = dividir(9, 3)
    expect(divisao).toBe(3)
})

test("Verifica se 9/0 = 'erro'", () => {
    const divisao = dividir(9, 0)
    expect(divisao).toBe('erro')
})