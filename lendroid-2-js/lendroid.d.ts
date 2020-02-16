import { Web3Utils, Contracts } from './services';
export declare class Lendroid {
    private params;
    private web3;
    private address;
    web3Utils: Web3Utils;
    contracts: Contracts;
    constructor(initParams?: any);
    enable(provider: any, type: any): Promise<void>;
    private init;
}
