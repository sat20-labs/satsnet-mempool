export interface AssetName {
  Protocol: string
  Type:     string
  Ticker:   string
}

export interface DisplayAsset {
  Name: AssetName
  Amount: string;
  BindingSat: number;
}

export interface Vout {
  value: number;                   //  (numeric) The value in BTC
  n: number;                       //  (numeric) index
  asset?: string;                  //  (string) Elements asset id
  scriptPubKey: {                  //  (json object)
    asm: string;                   //  (string) the asm
    hex: string;                   //  (string) the hex
    reqSigs?: number;              //  (numeric) The required sigs
    type: string;                  //  (string) The type, eg 'pubkeyhash'
    address?: string;              //  (string) bitcoin address
    addresses?: string[];           //  (string) bitcoin addresses
    pegout_chain?: string;         //  (string) Elements peg-out chain
    pegout_address?: string;       //  (string) Elements peg-out address
    pegout_addresses?: string[];   //  (string) Elements peg-out addresses
  };
  Assets?: DisplayAsset[];
}

export interface AnchorInfo {
  utxo: string;          // the utxo with locked in lnd
  witnessScript: string; // WitnessScript for locked in lnd
  value: number;         // the amount with locked in lnd
  txAssets: DisplayAsset[];    // The assets locked
  sig: string;
}

export interface AscendInfo extends AnchorInfo {
  address: string;
  pubKeyA: string;  // server node
  pubKeyB: string;  // client node
}

