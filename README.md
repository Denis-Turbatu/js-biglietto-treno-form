```
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: 
- Usando esclusivamente due input e un bottone (non stilizzati), 
- Realizziamo le specifiche scritte sopra. 
- La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale.
Il recap dei dati e l'output del prezzo finale, andranno stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

```

# SOLUZIONE

### Raccolta dati

- [X] Chiediamo all'utente i kilometri da percorrere
- [X] Chiediamo all'utente l'età
- [X] Imposto nelle variabili gli oggetti html
### Esecuzione logica

- [X] Creo un sensore di eventi e scivo il codice all'interno per il calcolo del eventuale sconto
- [X] Se (l'utente ha età >= 65){
        calcolare sconto da applicare all'utente
        fare calcolo finale prezzo del biglietto
        stampa prezzo biglietto 
    }Altrimenti se (l'utente ha età < 18){
        calcolare sconto da applicare all'utente
        fare calcolo finale prezzo del biglietto
        stampa prezzo biglietto 
    }Altrimenti{
        stampa prezzo biglietto
    } 

### Output

- [X] Creo codice per stampa caratteristiche biglietto
