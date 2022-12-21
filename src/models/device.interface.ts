import { Base } from "./base.interface";

export interface Device extends Base{
    uid: number;
    vendor: string;
    dateCreated: string;
    status: 'ONLINE' | 'OFFLINE';
    gatewayId?: number;
}
