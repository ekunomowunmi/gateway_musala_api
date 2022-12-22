import { Device } from "../models/device.interface";
import { APIError, HttpStatusCode } from "../models/error";
import { gateways } from "./data.service";


export const createDevices = async (device:Device): Promise<void> => { 
    const id = new Date().getTime();
    const selectedGateway = gateways.filter(gateway => gateway.id == device.gatewayId)[0];
    if(selectedGateway && selectedGateway.devices.length > 10){
        throw new APIError(
            'BAD REQUEST',
            HttpStatusCode.BAD_REQUEST,
            true,
            'Cannot add more than 10 devices to a gateway'
          );
    }
    selectedGateway.devices.push(device) ; 
}
