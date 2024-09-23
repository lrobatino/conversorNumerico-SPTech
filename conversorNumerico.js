function converter(){
    if (tipoConverterDe.textContent == 'Decimal'){
        var deDecimal = Number(inpConverter.value)
        let paraOctal = deDecimal.toString(8)
        let paraHexadecimal = deDecimal.toString(16)
        let paraBinaria = deDecimal.toString(2)

        if (tipoConverterPara.textContent == 'Decimal'){
            inpConvertido.placeholder = deDecimal
        } else if (tipoConverterPara.textContent == 'Octal'){
            inpConvertido.placeholder = paraOctal
        } else if (tipoConverterPara.textContent == 'Hexadecimal'){
            inpConvertido.placeholder = paraHexadecimal
        } else {
            inpConvertido.placeholder = paraBinaria
        }
    }

    if (tipoConverterDe.textContent == 'Octal'){
        var deOctal = Number(inpConverter.value)
        let paraDecimal = parseInt(deOctal, 8)
        let paraHexadecimal = paraDecimal.toString(16)
        let paraBinaria = paraDecimal.toString(2)

        if (tipoConverterPara.textContent == 'Octal'){
            inpConvertido.placeholder = deOctal
        } else if (tipoConverterPara.textContent == 'Decimal'){
            inpConvertido.placeholder = paraDecimal
        } else if (tipoConverterPara.textContent == 'Hexadecimal'){
            inpConvertido.placeholder = paraHexadecimal
        } else {
            inpConvertido.placeholder = paraBinaria
        }
    }

    if (tipoConverterDe.textContent == 'Hexadecimal'){
        var deHexadecimal = Number(inpConverter.value)
        let paraDecimal = parseInt(deHexadecimal, 16)
        let paraOctal = paraDecimal.toString(8)
        let paraBinaria = paraDecimal.toString(2)

        if (tipoConverterPara.textContent == 'Hexadecimal'){
            inpConvertido.placeholder = deHexadecimal
        } else if (tipoConverterPara.textContent == 'Decimal'){
            inpConvertido.placeholder = paraDecimal
        } else if (tipoConverterPara.textContent == 'Octal'){
            inpConvertido.placeholder = paraOctal
        } else {
            inpConvertido.placeholder = paraBinaria
        }
    }

    if (tipoConverterDe.textContent == 'Binaria'){
        var deBinaria = Number(inpConverter.value)
        let paraDecimal = parseInt(deBinaria, 2)
        let paraOctal = paraDecimal.toString(8)
        let paraHexadecimal = paraDecimal.toString(16)

        if (tipoConverterPara.textContent == 'Binaria'){
            inpConvertido.placeholder = deBinaria
        } else if (tipoConverterPara.textContent == 'Decimal'){
            inpConvertido.placeholder = paraDecimal
        } else if (tipoConverterPara.textContent == 'Octal'){
            inpConvertido.placeholder = paraOctal
        } else {
            inpConvertido.placeholder = paraHexadecimal
        }
    }
}

function trocarEsquerdaDe(){
    const tipoConverterDe = document.getElementById("tipoConverterDe")

    if (tipoConverterDe.textContent == 'Decimal'){
        tipoConverterDe.textContent = 'Binaria'
    } else if (tipoConverterDe.textContent == 'Binaria'){
        tipoConverterDe.textContent = 'Hexadecimal'
    } else if (tipoConverterDe.textContent == 'Hexadecimal'){
        tipoConverterDe.textContent = 'Octal'
    } else {
        tipoConverterDe.textContent = 'Decimal'
    }

}
function trocarDireitaDe(){
    const tipoConverterDe = document.getElementById("tipoConverterDe")

    if (tipoConverterDe.textContent == 'Decimal'){
        tipoConverterDe.textContent = 'Octal'
    } else if (tipoConverterDe.textContent == 'Octal'){
        tipoConverterDe.textContent = 'Hexadecimal'
    } else if (tipoConverterDe.textContent == 'Hexadecimal'){
        tipoConverterDe.textContent = 'Binaria'
    } else {
        tipoConverterDe.textContent = 'Decimal'
    }
}

function trocarEsquerdaPara(){
    const tipoConverterPara = document.getElementById("tipoConverterPara")

    if (tipoConverterPara.textContent == 'Decimal'){
        tipoConverterPara.textContent = 'Binaria'
    } else if (tipoConverterPara.textContent == 'Binaria'){
        tipoConverterPara.textContent = 'Hexadecimal'
    } else if (tipoConverterPara.textContent == 'Hexadecimal'){
        tipoConverterPara.textContent = 'Octal'
    } else {
        tipoConverterPara.textContent = 'Decimal'
    }

}
function trocarDireitaPara(){
    const tipoConverterPara = document.getElementById("tipoConverterPara")

    if (tipoConverterPara.textContent == 'Decimal'){
        tipoConverterPara.textContent = 'Octal'
    } else if (tipoConverterPara.textContent == 'Octal'){
        tipoConverterPara.textContent = 'Hexadecimal'
    } else if (tipoConverterPara.textContent == 'Hexadecimal'){
        tipoConverterPara.textContent = 'Binaria'
    } else {
        tipoConverterPara.textContent = 'Decimal'
    }
}