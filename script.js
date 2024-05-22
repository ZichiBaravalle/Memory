let figureMemory = [], inizio = false, cont = 0, numeroPrecedente, posizionePrecedente
let nCoppieTrovate = 0
function inizia() {
    if (!inizio){
        let main = document.querySelector("main")
        let span

        for (let i = 0; i < main.children.length - 1; i++) {
            span = main.children[i]
            for (let j = 0; j < span.children.length; j++) {
                span.children[j].innerText = "?"
            }
        }

        let nCoppie = (main.children.length - 1) * (span.children.length) / 2
        let posOccupate = []
        let n

        for (let i = 0; i < nCoppie * 2; i++)
            figureMemory.push(0)

        for (let i = 0; i < nCoppie; i++) {
            do {
                n = Math.round(Math.random() * 11)
            } while (posOccupate.includes(n))
            posOccupate.push(n)
            figureMemory[n] = i + 1
        }

        for (let i = 0; i < nCoppie; i++) {
            do {
                n = Math.round(Math.random() * 11)
            } while (posOccupate.includes(n))
            posOccupate.push(n)
            figureMemory[n] = i + 1
        }

        inizio = true
        console.table(figureMemory)
    }
}

function verifica(oggetto) {
    if (inizio && oggetto.innerText === "?"){
        if (cont === 0){
            oggetto.innerText = figureMemory[parseInt(oggetto.id)]
            numeroPrecedente = figureMemory[parseInt(oggetto.id)]
            posizionePrecedente = oggetto.id
            cont++
        }
        else if (numeroPrecedente === figureMemory[parseInt(oggetto.id)]){
            oggetto.innerText = figureMemory[parseInt(oggetto.id)]
            cont = 0
            nCoppieTrovate++
        }
        else{
            cont = 0
            oggetto.innerText = figureMemory[parseInt(oggetto.id)]
            setTimeout(function () {
                let meoryPrecedente = document.getElementById(posizionePrecedente)
                meoryPrecedente.innerText = "?"
                oggetto.innerText = "?"
            }, 1000)
        }
    }

    if (nCoppieTrovate === 6)
        alert("Hai trovato tutte le coppie. Hai vinto!!!")
}

