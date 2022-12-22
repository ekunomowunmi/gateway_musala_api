import { Gateway } from "../models/gateway.interface";
import { gateways } from "./data.service";

export const getAllGateways = async (): Promise<Gateway[]> => {
return gateways;
}

export const getGatewayById = async (id: any): Promise<any> => {
    const selectedGateway = gateways.filter(gateway => gateway.id == id);
    return selectedGateway.length > 0 ? selectedGateway[0]: null;
    }


export const createGateways = async (gateway:Gateway): Promise<void> => { 
    const id = new Date().getTime();
    gateway.id = id;
    gateways.push(gateway);  
}

export const updateGateways = async (gateway:Gateway): Promise<void> => { 
    let index = gateways.findIndex(d => d.id === gateway['id']);
    if(index >0 || index==0)
   {
    gateways[index]['serialNumber'] = gateway['serialNumber'];
    gateways[index]['name'] = gateway['name'];
    gateways[index]['ipAddress'] = gateway['ipAddress'];
    gateways[index]['devices'] = gateway['devices'];
   } else {
    createGateways(gateway);
   }
}


export const deleteGateways = async (id:number): Promise<void> => { 
    let index = gateways.findIndex(d => d.id === id);
    console.log(`in delete product index is ${index}`)
    if(index >0 || index==0)
    gateways.splice(index, 1);
}