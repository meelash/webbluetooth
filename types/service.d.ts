import { TypedDispatcher } from "./dispatcher";
import { BluetoothDevice } from "./device";
import { BluetoothRemoteGATTCharacteristic, BluetoothRemoteGATTCharacteristicEvents } from "./characteristic";
/**
 * Events raised by the BluetoothRemoteGATTService class
 */
export interface BluetoothRemoteGATTServiceEvents extends BluetoothRemoteGATTCharacteristicEvents {
    /**
     * Service added event
     */
    serviceadded: undefined;
    /**
     * Service changed event
     */
    servicechanged: undefined;
    /**
     * Service removed event
     */
    serviceremoved: undefined;
}
declare const BluetoothRemoteGATTService_base: new () => TypedDispatcher<BluetoothRemoteGATTServiceEvents>;
/**
 * Bluetooth Remote GATT Service class
 */
export declare class BluetoothRemoteGATTService extends BluetoothRemoteGATTService_base {
    /**
     * The device the service is related to
     */
    readonly device: BluetoothDevice;
    /**
     * The unique identifier of the service
     */
    readonly uuid: string;
    /**
     * Whether the service is a primary one
     */
    readonly isPrimary: boolean;
    private handle;
    private services;
    private characteristics;
    /**
     * Service constructor
     * @param init A partial class to initialise values
     */
    constructor(init: Partial<BluetoothRemoteGATTService>);
    /**
     * Gets a single characteristic contained in the service
     * @param characteristic characteristic UUID
     * @returns Promise containing the characteristic
     */
    getCharacteristic(characteristic: string | number): Promise<BluetoothRemoteGATTCharacteristic>;
    /**
     * Gets a list of characteristics contained in the service
     * @param characteristic characteristic UUID
     * @returns Promise containing an array of characteristics
     */
    getCharacteristics(characteristic?: string | number): Promise<Array<BluetoothRemoteGATTCharacteristic>>;
    /**
     * Gets a single service included in the service
     * @param service service UUID
     * @returns Promise containing the service
     */
    getIncludedService(service: string | number): Promise<BluetoothRemoteGATTService>;
    /**
     * Gets a list of services included in the service
     * @param service service UUID
     * @returns Promise containing an array of services
     */
    getIncludedServices(service?: string | number): Promise<Array<BluetoothRemoteGATTService>>;
}
export {};
