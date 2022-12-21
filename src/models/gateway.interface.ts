import { Base } from "./base.interface";
import { Device } from "./device.interface";

export interface Gateway extends Base{
    serialNumber: string;
    name: string;
    ipAddress: string;
    devices: Device[];
   
}