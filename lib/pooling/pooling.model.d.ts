import { Protocol } from "../protocol/protocol.model";
import { Network } from "../network/network.model";
import { FungibleToken } from "../token/fungibletoken.model";
import Big from "big.js";
export declare type PoolingMarket = {
    id: string;
    address: string;
    name: string;
    protocol: Protocol;
    network: Network;
    tokens: Array<FungibleToken>;
    apr: Big | null;
    marketSize: Big | null;
    prepareInvestmentSupported: boolean;
    marketType: string;
};
export declare type PoolingPosition = PoolingMarket & {
    amount: Big;
};
