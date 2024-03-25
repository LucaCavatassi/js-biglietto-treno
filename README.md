# Richiesta

> Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 

>Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
> - il prezzo del biglietto è definito in base ai km (0.21 € al km) 
> - va applicato uno sconto del 20% per i minorenni 
> - va applicato uno sconto del 40% per gli over 65.

>L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Sviluppo

**INPUT**
Quanti km deve percorrere?
Quanti anni ha?

**LOGICA**
Prezzo del biglietto = KM*0.21
*Se l'età è minore di 20 anni, allora*
Prezzo del biglietto = prezzo - 20% (*0.20)
*Se l'età è maggiore di 65 anni, allora*
Prezzo del biglietto = prezzo - 40% (*0.40)
*Se l'età è maggiore di 20 anni ma minore di 65 allora*
Prezzo del biglietto = prezzo del biglietto

**OUTPUT**
Prezzo con massimo due decimali al prezzo

