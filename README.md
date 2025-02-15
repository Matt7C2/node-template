# node_template
Template iniziale di un progetto Node.  
La sintassi è in ecma script moderno (type=module).  
Il linguaggio Node in abbinata al package manager PNPN permette di importare e gestire le librerie esterne.  
Viene usato PNPM anzichè il classico NPM perchè lo si ritiene migliore.  
[Sito ufficiale PNPM](https://pnpm.io/it/)

Installazione da winget:  
`winget install pnpm`

O tramite npm:  
`npm install -g pnpm`

## Enviroment
Per eseguire il progetto è necessario rinominare il file **.env.example** in **.env** perchè non viene versionato. Qui vengono caricate delle variabili di esempio.  
Il progetto è inoltre configurato per partire da debug, attraverso il file **launch.json**

`pnpm run prod`  
Esegue il progetto a runtime con la configurazione di produzione

`npm run debug`  
Per avviare il progetto in debug o premendo F5. Verranno caricate le variabili di debug.

## Creazione di un progetto da zero
`pnpm init nome_progetto`  
Per inizializzare il progetto. Verranno creati i relativi file di inizializzazione, tra cui **package.json**

`pnpm i nome_libreria`  
Per aggiungere una libreria pubblica o privata

`pnpm i`  
Per installare tutte le librerie utilizzate dal progetto.  
Verranno scaricarte tutte le librerie presenti in **package.json** nella voce **dependencies**