import  * as DeviceService  from '../services/device.service';
import { Request, Response } from "express";
import { Device } from "../models/device.interface";
import { Gateway } from "../models/gateway.interface";
import  * as GatewayService  from "../services/gateway.service";


export const getGateways = async (req:any, res:any) => {
    const gatewayList: Gateway[] = await GatewayService.getAllGateways();
    console.log(`in get ${JSON.stringify(gatewayList)}`)
    try {
        res.status(200).send(
            gatewayList);
      } catch (e: any) {
        res.status(404).send(e.message);
      }
  };

  export const createGateway = async (req:any, res:any) => {
    const gateway: Gateway = req.body;
    await GatewayService.createGateways(gateway);
    try {
        res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: ""
        });
      } catch (e: any) {
        res.status(404).send(e.message);
      }
  };

  export const createDevices = async (req:any, res:any) => {
    const device: Device = req.body;
    await DeviceService.createDevices(device);
    try {
        res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: ""
        });
      } catch (e: any) {
        res.status(404).send(e.message);
      }
  };


export const getGatewayById = async (req: Request, res: Response) => {
    const gateway: Gateway = await GatewayService.getGatewayById(req.params.id);
    console.log(`in get ${JSON.stringify(gateway)}`)
    try {
        res.status(200).send(
            gateway);
      } catch (e: any) {
        res.status(404).send(e.message);
      }
}

export const updateGateway = async(req: Request, res:Response) => {
    const gateway = req?.body;
    await GatewayService.updateGateways(gateway);
    try {
        res.status(200).send({
            message: "Successfully updated",
             IsSuccess: true,
             result: ""
        });
      } catch (e:any) {
        res.status(404).send(e.message);
      }

}

  export const deleteGateway = async (req:any, res:any) => {
    const gatewayId: number = req.body['id'];
    await GatewayService.deleteGateways(gatewayId);
    try {
        res.status(200).send({
            message: "Successfully deleted",
             IsSuccess: true,
             result: ""
        });
      } catch (e: any) {
        res.status(404).send(e.message);
      }
  };