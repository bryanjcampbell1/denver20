"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ABIs = __importStar(require("./ABIs"));
var getAll = function (token, info) { return (__assign({ def: ABIs[token], base: token }, (typeof info === 'string' ? { all: info } : info))); };
exports.default = (function (tokens) {
    if (tokens === void 0) { tokens = {}; }
    return ({
        ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
        Owner: tokens.Owner || '0x0000000000000000000000000000000000000000',
        Governor: tokens.Governor || '0x0000000000000000000000000000000000000000',
        EscapeHatchManager: tokens.EscapeHatchManager || '0x0000000000000000000000000000000000000000',
        EscapeHatchTokenHolder: tokens.EscapeHatchTokenHolder || '0x0000000000000000000000000000000000000000',
        LST: getAll('ERC20', tokens.LST || '0x0000000000000000000000000000000000000000'),
        DAI: getAll('ERC20', tokens.DAI || '0x0000000000000000000000000000000000000000'),
        WETH: getAll('ERC20', tokens.WETH || '0x0000000000000000000000000000000000000000'),
        PriceFeed: getAll('PriceFeed', tokens.PriceFeed || '0x0000000000000000000000000000000000000000'),
        CurrencyDao: getAll('CurrencyDao', tokens.CurrencyDao || '0x0000000000000000000000000000000000000000'),
        InterestPoolDao: getAll('InterestPoolDao', tokens.InterestPoolDao || '0x0000000000000000000000000000000000000000'),
        UnderwriterPoolDao: getAll('UnderwriterPoolDao', tokens.UnderwriterPoolDao || '0x0000000000000000000000000000000000000000'),
        MarketDao: getAll('MarketDao', tokens.MarketDao || '0x0000000000000000000000000000000000000000'),
        ShieldPayoutDao: getAll('ShieldPayoutDao', tokens.ShieldPayoutDao || '0x0000000000000000000000000000000000000000'),
        PoolNameRegistry: getAll('PoolNameRegistry', tokens.PoolNameRegistry || '0x0000000000000000000000000000000000000000'),
        PositionRegistry: getAll('PositionRegistry', tokens.PositionRegistry || '0x0000000000000000000000000000000000000000'),
        CurrencyPool: getAll('CurrencyPool', tokens.CurrencyPool || '0x0000000000000000000000000000000000000000'),
        InterestPool: getAll('InterestPool', tokens.InterestPool || '0x0000000000000000000000000000000000000000'),
        UnderwriterPool: getAll('UnderwriterPool', tokens.UnderwriterPool || '0x0000000000000000000000000000000000000000'),
        ERC20PoolToken: getAll('ERC20PoolToken', tokens.ERC20PoolToken || '0x0000000000000000000000000000000000000000'),
        PriceOracle: getAll('PriceOracle', tokens.PriceOracle || '0x0000000000000000000000000000000000000000'),
        CollateralAuctionCurve: getAll('CollateralAuctionCurve', tokens.CollateralAuctionCurve || '0x0000000000000000000000000000000000000000'),
        MultiFungibleToken: getAll('MultiFungibleToken', tokens.MultiFungibleToken || '0x0000000000000000000000000000000000000000'),
        ProtocolDao: getAll('ProtocolDao', tokens.ProtocolDao || '0x0000000000000000000000000000000000000000'),
    });
});
//# sourceMappingURL=SupportTokens.js.map