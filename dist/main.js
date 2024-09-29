"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const os_1 = require("os");
const cluster = require('cluster');
async function bootstrap() {
<<<<<<< HEAD
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    await app.listen(3000);
=======
    const isPrimary = cluster.isPrimary || cluster.isMaster;
    if (isPrimary) {
        const numCPUs = (0, os_1.cpus)().length;
        console.log(`Master process started. Forking ${numCPUs} workers...`);
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
            cluster.fork();
        });
    }
    else {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        await app.listen(3000);
    }
>>>>>>> 25ce378073dd4a793fda957104c68383301a7dc2
}
bootstrap();
//# sourceMappingURL=main.js.map
