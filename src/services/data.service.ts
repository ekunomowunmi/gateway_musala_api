import { Gateway } from "../models/gateway.interface";

export const gateways: Gateway[] = [
  {
    id: 1,
    serialNumber: "abcdefg",
    name: "gateway1",
    ipAddress: "192.168.0.1",
    devices: [
      {
        id: 123456789,
        uid: 111,
        vendor: "Adewunmi",
        dateCreated: "09/09/2022",
        status: "ONLINE",
        gatewayId: 1,
      },
      {
        id: 234567891,
        uid: 112,
        vendor: "Adetola",
        dateCreated: "08/09/2022",
        status: "ONLINE",
        gatewayId: 1,
      },
    ],
  },
  {
    id: 2,
    serialNumber: "hijklmn",
    name: "gateway2",
    ipAddress: "192.168.0.2",
    devices: [
      {
        id: 345678912,
        uid: 113,
        vendor: "Adegoke",
        dateCreated: "09/09/2022",
        status: "ONLINE",
        gatewayId: 2,
      },
      {
        id: 456789123,
        uid: 114,
        vendor: "Adegbenro",
        dateCreated: "08/05/2022",
        status: "ONLINE",
        gatewayId: 2,
      },
    ],
  },
];
