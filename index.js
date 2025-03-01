// Import sistema
import dotenv from 'dotenv'; //necessaria per caricare le variabili di ambiente presenti in: 1) eventuale script di avvio; 2) 7file di configurazione ".env"

// Import internals
import {logger} from './utils/index.js'

// Import externals
// ...

dotenv.config()

const main = () => {
    // info presenti nello script di avvio (visibili solo in windows con il "set" all'interno dello script di npm)
    logger.info(`pnpm run script -> ENV: ${process.env.ENV}`)
    logger.info(`pnpm run script -> ENV2: ${process.env.ENV2}`)

    // Variabili comuni nella config del package.json
    logger.info(`pnpm config -> VAR_A: ${process.env.npm_package_config_VAR_A}`);

    // Variabili presenti nel file .env
    logger.info(`file env -> FILE_ENV_1: ${process.env.FILE_ENV_1}`)

    // Variabili presenti nel Dockerfile
    logger.info(`docker env -> ENV_DOCKER: ${process.env.ENV_DOCKER}`)
    logger.info(`docker env -> TZ: ${process.env.TZ}`)
}


main();
