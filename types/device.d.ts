import { TypedDispatcher } from "./dispatcher";
import { Bluetooth } from "./bluetooth";
import { BluetoothRemoteGATTServer } from "./server";
import { BluetoothRemoteGATTServiceEvents } from "./service";
/**
 * Events raised by the BluetoothDevice class
 */
export interface BluetoothDeviceEvents extends BluetoothRemoteGATTServiceEvents {
    /**
     * GATT server disconnected event
     */
    gattserverdisconnected: undefined;
    /**
     * Advertisement received event
     */
    advertisementreceived: undefined;
}
declare const BluetoothDevice_base: new () => TypedDispatcher<BluetoothDeviceEvents>;
/**
 * Bluetooth Device class
 */
export declare class BluetoothDevice extends BluetoothDevice_base {
    /**
     * The unique identifier of the device
     */
    readonly id: string;
    /**
     * The name of the device
     */
    readonly name: string;
    /**
     * The gatt server of the device
     */
    readonly gatt: BluetoothRemoteGATTServer;
    /**
     * Whether adverts are being watched (not implemented)
     */
    readonly watchingAdvertisements: boolean;
    /**
     * @hidden
     */
    readonly adData: {
        rssi?: number;
        txPower?: number;
        serviceData?: Map<string, DataView>;
        manufacturerData?: Map<string, DataView>;
    };
    /**
     * @hidden
     */
    readonly _bluetooth: Bluetooth;
    /**
     * @hidden
     */
    readonly _allowedServices: Array<string>;
    /**
     * @hidden
     */
    readonly _serviceUUIDs: Array<string>;
    /**
     * Device constructor
     * @param init A partial class to initialise values
     */
    constructor(init: Partial<BluetoothDevice>);
    /**
     * Starts watching adverts from this device (not implemented)
     */
    watchAdvertisements(): Promise<void>;
    /**
     * Stops watching adverts from this device (not implemented)
     */
    unwatchAdvertisements(): Promise<{}>;
}
export {};
