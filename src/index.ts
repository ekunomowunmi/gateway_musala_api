import express, {Request, Response} from 'express'
import cors from "cors";
import bodyParser from 'body-parser';
import * as GatewayRoutes from './router/gateway.route'

const app = express();

app.get('/', async (req: Request, res: Response)=>{
    console.log('Hello world')
    res.send('Hello world')
})
app.get('/api/gateways',GatewayRoutes.getGateways);
app.get('/api/gateways/:id',GatewayRoutes.getGatewayById);
app.post('api/gateway',GatewayRoutes.createGateway);
app.post('api/gateway/:id',GatewayRoutes.updateGateway);
app.post('api/delete',GatewayRoutes.deleteGateway);


const port = 3000;

// app.use(bodyParser);
app.use(cors({
    origin:"http://localhost:4200",
    credentials: true
}));
// app.enableCors({
//     exposedHeaders: ['Content-Disposition', 'Content-Type'],
//     origin: configService.getString('FRONTEND_URL'),
//     credentials: true,
// });
app.use(express.json());

// app.all('/*', function(req:any, res:any, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     next();
// } )

let allowCrossDomain = function(req:any, res:any, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next();
}


app.use(allowCrossDomain);
app.listen(port, (): void=>{
console.log(`App is listening at http://localhost:${port}`)
})