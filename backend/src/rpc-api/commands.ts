module.exports = {
  addMultiSigAddress: 'addmultisigaddress',
  addNode: 'addnode', // bitcoind v0.8.0+ and btcd
  backupWallet: 'backupwallet',
  createMultiSig: 'createmultisig',
  createRawTransaction: 'createrawtransaction', // bitcoind v0.7.0+ and btcd
  decodeRawTransaction: 'decoderawtransaction', // bitcoind v0.7.0+ and btcd, used by common
  decodeScript: 'decodescript', // btcd
  dumpPrivKey: 'dumpprivkey',
  dumpWallet: 'dumpwallet', // bitcoind v0.9.0+
  encryptWallet: 'encryptwallet',
  estimateFee: 'estimatefee', // bitcoind v0.10.0x
  estimatePriority: 'estimatepriority', // bitcoind v0.10.0+
  estimateSmartFee: 'estimatesmartfee', // used by liquid
  generate: 'generate', // bitcoind v0.11.0+
  getAccount: 'getaccount',
  getAccountAddress: 'getaccountaddress',
  getAddedNodeInfo: 'getaddednodeinfo', // bitcoind v0.8.0+
  getAddressesByAccount: 'getaddressesbyaccount',
  getBalance: 'getbalance',
  getBestBlockHash: 'getbestblockhash', // bitcoind v0.9.0+ and btcd, used by common
  getBlock: 'getblock', // btcd, used by common
  getBlockStats: 'getblockstats', // btcd, used by common, need to be implemented in btcd, importort
  getBlockFilter: 'getblockfilter',
  getBlockchainInfo: 'getblockchaininfo', // bitcoind v0.9.2+ and btcd, used by common
  getBlockCount: 'getblockcount', // btcd, used by common
  getBlockHash: 'getblockhash', // btcd, used by common
  getBlockHeader: 'getblockheader', // btcd, used by common
  getBlockTemplate: 'getblocktemplate', // bitcoind v0.7.0+
  getChainTips: 'getchaintips', // bitcoind v0.10.0+ and btcd, used by common
  getChainTxStats: 'getchaintxstats',
  getConnectionCount: 'getconnectioncount',
  getDifficulty: 'getdifficulty', // btcd, used by common
  getGenerate: 'getgenerate',
  getInfo: 'getinfo',
  getMempoolAncestors: 'getmempoolancestors',  // no implementation in btcd, but only for /api/internal/bitcoin-core/get-mempool-ancestors
  getMempoolDescendants: 'getmempooldescendants',
  getMempoolEntry: 'getmempoolentry', // btcd, used by common, need to be implemented in btcd, importort
  getMempoolInfo: 'getmempoolinfo', // bitcoind v0.10+ and btcd, used by common
  getMiningInfo: 'getmininginfo',
  getNetTotals: 'getnettotals',
  getNetworkInfo: 'getnetworkinfo', // bitcoind v0.9.2+
  getNetworkHashPs: 'getnetworkhashps', // bitcoind v0.9.0+ and btcd, used by common
  getNewAddress: 'getnewaddress',
  getPeerInfo: 'getpeerinfo', // bitcoind v0.7.0+
  getRawChangeAddress: 'getrawchangeaddress', // bitcoin v0.9+
  getRawMemPool: 'getrawmempool', // bitcoind v0.7.0+ and btcd, used by common
  getRawTransaction: 'getrawtransaction', // bitcoind v0.7.0+ and btcd, used by common
  getReceivedByAccount: 'getreceivedbyaccount',
  getReceivedByAddress: 'getreceivedbyaddress',
  getTransaction: 'gettransaction',
  getTxOut: 'gettxout', // bitcoind v0.7.0+ and btcd used by common
  getTxOutProof: 'gettxoutproof', // bitcoind v0.11.0+
  getTxOutSetInfo: 'gettxoutsetinfo', // bitcoind v0.7.0+
  getUnconfirmedBalance: 'getunconfirmedbalance', // bitcoind v0.9.0+
  getWalletInfo: 'getwalletinfo', // bitcoind v0.9.2+
  help: 'help',
  importAddress: 'importaddress', // bitcoind v0.10.0+
  importPrivKey: 'importprivkey',
  importWallet: 'importwallet', // bitcoind v0.9.0+
  keypoolRefill: 'keypoolrefill',
  keyPoolRefill: 'keypoolrefill',
  listAccounts: 'listaccounts',
  listAddressGroupings: 'listaddressgroupings', // bitcoind v0.7.0+
  listLockUnspent: 'listlockunspent', // bitcoind v0.8.0+
  listReceivedByAccount: 'listreceivedbyaccount',
  listReceivedByAddress: 'listreceivedbyaddress',
  listSinceBlock: 'listsinceblock',
  listTransactions: 'listtransactions',
  listUnspent: 'listunspent', // bitcoind v0.7.0+
  lockUnspent: 'lockunspent', // bitcoind v0.8.0+
  move: 'move',
  ping: 'ping', // bitcoind v0.9.0+
  prioritiseTransaction: 'prioritisetransaction', // bitcoind v0.10.0+
  sendFrom: 'sendfrom',
  sendMany: 'sendmany',
  sendRawTransaction: 'sendrawtransaction', // bitcoind v0.7.0+ and btcd, used by common
  sendToAddress: 'sendtoaddress',
  setAccount: 'setaccount',
  setGenerate: 'setgenerate',
  setTxFee: 'settxfee',
  signMessage: 'signmessage',
  signRawTransaction: 'signrawtransaction', // bitcoind v0.7.0+
  stop: 'stop',
  submitBlock: 'submitblock', // bitcoind v0.7.0+
  validateAddress: 'validateaddress', // btcd, used by common
  verifyChain: 'verifychain', // bitcoind v0.9.0+
  verifyMessage: 'verifymessage',
  verifyTxOutProof: 'verifytxoutproof', // bitcoind v0.11.0+
  walletLock: 'walletlock',
  walletPassphrase: 'walletpassphrase',
  walletPassphraseChange: 'walletpassphrasechange',
  getTxoutSetinfo: 'gettxoutsetinfo', // btcd, used by common
  getIndexInfo: 'getindexinfo', // no implementation in btcd, checkAvailableCoreIndexes
  testMempoolAccept: 'testmempoolaccept', // btcd, used by common
};
