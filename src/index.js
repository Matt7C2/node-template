// Import sistema
import dotenv from 'dotenv'; //necessaria per caricare le variabili di ambiente presenti in: 1) eventuale script di avvio; 2) 7file di configurazione ".env"

// Import internals
import {logger} from './utils/index.js';
import {wait} from './utils/libs.js'


// Import externals
// ...

dotenv.config()

const main = async () => {
    // info presenti nello script di avvio (visibili solo in windows con il "set" all'interno dello script di npm)
    logger.info(`pnpm run script -> ENV: ${process.env.ENV}`, { color: 'blue' })
    logger.warn(`pnpm run script -> ENV2: ${process.env.ENV2}`, { color: 'bgYellow.black' })

    // Variabili comuni nella config del package.json
    logger.info(`pnpm config -> VAR_A: ${process.env.npm_package_config_VAR_A}`);

    // Variabili presenti nel file .env
    logger.warn(`file env -> FILE_ENV_1: ${process.env.FILE_ENV_1}`)

    // Variabili presenti nel Dockerfile
    logger.error(`docker env -> ENV_DOCKER: ${process.env.ENV_DOCKER}`, )
    logger.error(`docker env -> TZ: ${process.env.TZ}`, { color: 'bgRed.white' })

    // Attende 1 secondo
    await wait(1); 

    logger.debug('Fine');
}

main();
