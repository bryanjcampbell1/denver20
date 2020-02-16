export declare class Contracts {
    private network;
    private address;
    private web3Utils;
    private onEvent;
    private balanceTimer;
    private fetchTokens;
    private balanceTokens;
    private lsfuiTokens;
    private lsfuiTokenMap;
    private poolNames;
    private poolNameMap;
    private riskFreePools;
    private riskFreePoolMap;
    private riskyPools;
    private riskyPoolMap;
    private positions;
    private positionMap;
    expiries: any;
    contracts: any;
    supportTokens: any;
    constructor(params: any);
    onNetworkChange(network: any, address: any): void;
    onUpdateAddress(address: any): void;
    getBalances(withContract?: boolean): Promise<void>;
    getPoolNames(): Promise<void>;
    getRiskFreePools(): Promise<void>;
    getRiskyPools(): Promise<void>;
    getPositions(): Promise<void>;
    onWrap(token: any, amount: any): any;
    onUnwrap(token: any, amount: any): any;
    onSplit(token: any, form: any): any;
    onFuse(token: any, form: any): any;
    onRegisterLookUpStake(poolNameLength: any): Promise<unknown>;
    onRegisterPoolName(poolName: any): any;
    onCreatePool(form: any): any;
    onOfferNewToken(poolId: any, form: any): any;
    onWithdrawEarnings(poolId: any, riskFree: any): any;
    onClosePool(poolId: any, riskFree: any): any;
    onChangePrice(poolId: any, value: any, { riskFree, type, marketInfo }: {
        riskFree: any;
        type?: string | undefined;
        marketInfo: any;
    }): any;
    onIncreaseCapacity(poolId: any, value: any, { riskFree, type, marketInfo }: {
        riskFree: any;
        type?: string | undefined;
        marketInfo: any;
    }): any;
    onDecreaseCapacity(poolId: any, value: any, { riskFree, type, marketInfo }: {
        riskFree: any;
        type?: string | undefined;
        marketInfo: any;
    }): any;
    onRetireToken(poolId: any, { riskFree, marketInfo }: {
        riskFree: any;
        marketInfo: any;
    }): any;
    onContribute(poolId: any, value: any, { riskFree }: {
        riskFree: any;
    }): any;
    onWithdrawContribute(poolId: any, value: any, { riskFree }: {
        riskFree: any;
    }): any;
    onPurchase(poolId: any, type: any, param: any): Promise<any>;
    onAvailLoan(form: any): any;
    onRepay(positionId: number, amount: number): any;
    onWithdrawCollateral(positionId: number): any;
    onTransfer(form: any): Promise<any>;
    private init;
    private initTokens;
    private getTokenByAddr;
    private networkChanged;
    private addressChanged;
    private fetchBalanceStart;
    private fetchBalances;
    private fetchETHBalance;
    private fetchBalanceByToken;
    private fetchContracts;
    private fetchContractByToken;
    private fetchPoolNames;
    private fetchRiskFreePools;
    private fetchRiskyPools;
    private fetchPositions;
    private getMFTProperties;
    private initializeLSFUITokens;
    private initializeProtocol;
}
