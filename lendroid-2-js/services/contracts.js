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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
var _1 = require("./");
var monthNames = [
    ['F', 'Jan'],
    ['G', 'Feb'],
    ['H', 'Mar'],
    ['J', 'Apr'],
    ['K', 'May'],
    ['M', 'Jun'],
    ['N', 'Jul'],
    ['Q', 'Aug'],
    ['U', 'Sep'],
    ['V', 'Oct'],
    ['X', 'Nov'],
    ['Z', 'Dec'],
];
var lastWeekdayOfEachMonths = function (years, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.weekday, weekday = _c === void 0 ? 4 : _c, _d = _b.from, from = _d === void 0 ? 0 : _d;
    var now = Math.round(Date.now() / 1000);
    var lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var weekdays = [];
    weekdays.match = {};
    for (var _i = 0, years_1 = years; _i < years_1.length; _i++) {
        var year = years_1[_i];
        var date = new Date(Date.UTC(year, 0, 1, 12));
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            lastDay[2] = 29;
        }
        for (var m = from; m < from + 12; m += 1) {
            var month = m % 12;
            var y = year + Math.floor(month / 12);
            var ySuf = y.toString().substr(-2);
            date.setFullYear(y, month % 12, lastDay[month % 12]);
            date.setDate(date.getDate() - ((date.getDay() + (7 - weekday)) % 7));
            var name_1 = monthNames[month][0] + ySuf;
            var timestamp = Math.round(date.getTime() / 1000);
            var data = {
                name: name_1,
                timestamp: timestamp,
                fullName: monthNames[month][1] + " " + y,
                date: date.toISOString().substring(0, 10),
            };
            if (now < data.timestamp) {
                weekdays.push(data);
                weekdays.match[name_1] = timestamp;
                weekdays.match[timestamp] = name_1;
            }
        }
    }
    var manuals = [];
    manuals.forEach(function (_a) {
        var dd = _a[0], name = _a[1];
        var _b = dd.split('-').map(function (a) { return Number(a); }), year = _b[0], m = _b[1], d = _b[2];
        var date = new Date(Date.UTC(year, m - 1, d, 12));
        var timestamp = Math.round(date.getTime() / 1000);
        var data = {
            name: name,
            timestamp: timestamp,
            fullName: monthNames[m - 1][1] + " " + year,
            date: date.toISOString().substring(0, 10),
        };
        if (now < data.timestamp) {
            weekdays.push(data);
            weekdays.match[name] = timestamp;
            weekdays.match[timestamp] = name;
        }
    });
    return weekdays;
};
var Contracts = (function () {
    function Contracts(params) {
        this.fetchTokens = [];
        this.balanceTokens = [];
        this.lsfuiTokens = [];
        this.lsfuiTokenMap = {};
        this.poolNames = [];
        this.poolNameMap = {};
        this.riskFreePools = [];
        this.riskFreePoolMap = {};
        this.riskyPools = [];
        this.riskyPoolMap = {};
        this.positions = [];
        this.positionMap = {};
        this.contracts = {};
        this.supportTokens = {};
        this.expiries = lastWeekdayOfEachMonths([new Date().getFullYear()]);
        this.init(params);
    }
    Contracts.prototype.onNetworkChange = function (network, address) {
        this.networkChanged(network, address);
    };
    Contracts.prototype.onUpdateAddress = function (address) {
        this.addressChanged(address);
    };
    Contracts.prototype.getBalances = function (withContract) {
        if (withContract === void 0) { withContract = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!withContract) return [3, 2];
                        return [4, this.initializeLSFUITokens()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.fetchBalances();
                        return [2];
                }
            });
        });
    };
    Contracts.prototype.getPoolNames = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.fetchPoolNames();
                return [2];
            });
        });
    };
    Contracts.prototype.getRiskFreePools = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.fetchRiskFreePools();
                return [2];
            });
        });
    };
    Contracts.prototype.getRiskyPools = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.fetchRiskyPools();
                return [2];
            });
        });
    };
    Contracts.prototype.getPositions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.fetchPositions();
                return [2];
            });
        });
    };
    Contracts.prototype.onWrap = function (token, amount) {
        var _a = this, _b = _a.contracts, _c = token, wrapToken = _b[_c], CurrencyDao = _b.CurrencyDao, address = _a.address, web3Utils = _a.web3Utils;
        return CurrencyDao.methods.wrap(wrapToken._address, web3Utils.toWei(amount)).send({ from: address });
    };
    Contracts.prototype.onUnwrap = function (token, amount) {
        var _a = this, _b = _a.contracts, _c = token, wrapToken = _b[_c], CurrencyDao = _b.CurrencyDao, address = _a.address, web3Utils = _a.web3Utils;
        return CurrencyDao.methods.unwrap(wrapToken._address, web3Utils.toWei(amount)).send({ from: address });
    };
    Contracts.prototype.onSplit = function (token, form) {
        var amount = form.amount, expiry = form.expiry, underlying = form.underlying, strike = form.strike;
        var _a = this, _b = _a.contracts, _c = token, splitToken = _b[_c], InterestPoolDao = _b.InterestPoolDao, UnderwriterPoolDao = _b.UnderwriterPoolDao, address = _a.address, web3Utils = _a.web3Utils, expiries = _a.expiries;
        var expiryTimeStamp = expiries.match[expiry];
        if (!underlying) {
            return InterestPoolDao.methods
                .split(splitToken._address, expiryTimeStamp, web3Utils.toWei(amount))
                .send({ from: address });
        }
        var _d = underlying, underlyingToken = this.contracts[_d];
        return UnderwriterPoolDao.methods
            .split(splitToken._address, expiryTimeStamp, underlyingToken._address, strike, web3Utils.toWei(amount))
            .send({ from: address });
    };
    Contracts.prototype.onFuse = function (token, form) {
        var amount = form.amount, expiry = form.expiry, underlying = form.underlying, strike = form.strike;
        var _a = token.split('_'), origin = _a[1];
        var _b = this, _c = _b.contracts, _d = origin, fuseToken = _c[_d], InterestPoolDao = _c.InterestPoolDao, UnderwriterPoolDao = _c.UnderwriterPoolDao, address = _b.address, web3Utils = _b.web3Utils, expiries = _b.expiries;
        var expiryTimeStamp = expiries.match[expiry];
        if (!underlying) {
            return InterestPoolDao.methods
                .fuse(fuseToken._address, expiryTimeStamp, web3Utils.toWei(amount))
                .send({ from: address });
        }
        var _e = underlying, underlyingToken = this.contracts[_e];
        return UnderwriterPoolDao.methods
            .fuse(fuseToken._address, expiryTimeStamp, underlyingToken._address, strike, web3Utils.toWei(amount))
            .send({ from: address });
    };
    Contracts.prototype.onRegisterLookUpStake = function (poolNameLength) {
        var _a = this, PoolNameRegistry = _a.contracts.PoolNameRegistry, web3Utils = _a.web3Utils;
        return new Promise(function (resolve, reject) {
            PoolNameRegistry.methods
                .name_registration_stake_lookup__stake(poolNameLength)
                .call()
                .then(function (stake) {
                if (Number(web3Utils.fromWei(stake)) === 0) {
                    PoolNameRegistry.methods
                        .name_registration_minimum_stake()
                        .call()
                        .then(function (st) { return resolve(Number(web3Utils.fromWei(st))); })
                        .catch(reject);
                }
                else {
                    resolve(Number(web3Utils.fromWei(stake)));
                }
            })
                .catch(reject);
        });
    };
    Contracts.prototype.onRegisterPoolName = function (poolName) {
        var _a = this, PoolNameRegistry = _a.contracts.PoolNameRegistry, address = _a.address;
        return PoolNameRegistry.methods.register_name(poolName).send({ from: address });
    };
    Contracts.prototype.onCreatePool = function (form) {
        var riskFree = form.riskFree, poolName = form.poolName, feePercentI = form.feePercentI, feePercentS = form.feePercentS, currency = form.currency, onlyMe = form.onlyMe, exchangeRate = form.exchangeRate, expiryLimit = form.expiryLimit;
        var _a = this, _b = _a.contracts, _c = currency, currencyAddr = _b[_c]._address, InterestPoolDao = _b.InterestPoolDao, UnderwriterPoolDao = _b.UnderwriterPoolDao, address = _a.address, web3Utils = _a.web3Utils;
        return riskFree
            ? InterestPoolDao.methods
                .register_pool(onlyMe, currencyAddr, poolName, web3Utils.toWei(exchangeRate), feePercentI, expiryLimit)
                .send({ from: address })
            : UnderwriterPoolDao.methods
                .register_pool(onlyMe, currencyAddr, poolName, web3Utils.toWei(exchangeRate), feePercentI, feePercentS, expiryLimit)
                .send({ from: address });
    };
    Contracts.prototype.onOfferNewToken = function (poolId, form) {
        var expiry = form.expiry, underlying = form.underlying, strike = form.strike, iCostPerDay = form.iCostPerDay, sCostPerDay = form.sCostPerDay;
        var _a = (underlying ? this.riskyPoolMap : this.riskFreePoolMap)[poolId], currency = _a.currency, poolContract = _a.contract;
        var _b = this, _c = _b.contracts, _d = underlying, underlyingToken = _c[_d], _e = currency, lendAddr = _c[_e]._address, MarketDao = _c.MarketDao, address = _b.address, web3Utils = _b.web3Utils, expiries = _b.expiries;
        var expiryTimeStamp = expiries.match[expiry];
        if (underlying) {
            return poolContract.methods
                .support_mft(expiryTimeStamp, underlyingToken._address, strike, web3Utils.toWei(iCostPerDay), web3Utils.toWei(sCostPerDay))
                .send({ from: address });
        }
        else {
            return poolContract.methods.support_mft(expiryTimeStamp, web3Utils.toWei(iCostPerDay)).send({ from: address });
        }
    };
    Contracts.prototype.onWithdrawEarnings = function (poolId, riskFree) {
        var poolContract = (riskFree ? this.riskFreePoolMap : this.riskyPoolMap)[poolId].contract;
        return poolContract.methods.withdraw_earnings().send({ from: this.address });
    };
    Contracts.prototype.onClosePool = function (poolId, riskFree) {
        var poolContract = (riskFree ? this.riskFreePoolMap : this.riskyPoolMap)[poolId].contract;
        return poolContract.methods.deregister().send({ from: this.address });
    };
    Contracts.prototype.onChangePrice = function (poolId, value, _a) {
        var _b;
        var riskFree = _a.riskFree, _c = _a.type, type = _c === void 0 ? 'I' : _c, marketInfo = _a.marketInfo;
        var poolContract = (riskFree ? this.riskFreePoolMap : this.riskyPoolMap)[poolId].contract;
        return (_b = poolContract.methods)[type === 'I' ? 'set_i_cost_per_day' : 'set_s_cost_per_day'].apply(_b, __spreadArrays(marketInfo, [this.web3Utils.toWei(value)])).send({
            from: this.address,
        });
    };
    Contracts.prototype.onIncreaseCapacity = function (poolId, value, _a) {
        var _b;
        var riskFree = _a.riskFree, _c = _a.type, type = _c === void 0 ? 'I' : _c, marketInfo = _a.marketInfo;
        var poolContract = (riskFree ? this.riskFreePoolMap : this.riskyPoolMap)[poolId].contract;
        return (_b = poolContract.methods)[type === 'I' ? 'increment_i_tokens' : 'increment_s_tokens'].apply(_b, __spreadArrays(marketInfo, [this.web3Utils.toWei(value)])).send({
            from: this.address,
        });
    };
    Contracts.prototype.onDecreaseCapacity = function (poolId, value, _a) {
        var _b;
        var riskFree = _a.riskFree, _c = _a.type, type = _c === void 0 ? 'I' : _c, marketInfo = _a.marketInfo;
        var poolContract = (riskFree ? this.riskFreePoolMap : this.riskyPoolMap)[poolId].contract;
        return (_b = poolContract.methods)[type === 'I' ? 'decrement_i_tokens' : 'decrement_s_tokens'].apply(_b, __spreadArrays(marketInfo, [this.web3Utils.toWei(value)])).send({
            from: this.address,
        });
    };
    Contracts.prototype.onRetireToken = function (poolId, _a) {
        var _b;
        var riskFree = _a.riskFree, marketInfo = _a.marketInfo;
        var poolContract = (riskFree ? this.riskFreePoolMap : this.riskyPoolMap)[poolId].contract;
        return (_b = poolContract.methods).withdraw_mft_support.apply(_b, marketInfo).send({
            from: this.address,
        });
    };
    Contracts.prototype.onContribute = function (poolId, value, _a) {
        var riskFree = _a.riskFree;
        var poolContract = (riskFree ? this.riskFreePoolMap : this.riskyPoolMap)[poolId].contract;
        return poolContract.methods.contribute(this.web3Utils.toWei(value)).send({
            from: this.address,
        });
    };
    Contracts.prototype.onWithdrawContribute = function (poolId, value, _a) {
        var riskFree = _a.riskFree;
        var poolContract = (riskFree ? this.riskFreePoolMap : this.riskyPoolMap)[poolId].contract;
        return poolContract.methods.withdraw_contribution(this.web3Utils.toWei(value)).send({
            from: this.address,
        });
    };
    Contracts.prototype.onPurchase = function (poolId, type, param) {
        return __awaiter(this, void 0, void 0, function () {
            var underlying, poolContract, feeLToken, _a, _b;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        underlying = param[1];
                        poolContract = (!underlying ? this.riskFreePoolMap : this.riskyPoolMap)[poolId].contract;
                        _b = (_a = this.web3Utils).fromWei;
                        return [4, (_c = poolContract.methods)[type === 'I' ? 'i_token_fee' : 's_token_fee'].apply(_c, param).call()];
                    case 1:
                        feeLToken = _b.apply(_a, [_e.sent()]);
                        return [2, (_d = poolContract.methods)[type === 'I' ? 'purchase_i_tokens' : 'purchase_s_tokens'].apply(_d, __spreadArrays(param, [this.web3Utils.toWei(feeLToken)])).send({
                                from: this.address,
                            })];
                }
            });
        });
    };
    Contracts.prototype.onAvailLoan = function (form) {
        var currency = form.currency, expiry = form.expiry, underlying = form.underlying, strike = form.strike, amount = form.amount;
        var _a = this, _b = _a.contracts, PositionRegistry = _b.PositionRegistry, _c = currency, currencyAddr = _b[_c]._address, _d = underlying, underlyingAddr = _b[_d]._address, web3Utils = _a.web3Utils, expiries = _a.expiries;
        var expiryTimeStamp = expiries.match[expiry];
        return PositionRegistry.methods
            .avail_loan(currencyAddr, expiryTimeStamp, underlyingAddr, Number(strike), web3Utils.toWei(amount))
            .send({
            from: this.address,
        });
    };
    Contracts.prototype.onRepay = function (positionId, amount) {
        var _a = this, PositionRegistry = _a.contracts.PositionRegistry, web3Utils = _a.web3Utils;
        return PositionRegistry.methods.repay_loan(positionId, web3Utils.toWei(amount)).send({ from: this.address });
    };
    Contracts.prototype.onWithdrawCollateral = function (positionId) {
        var PositionRegistry = this.contracts.PositionRegistry;
        return PositionRegistry.methods.close_liquidated_loan(positionId).send({ from: this.address });
    };
    Contracts.prototype.onTransfer = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var token, to, amount, id, _a, data, _b, from, _c, contract, web3Utils;
            return __generator(this, function (_d) {
                token = form.token, to = form.to, amount = form.amount, id = form.id, _a = form.data, data = _a === void 0 ? '' : _a;
                _b = this, from = _b.address, _c = token, contract = _b.contracts[_c], web3Utils = _b.web3Utils;
                if (!contract.methods.id) {
                    return [2, contract.methods.transfer(to, web3Utils.toWei(amount)).send({ from: from })];
                }
                return [2, contract.methods.safeTransferFrom(from, to, id, web3Utils.toWei(amount), web3Utils.asciiToHex(data)).send({ from: from })];
            });
        });
    };
    Contracts.prototype.init = function (_a) {
        var tokens = _a.tokens, web3Utils = _a.web3Utils, network = _a.network, address = _a.address, _b = _a.onEvent, onEvent = _b === void 0 ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _1.Logger.info(_1.LOGGER_CONTEXT.CONTRACT_EVENT, args);
        } : _b;
        this.initTokens(tokens);
        this.web3Utils = web3Utils;
        this.onEvent = onEvent;
        this.address = address;
        this.networkChanged(network);
    };
    Contracts.prototype.initTokens = function (tokens) {
        var _this = this;
        this.supportTokens = constants_1.SupportTokens(tokens);
        this.fetchTokens = Object.keys(this.supportTokens).filter(function (token) { return typeof _this.supportTokens[token] !== 'string'; });
        this.balanceTokens = Object.keys(this.supportTokens).filter(function (token) { return _this.supportTokens[token].base === 'ERC20'; });
    };
    Contracts.prototype.getTokenByAddr = function (addr) {
        var _this = this;
        if (addr === void 0) { addr = ''; }
        var idx = this.balanceTokens.findIndex(function (token) {
            if (_this.contracts[token] && _this.contracts[token]._address.toLowerCase() === addr.toLowerCase()) {
                return true;
            }
            return false;
        });
        if (idx === -1) {
            return '';
        }
        return this.balanceTokens[idx];
    };
    Contracts.prototype.networkChanged = function (network, address) {
        if (address === void 0) { address = ''; }
        if (address) {
            this.address = address;
        }
        this.network = network;
        this.onEvent(constants_1.Events.NETWORK_CHANGED);
        this.fetchContracts();
    };
    Contracts.prototype.addressChanged = function (address) {
        this.address = address;
        this.fetchBalances();
        this.fetchPoolNames();
        this.fetchRiskFreePools();
        this.fetchRiskyPools();
        this.fetchPositions();
    };
    Contracts.prototype.fetchBalanceStart = function () {
        var _this = this;
        this.fetchBalances();
        if (!this.balanceTimer) {
            this.balanceTimer = setInterval(function () { return _this.fetchBalances(); }, 30 * 1000);
        }
    };
    Contracts.prototype.fetchBalances = function () {
        var _this = this;
        Promise.all(__spreadArrays(this.balanceTokens, this.lsfuiTokens).map(function (token) { return _this.fetchBalanceByToken(token); }))
            .then(function (data) { return _this.onEvent(constants_1.Events.BALANCE_UPDATED, { data: data }); })
            .catch(function (err) { return _this.onEvent(constants_1.Events.BALANCE_FAILED, err); });
    };
    Contracts.prototype.fetchETHBalance = function () {
        var _a = this, address = _a.address, web3Utils = _a.web3Utils;
        return new Promise(function (resolve) {
            web3Utils.eth
                .getBalance(address)
                .then(function (value) {
                resolve({ token: 'ETH', balance: web3Utils.fromWei(value) });
            })
                .catch(function (err) { return resolve({ token: 'ETH', balance: 0 }); });
        });
    };
    Contracts.prototype.fetchBalanceByToken = function (token) {
        var _this = this;
        var _a = this, address = _a.address, web3Utils = _a.web3Utils, _b = _a.contracts, _c = token, contractInstance = _b[_c], contracts = __rest(_b, [typeof _c === "symbol" ? _c : _c + ""]), ZERO_ADDRESS = _a.supportTokens.ZERO_ADDRESS, expiries = _a.expiries;
        if (token.includes('_') && !token.includes('L_')) {
            var _d = token.split('_'), type = _d[0], origin_1 = _d[1], expiry_1 = _d[2], underlying_1 = _d[3], strike_1 = _d[4];
            var bToken_1 = type + "_" + origin_1 + "_" + expiry_1 + "_" + (underlying_1 || '-') + "_" + (strike_1 || '-');
            return new Promise(function (resolve) {
                contractInstance.methods
                    .id(contracts[origin_1]._address, Number(expiries.match[expiry_1]), !underlying_1 ? ZERO_ADDRESS : contracts[underlying_1]._address, !underlying_1 ? 0 : strike_1)
                    .call()
                    .then(function (id) {
                    if (id) {
                        contractInstance.methods
                            .balanceOf(address, id)
                            .call()
                            .then(function (res) {
                            var balance = web3Utils.fromWei(res);
                            resolve({ token: bToken_1, balance: balance, id: id });
                        })
                            .catch(function (err) { return resolve({ token: bToken_1, balance: 0 }); });
                    }
                    else {
                        resolve({ token: bToken_1, balance: -1 });
                    }
                })
                    .catch(function (err) { return resolve({ token: bToken_1, balance: -1 }); });
            });
        }
        else {
            return new Promise(function (resolve) {
                if (!address || !contractInstance || !contractInstance.methods.balanceOf) {
                    resolve({ token: token, balance: 0 });
                }
                contractInstance.methods
                    .balanceOf(address)
                    .call()
                    .then(function (res) {
                    var balance = web3Utils.fromWei(res);
                    if (!contractInstance.methods.allowance) {
                        resolve({ token: token, balance: balance, name: _this.lsfuiTokenMap[token] });
                    }
                    else {
                        contractInstance.methods
                            .allowance(address, contracts.CurrencyDao._address)
                            .call()
                            .then(function (resA) {
                            var allowance = web3Utils.fromWei(resA);
                            resolve({ token: token, balance: balance, allowance: allowance, name: _this.lsfuiTokenMap[token] });
                        })
                            .catch(function (err) { return resolve({ token: token, balance: balance, allowance: 0 }); });
                    }
                })
                    .catch(function (err) { return resolve({ token: token, balance: 0, allowance: 0 }); });
            });
        }
    };
    Contracts.prototype.fetchContracts = function () {
        var _this = this;
        Promise.all(this.fetchTokens.map(function (token) { return _this.fetchContractByToken(token); }))
            .then(function (data) {
            _this.onEvent(constants_1.Events.CONTRACT_FETCHED, { data: data });
            _this.initializeProtocol();
        })
            .catch(function (err) { return _this.onEvent(constants_1.Events.CONTRACT_FETCH_FAILED, err); });
    };
    Contracts.prototype.fetchContractByToken = function (token) {
        var _this = this;
        var _a = this, network = _a.network, web3Utils = _a.web3Utils, supportTokens = _a.supportTokens;
        return new Promise(function (resolve) {
            var _a, _b, _c;
            if (!supportTokens[token].def) {
                if (!supportTokens[token][network]) {
                    return resolve((_a = {}, _a[token] = 'unknown', _a));
                }
                var url = "https://" + (network === 1 ? 'api' : 'api-kovan') + ".etherscan.io/api?module=contract&action=getabi&address=" + supportTokens[token][network];
                axios_1.default.get(url)
                    .then(function (res) {
                    var _a, _b;
                    if (Number(res.data.status)) {
                        var contractABI = JSON.parse(res.data.result);
                        _this.contracts[token] = web3Utils.createContract(contractABI, supportTokens[token][network]);
                        resolve((_a = {}, _a[token] = 'success', _a));
                    }
                    else {
                        resolve((_b = {}, _b[token] = 'failed', _b));
                    }
                })
                    .catch(function (err) { return _this.onEvent(constants_1.Events.CONTRACT_FETCH_FAILED, err); });
            }
            else {
                var contractABI = supportTokens[token].def;
                if (supportTokens[token].all) {
                    _this.contracts[token] = web3Utils.createContract(contractABI.hasNetwork ? contractABI[network] : contractABI, supportTokens[token].all);
                    resolve((_b = {}, _b[token] = 'success', _b));
                }
                else {
                    _this.contracts[token] = web3Utils.createContract(contractABI.hasNetwork ? contractABI[network] : contractABI, supportTokens[token][network]);
                    resolve((_c = {}, _c[token] = 'success', _c));
                }
            }
        });
    };
    Contracts.prototype.fetchPoolNames = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, PoolNameRegistry, address, poolNames, poolNameMap, poolNameCount, poolNameId, poolName, poolOperator, poolStaked, poolIReg, poolUReg;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, PoolNameRegistry = _a.contracts.PoolNameRegistry, address = _a.address;
                        poolNames = [];
                        poolNameMap = {};
                        return [4, PoolNameRegistry.methods.next_name_id().call()];
                    case 1:
                        poolNameCount = _b.sent();
                        poolNameId = 0;
                        _b.label = 2;
                    case 2:
                        if (!(poolNameId < poolNameCount)) return [3, 9];
                        return [4, PoolNameRegistry.methods.names__name(poolNameId).call()];
                    case 3:
                        poolName = _b.sent();
                        return [4, PoolNameRegistry.methods.names__operator(poolNameId).call()];
                    case 4:
                        poolOperator = _b.sent();
                        return [4, PoolNameRegistry.methods.names__LST_staked(poolNameId).call()];
                    case 5:
                        poolStaked = _b.sent();
                        return [4, PoolNameRegistry.methods.names__interest_pool_registered(poolNameId).call()];
                    case 6:
                        poolIReg = _b.sent();
                        return [4, PoolNameRegistry.methods.names__underwriter_pool_registered(poolNameId).call()];
                    case 7:
                        poolUReg = _b.sent();
                        if (address.toLowerCase() === poolOperator.toLowerCase()) {
                            poolNames.push(poolName);
                        }
                        poolNameMap[poolName] = {
                            id: poolNameId,
                            name: poolName,
                            operator: poolOperator,
                            staked: poolStaked,
                            iReg: poolIReg,
                            uReg: poolUReg,
                        };
                        _b.label = 8;
                    case 8:
                        poolNameId++;
                        return [3, 2];
                    case 9:
                        this.poolNames = poolNames;
                        this.poolNameMap = poolNameMap;
                        this.onEvent(constants_1.Events.POOL_NAME_FETCHED, { data: this.poolNames });
                        return [2];
                }
            });
        });
    };
    Contracts.prototype.fetchRiskFreePools = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, supportTokens, InterestPoolDao, web3Utils, address, expiries, pools, poolMap, poolCount, getTokenName, poolId, poolName, poolCurrency, currency, poolOperator, poolActive, poolAddress, poolContract, poolInfo, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, poolShareToken, poolShareContract, _t, _u, _v, _w, _x, _y, _z, _0, poolshareTokenSupply, marketcount, mfts, mftL, _2, _3, _4, marketId, marketHash, expiry, _5, marketInfo, mftDefault, mftI, mftF, _6, _7, _8, _9, _10, _11;
            var _12, _13;
            return __generator(this, function (_14) {
                switch (_14.label) {
                    case 0:
                        _a = this, supportTokens = _a.supportTokens, InterestPoolDao = _a.contracts.InterestPoolDao, web3Utils = _a.web3Utils, address = _a.address, expiries = _a.expiries;
                        pools = [];
                        poolMap = {};
                        return [4, InterestPoolDao.methods.next_pool_id().call()];
                    case 1:
                        poolCount = _14.sent();
                        getTokenName = function (type, _a) {
                            var expiry = _a[0], base = _a[1];
                            return type + "_" + base + "_" + expiries.match[expiry];
                        };
                        poolId = 0;
                        _14.label = 2;
                    case 2:
                        if (!(poolId < poolCount)) return [3, 31];
                        return [4, InterestPoolDao.methods.pool_id_to_name(poolId).call()];
                    case 3:
                        poolName = _14.sent();
                        return [4, InterestPoolDao.methods.pools__currency(poolName).call()];
                    case 4:
                        poolCurrency = _14.sent();
                        currency = this.getTokenByAddr(poolCurrency);
                        return [4, InterestPoolDao.methods.pools__operator(poolName).call()];
                    case 5:
                        poolOperator = _14.sent();
                        return [4, InterestPoolDao.methods.pools__is_active(poolName).call()];
                    case 6:
                        poolActive = _14.sent();
                        if (!poolActive) {
                            return [3, 30];
                        }
                        return [4, InterestPoolDao.methods.pools__address_(poolName).call()];
                    case 7:
                        poolAddress = _14.sent();
                        poolContract = web3Utils.createContract(supportTokens.InterestPool.def, poolAddress);
                        poolInfo = {};
                        _b = poolInfo;
                        _c = Number;
                        _e = (_d = web3Utils).fromWei;
                        return [4, poolContract.methods.total_active_contributions().call()];
                    case 8:
                        _b.totalContributions = _c.apply(void 0, [_e.apply(_d, [_14.sent()])]);
                        _f = poolInfo;
                        _g = Number;
                        _j = (_h = web3Utils).fromWei;
                        return [4, poolContract.methods.total_f_token_balance().call()];
                    case 9:
                        _f.unusedContributions = _g.apply(void 0, [_j.apply(_h, [_14.sent()])]);
                        poolInfo.utilization = poolInfo.totalContributions
                            ? (poolInfo.totalContributions - poolInfo.unusedContributions) / poolInfo.totalContributions
                            : 0;
                        _k = poolInfo;
                        _m = (_l = web3Utils).fromWei;
                        return [4, poolContract.methods.total_pool_share_token_supply().call()];
                    case 10:
                        _k.outstandingPoolshare = _m.apply(_l, [_14.sent()]);
                        _o = poolInfo;
                        return [4, poolContract.methods.accepts_public_contributions().call()];
                    case 11:
                        _o.contributionsOpen = _14.sent();
                        _p = poolInfo;
                        _r = (_q = web3Utils).fromWei;
                        return [4, poolContract.methods.operator_unwithdrawn_earnings().call()];
                    case 12:
                        _p.myUnwithdrawn = _r.apply(_q, [_14.sent()]);
                        _s = poolInfo;
                        return [4, poolContract.methods.exchange_rate().call()];
                    case 13:
                        _s.depositeRate = _14.sent();
                        poolInfo.withdrawalRate = 0;
                        return [4, poolContract.methods.pool_share_token().call()];
                    case 14:
                        poolShareToken = _14.sent();
                        poolShareContract = web3Utils.createContract(supportTokens.ERC20PoolToken.def, poolShareToken);
                        _t = poolInfo;
                        _v = (_u = web3Utils).fromWei;
                        return [4, poolShareContract.methods.balanceOf(address).call()];
                    case 15:
                        _t.poolShareBalance = _v.apply(_u, [_14.sent()]);
                        poolInfo.poolShareToken = { contract: poolShareContract };
                        _w = poolInfo.poolShareToken;
                        return [4, poolShareContract.methods.name().call()];
                    case 16:
                        _w.name = _14.sent();
                        _x = poolInfo.poolShareToken;
                        return [4, poolShareContract.methods.symbol().call()];
                    case 17:
                        _x.symbol = _14.sent();
                        _y = poolInfo.poolShareToken;
                        return [4, poolShareContract.methods.decimals().call()];
                    case 18:
                        _y.decimals = _14.sent();
                        poolInfo.poolShareToken.balance = poolInfo.poolShareBalance;
                        _z = poolInfo;
                        return [4, poolContract.methods.fee_percentage_per_i_token().call()];
                    case 19:
                        _z.feePercentI = _14.sent();
                        _0 = poolInfo;
                        return [4, poolContract.methods.mft_expiry_limit_days().call()];
                    case 20:
                        _0.expiryLimit = _14.sent();
                        poolshareTokenSupply = Number(poolInfo.outstandingPoolshare);
                        return [4, poolContract.methods.next_market_id().call()];
                    case 21:
                        marketcount = _14.sent();
                        mfts = [];
                        mftL = { name: '', rate: 0, offered: 0 };
                        mftL.name = "L" + currency;
                        _2 = mftL;
                        _4 = (_3 = web3Utils).fromWei;
                        return [4, poolContract.methods.l_token_balance().call()];
                    case 22:
                        _2.offered = _4.apply(_3, [_14.sent()]);
                        mftL.rate = poolshareTokenSupply ? mftL.offered / poolshareTokenSupply : 0;
                        mfts.push(mftL);
                        marketId = 0;
                        _14.label = 23;
                    case 23:
                        if (!(marketId < marketcount)) return [3, 29];
                        return [4, poolContract.methods.market_id_to_hash(marketId).call()];
                    case 24:
                        marketHash = _14.sent();
                        _5 = Number;
                        return [4, poolContract.methods.markets__expiry(marketHash).call()];
                    case 25:
                        expiry = _5.apply(void 0, [_14.sent()]);
                        marketInfo = [expiry];
                        mftDefault = {
                            id: marketId,
                            name: '',
                            rate: 0,
                            expiry: expiries.match[expiry],
                            offered: 0,
                            utilization: 0,
                        };
                        mftI = __assign(__assign({}, mftDefault), { type: 'I', marketInfo: [expiry] });
                        mftF = __assign(__assign({}, mftDefault), { type: 'F' });
                        mftI.name = getTokenName('I', [expiry, currency]);
                        _6 = mftI;
                        _8 = (_7 = web3Utils).fromWei;
                        return [4, (_12 = poolContract.methods).i_token_balance.apply(_12, marketInfo).call()];
                    case 26:
                        _6.offered = _8.apply(_7, [_14.sent()]);
                        mftI.rate = poolshareTokenSupply ? mftI.offered / poolshareTokenSupply : 0;
                        mftI.utilization = poolInfo.unusedContributions ? mftI.offered / poolInfo.unusedContributions : 0;
                        mftF.name = getTokenName('F', [expiry, currency]);
                        _9 = mftF;
                        _11 = (_10 = web3Utils).fromWei;
                        return [4, (_13 = poolContract.methods).f_token_balance.apply(_13, marketInfo).call()];
                    case 27:
                        _9.offered = _11.apply(_10, [_14.sent()]);
                        mftF.rate = poolshareTokenSupply ? mftF.offered / poolshareTokenSupply : 0;
                        mftF.utilization = poolInfo.unusedContributions ? mftF.offered / poolInfo.unusedContributions : 0;
                        mfts.push(mftI);
                        mfts.push(mftF);
                        _14.label = 28;
                    case 28:
                        marketId++;
                        return [3, 23];
                    case 29:
                        poolInfo.markets = {
                            poolshareTokenSupply: poolshareTokenSupply,
                            mfts: mfts,
                        };
                        poolMap[poolId] = __assign({ id: poolId, name: poolName, currency: currency, operator: poolOperator, isOwner: address.toLowerCase() === poolOperator.toLowerCase(), contract: poolContract }, poolInfo);
                        pools.push(poolMap[poolId]);
                        _14.label = 30;
                    case 30:
                        poolId++;
                        return [3, 2];
                    case 31:
                        this.riskFreePools = pools;
                        this.riskFreePoolMap = poolMap;
                        this.onEvent(constants_1.Events.RISK_FREE_POOL_FETCHED, { data: this.riskFreePools });
                        return [2];
                }
            });
        });
    };
    Contracts.prototype.fetchRiskyPools = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, supportTokens, UnderwriterPoolDao, web3Utils, address, expiries, pools, poolMap, poolCount, getTokenName, poolId, poolName, poolCurrency, currency, poolOperator, poolActive, poolAddress, poolContract, poolInfo, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, poolShareToken, poolShareContract, _t, _u, _v, _w, _x, _y, _z, _0, _2, poolshareTokenSupply, marketcount, mfts, mftL, _3, _4, _5, marketId, marketHash, expiry, _6, underlying, strike, _7, marketInfo, mftDefault, mftI, mftS, mftU, tokenInfo, _8, _9, _10, _11, _12, _13, _14, _15, _16;
            var _17, _18, _19;
            var _this = this;
            return __generator(this, function (_20) {
                switch (_20.label) {
                    case 0:
                        _a = this, supportTokens = _a.supportTokens, UnderwriterPoolDao = _a.contracts.UnderwriterPoolDao, web3Utils = _a.web3Utils, address = _a.address, expiries = _a.expiries;
                        pools = [];
                        poolMap = {};
                        return [4, UnderwriterPoolDao.methods.next_pool_id().call()];
                    case 1:
                        poolCount = _20.sent();
                        getTokenName = function (type, _a) {
                            var expiry = _a[0], base = _a[1], underlying = _a[2], strike = _a[3];
                            return type + "_" + (type === 'I' ? '' : base + "_") + _this.getTokenByAddr(underlying) + "_" + expiries.match[expiry] + "_" + strike;
                        };
                        poolId = 0;
                        _20.label = 2;
                    case 2:
                        if (!(poolId < poolCount)) return [3, 35];
                        return [4, UnderwriterPoolDao.methods.pool_id_to_name(poolId).call()];
                    case 3:
                        poolName = _20.sent();
                        return [4, UnderwriterPoolDao.methods.pools__currency(poolName).call()];
                    case 4:
                        poolCurrency = _20.sent();
                        currency = this.getTokenByAddr(poolCurrency);
                        return [4, UnderwriterPoolDao.methods.pools__operator(poolName).call()];
                    case 5:
                        poolOperator = _20.sent();
                        return [4, UnderwriterPoolDao.methods.pools__is_active(poolName).call()];
                    case 6:
                        poolActive = _20.sent();
                        if (!poolActive) {
                            return [3, 34];
                        }
                        return [4, UnderwriterPoolDao.methods.pools__address_(poolName).call()];
                    case 7:
                        poolAddress = _20.sent();
                        poolContract = web3Utils.createContract(supportTokens.UnderwriterPool.def, poolAddress);
                        poolInfo = {};
                        _b = poolInfo;
                        _c = Number;
                        _e = (_d = web3Utils).fromWei;
                        return [4, poolContract.methods.total_active_contributions().call()];
                    case 8:
                        _b.totalContributions = _c.apply(void 0, [_e.apply(_d, [_20.sent()])]);
                        _f = poolInfo;
                        _g = Number;
                        _j = (_h = web3Utils).fromWei;
                        return [4, poolContract.methods.total_u_token_balance().call()];
                    case 9:
                        _f.unusedContributions = _g.apply(void 0, [_j.apply(_h, [_20.sent()])]);
                        poolInfo.utilization = poolInfo.totalContributions
                            ? (poolInfo.totalContributions - poolInfo.unusedContributions) / poolInfo.totalContributions
                            : 0;
                        _k = poolInfo;
                        _m = (_l = web3Utils).fromWei;
                        return [4, poolContract.methods.total_pool_share_token_supply().call()];
                    case 10:
                        _k.outstandingPoolshare = _m.apply(_l, [_20.sent()]);
                        _o = poolInfo;
                        return [4, poolContract.methods.accepts_public_contributions().call()];
                    case 11:
                        _o.contributionsOpen = _20.sent();
                        _p = poolInfo;
                        _r = (_q = web3Utils).fromWei;
                        return [4, poolContract.methods.operator_unwithdrawn_earnings().call()];
                    case 12:
                        _p.myUnwithdrawn = _r.apply(_q, [_20.sent()]);
                        _s = poolInfo;
                        return [4, poolContract.methods.exchange_rate().call()];
                    case 13:
                        _s.depositeRate = _20.sent();
                        poolInfo.withdrawalRate = 0;
                        return [4, poolContract.methods.pool_share_token().call()];
                    case 14:
                        poolShareToken = _20.sent();
                        poolShareContract = web3Utils.createContract(supportTokens.ERC20PoolToken.def, poolShareToken);
                        _t = poolInfo;
                        _v = (_u = web3Utils).fromWei;
                        return [4, poolShareContract.methods.balanceOf(address).call()];
                    case 15:
                        _t.poolShareBalance = _v.apply(_u, [_20.sent()]);
                        poolInfo.poolShareToken = { contract: poolShareContract };
                        _w = poolInfo.poolShareToken;
                        return [4, poolShareContract.methods.name().call()];
                    case 16:
                        _w.name = _20.sent();
                        _x = poolInfo.poolShareToken;
                        return [4, poolShareContract.methods.symbol().call()];
                    case 17:
                        _x.symbol = _20.sent();
                        _y = poolInfo.poolShareToken;
                        return [4, poolShareContract.methods.decimals().call()];
                    case 18:
                        _y.decimals = _20.sent();
                        poolInfo.poolShareToken.balance = poolInfo.poolShareBalance;
                        _z = poolInfo;
                        return [4, poolContract.methods.fee_percentage_per_i_token().call()];
                    case 19:
                        _z.feePercentI = _20.sent();
                        _0 = poolInfo;
                        return [4, poolContract.methods.fee_percentage_per_s_token().call()];
                    case 20:
                        _0.feePercentS = _20.sent();
                        _2 = poolInfo;
                        return [4, poolContract.methods.mft_expiry_limit_days().call()];
                    case 21:
                        _2.expiryLimit = _20.sent();
                        poolshareTokenSupply = Number(poolInfo.outstandingPoolshare);
                        return [4, poolContract.methods.next_market_id().call()];
                    case 22:
                        marketcount = _20.sent();
                        mfts = [];
                        mftL = { name: '', rate: 0, offered: 0 };
                        mftL.name = "L" + currency;
                        _3 = mftL;
                        _5 = (_4 = web3Utils).fromWei;
                        return [4, poolContract.methods.l_token_balance().call()];
                    case 23:
                        _3.offered = _5.apply(_4, [_20.sent()]);
                        mftL.rate = poolshareTokenSupply ? mftL.offered / poolshareTokenSupply : 0;
                        mfts.push(mftL);
                        marketId = 0;
                        _20.label = 24;
                    case 24:
                        if (!(marketId < marketcount)) return [3, 33];
                        return [4, poolContract.methods.market_id_to_hash(marketId).call()];
                    case 25:
                        marketHash = _20.sent();
                        _6 = Number;
                        return [4, poolContract.methods.markets__expiry(marketHash).call()];
                    case 26:
                        expiry = _6.apply(void 0, [_20.sent()]);
                        return [4, poolContract.methods.markets__underlying(marketHash).call()];
                    case 27:
                        underlying = _20.sent();
                        _7 = Number;
                        return [4, poolContract.methods.markets__strike_price(marketHash).call()];
                    case 28:
                        strike = _7.apply(void 0, [_20.sent()]);
                        marketInfo = [expiry, underlying, strike];
                        mftDefault = {
                            id: marketId,
                            name: '',
                            rate: 0,
                            expiry: expiries.match[expiry],
                            offered: 0,
                            utilization: 0,
                        };
                        mftI = __assign(__assign({}, mftDefault), { type: 'I', marketInfo: [expiry], marketInfoParam: marketInfo });
                        mftS = __assign(__assign({}, mftDefault), { type: 'S', marketInfo: marketInfo });
                        mftU = __assign(__assign({}, mftDefault), { type: 'U' });
                        tokenInfo = [expiry, currency, underlying, strike];
                        mftI.name = getTokenName('I', tokenInfo);
                        _8 = mftI;
                        _10 = (_9 = web3Utils).fromWei;
                        return [4, (_17 = poolContract.methods).i_token_balance.apply(_17, marketInfo).call()];
                    case 29:
                        _8.offered = _10.apply(_9, [_20.sent()]);
                        mftI.rate = poolshareTokenSupply ? mftI.offered / poolshareTokenSupply : 0;
                        mftI.utilization = poolInfo.unusedContributions ? mftI.offered / poolInfo.unusedContributions : 0;
                        mftS.name = getTokenName('S', tokenInfo);
                        _11 = mftS;
                        _13 = (_12 = web3Utils).fromWei;
                        return [4, (_18 = poolContract.methods).s_token_balance.apply(_18, marketInfo).call()];
                    case 30:
                        _11.offered = _13.apply(_12, [_20.sent()]);
                        mftS.rate = poolshareTokenSupply ? mftS.offered / poolshareTokenSupply : 0;
                        mftS.utilization = poolInfo.unusedContributions ? mftS.offered / poolInfo.unusedContributions : 0;
                        mftU.name = getTokenName('U', tokenInfo);
                        _14 = mftU;
                        _16 = (_15 = web3Utils).fromWei;
                        return [4, (_19 = poolContract.methods).u_token_balance.apply(_19, marketInfo).call()];
                    case 31:
                        _14.offered = _16.apply(_15, [_20.sent()]);
                        mftU.rate = poolshareTokenSupply ? mftU.offered / poolshareTokenSupply : 0;
                        mftU.utilization = poolInfo.unusedContributions ? mftU.offered / poolInfo.unusedContributions : 0;
                        mfts.push(mftI);
                        mfts.push(mftS);
                        mfts.push(mftU);
                        _20.label = 32;
                    case 32:
                        marketId++;
                        return [3, 24];
                    case 33:
                        poolInfo.markets = {
                            poolshareTokenSupply: poolshareTokenSupply,
                            mfts: mfts,
                        };
                        poolMap[poolId] = __assign({ id: poolId, name: poolName, currency: currency, operator: poolOperator, isOwner: address.toLowerCase() === poolOperator.toLowerCase(), contract: poolContract }, poolInfo);
                        pools.push(poolMap[poolId]);
                        _20.label = 34;
                    case 34:
                        poolId++;
                        return [3, 2];
                    case 35:
                        this.riskyPools = pools;
                        this.riskyPoolMap = poolMap;
                        this.onEvent(constants_1.Events.RISKY_POOL_FETCHED, { data: this.riskyPools });
                        return [2];
                }
            });
        });
    };
    Contracts.prototype.fetchPositions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, supportTokens, _b, PositionRegistry, MarketDao, web3Utils, address, expiries, positions, positionMap, positionCount, positionId, borrower, currency, underlying, currencyValue, _c, _d, underlyingValue, _e, _f, expiry, repaid, _g, _h, status_1, loanMarketHash, position, loanActive, loanLiquidated, marketStatus, loanMarketOpen, loanMarketSetting;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _a = this, supportTokens = _a.supportTokens, _b = _a.contracts, PositionRegistry = _b.PositionRegistry, MarketDao = _b.MarketDao, web3Utils = _a.web3Utils, address = _a.address, expiries = _a.expiries;
                        positions = [];
                        positionMap = {};
                        return [4, PositionRegistry.methods.last_position_id().call()];
                    case 1:
                        positionCount = _j.sent();
                        positionId = 1;
                        _j.label = 2;
                    case 2:
                        if (!(positionId <= positionCount)) return [3, 20];
                        return [4, PositionRegistry.methods.positions__borrower(positionId).call()];
                    case 3:
                        borrower = _j.sent();
                        if (borrower.toLowerCase() !== address.toLowerCase()) {
                            return [3, 19];
                        }
                        return [4, PositionRegistry.methods.positions__currency(positionId).call()];
                    case 4:
                        currency = _j.sent();
                        return [4, PositionRegistry.methods.positions__underlying(positionId).call()];
                    case 5:
                        underlying = _j.sent();
                        _d = (_c = web3Utils).fromWei;
                        return [4, PositionRegistry.methods.positions__currency_value(positionId).call()];
                    case 6:
                        currencyValue = _d.apply(_c, [_j.sent()]);
                        _f = (_e = web3Utils).fromWei;
                        return [4, PositionRegistry.methods.positions__underlying_value(positionId).call()];
                    case 7:
                        underlyingValue = _f.apply(_e, [_j.sent()]);
                        return [4, PositionRegistry.methods.positions__expiry(positionId).call()];
                    case 8:
                        expiry = _j.sent();
                        _h = (_g = web3Utils).fromWei;
                        return [4, PositionRegistry.methods.positions__repaid_value(positionId).call()];
                    case 9:
                        repaid = _h.apply(_g, [_j.sent()]);
                        return [4, PositionRegistry.methods.positions__status(positionId).call()];
                    case 10:
                        status_1 = _j.sent();
                        return [4, MarketDao.methods.loan_market_hash(currency, expiry, underlying).call()];
                    case 11:
                        loanMarketHash = _j.sent();
                        position = {
                            id: positionId,
                            currency: this.getTokenByAddr(currency),
                            underlying: this.getTokenByAddr(underlying),
                            currencyValue: currencyValue,
                            underlyingValue: underlyingValue,
                            expiry: expiries.match[expiry],
                            repaid: repaid,
                            loanMarketHash: loanMarketHash,
                            status: 'closed',
                        };
                        return [4, PositionRegistry.methods.LOAN_STATUS_ACTIVE().call()];
                    case 12:
                        loanActive = _j.sent();
                        return [4, PositionRegistry.methods.LOAN_STATUS_LIQUIDATED().call()];
                    case 13:
                        loanLiquidated = _j.sent();
                        if (!(status_1 === loanActive)) return [3, 17];
                        return [4, MarketDao.methods.loan_markets__status(loanMarketHash).call()];
                    case 14:
                        marketStatus = _j.sent();
                        return [4, MarketDao.methods.LOAN_MARKET_STATUS_OPEN().call()];
                    case 15:
                        loanMarketOpen = _j.sent();
                        return [4, MarketDao.methods.LOAN_MARKET_STATUS_SETTLING().call()];
                    case 16:
                        loanMarketSetting = _j.sent();
                        if (marketStatus === loanMarketOpen) {
                            position.status = 'active';
                        }
                        else if (marketStatus === loanMarketSetting) {
                            position.status = 'liquidating';
                        }
                        else {
                            position.status = 'liquidated_unwithdrawn';
                        }
                        return [3, 18];
                    case 17:
                        if (status_1 === loanLiquidated) {
                            position.status = 'liquidated_withdrawn';
                        }
                        _j.label = 18;
                    case 18:
                        positionMap[positionId] = position;
                        positions.push(positionMap[positionId]);
                        _j.label = 19;
                    case 19:
                        positionId++;
                        return [3, 2];
                    case 20:
                        this.positions = positions;
                        this.positionMap = positionMap;
                        this.onEvent(constants_1.Events.POSITION_FETCHED, { data: this.positions });
                        return [2];
                }
            });
        });
    };
    Contracts.prototype.getMFTProperties = function (contract) {
        return __awaiter(this, void 0, void 0, function () {
            var expiries, nonce, ret, i, token, expiry, underlying, strikePrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!contract) {
                            return [2, []];
                        }
                        expiries = this.expiries;
                        return [4, contract.methods.nonce().call()];
                    case 1:
                        nonce = _a.sent();
                        ret = [];
                        i = 1;
                        _a.label = 2;
                    case 2:
                        if (!(i <= nonce)) return [3, 8];
                        return [4, contract.methods.metadata__id(i).call()];
                    case 3:
                        token = _a.sent();
                        return [4, contract.methods.metadata__expiry(i).call()];
                    case 4:
                        expiry = _a.sent();
                        return [4, contract.methods.metadata__underlying(i).call()];
                    case 5:
                        underlying = _a.sent();
                        return [4, contract.methods.metadata__strike_price(i).call()];
                    case 6:
                        strikePrice = _a.sent();
                        if (expiries.match[expiry]) {
                            ret.push([token, expiries.match[expiry], this.getTokenByAddr(underlying), strikePrice]);
                        }
                        _a.label = 7;
                    case 7:
                        i++;
                        return [3, 2];
                    case 8: return [2, ret];
                }
            });
        });
    };
    Contracts.prototype.initializeLSFUITokens = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, CurrencyDao, web3Utils, _b, ZERO_ADDRESS, supportTokens, lsfuiTokens, lsfuiTokenMap, _i, _c, token, lTokenAddress, contractName, fTokenAddress, fTokenContract, props, _d, props_1, _e, expiry, iTokenAddress, iTokenContract, props, _f, props_2, _g, expiry, sTokenAddress, sTokenContract, props, _h, props_3, _j, expiry, underlying, strike, uTokenAddress, uTokenContract, props, _k, props_4, _l, expiry, underlying, strike;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        _a = this, CurrencyDao = _a.contracts.CurrencyDao, web3Utils = _a.web3Utils, _b = _a.supportTokens, ZERO_ADDRESS = _b.ZERO_ADDRESS, supportTokens = __rest(_b, ["ZERO_ADDRESS"]);
                        lsfuiTokens = [];
                        lsfuiTokenMap = {};
                        _i = 0, _c = this.balanceTokens;
                        _m.label = 1;
                    case 1:
                        if (!(_i < _c.length)) return [3, 17];
                        token = _c[_i];
                        if (!this.contracts[token]) return [3, 16];
                        return [4, CurrencyDao.methods.token_addresses__l(this.contracts[token]._address).call()];
                    case 2:
                        lTokenAddress = _m.sent();
                        if (!(lTokenAddress && lTokenAddress !== ZERO_ADDRESS)) return [3, 4];
                        this.contracts["L_" + token] = web3Utils.createContract(supportTokens[token].def, lTokenAddress);
                        return [4, this.contracts["L_" + token].methods.name().call()];
                    case 3:
                        contractName = _m.sent();
                        lsfuiTokens.push("L_" + token);
                        lsfuiTokenMap["L_" + token] = contractName;
                        _m.label = 4;
                    case 4: return [4, CurrencyDao.methods.token_addresses__f(this.contracts[token]._address).call()];
                    case 5:
                        fTokenAddress = _m.sent();
                        if (!(fTokenAddress && fTokenAddress !== ZERO_ADDRESS)) return [3, 7];
                        fTokenContract = web3Utils.createContract(supportTokens.MultiFungibleToken.def, fTokenAddress);
                        return [4, this.getMFTProperties(fTokenContract)];
                    case 6:
                        props = _m.sent();
                        for (_d = 0, props_1 = props; _d < props_1.length; _d++) {
                            _e = props_1[_d], expiry = _e[1];
                            this.contracts["F_" + token + "_" + expiry] = fTokenContract;
                            lsfuiTokens.push("F_" + token + "_" + expiry);
                        }
                        _m.label = 7;
                    case 7: return [4, CurrencyDao.methods.token_addresses__i(this.contracts[token]._address).call()];
                    case 8:
                        iTokenAddress = _m.sent();
                        if (!(iTokenAddress && iTokenAddress !== ZERO_ADDRESS)) return [3, 10];
                        iTokenContract = web3Utils.createContract(supportTokens.MultiFungibleToken.def, iTokenAddress);
                        return [4, this.getMFTProperties(iTokenContract)];
                    case 9:
                        props = _m.sent();
                        for (_f = 0, props_2 = props; _f < props_2.length; _f++) {
                            _g = props_2[_f], expiry = _g[1];
                            this.contracts["I_" + token + "_" + expiry] = iTokenContract;
                            lsfuiTokens.push("I_" + token + "_" + expiry);
                        }
                        _m.label = 10;
                    case 10: return [4, CurrencyDao.methods.token_addresses__s(this.contracts[token]._address).call()];
                    case 11:
                        sTokenAddress = _m.sent();
                        if (!(sTokenAddress && sTokenAddress !== ZERO_ADDRESS)) return [3, 13];
                        sTokenContract = web3Utils.createContract(supportTokens.MultiFungibleToken.def, sTokenAddress);
                        return [4, this.getMFTProperties(sTokenContract)];
                    case 12:
                        props = _m.sent();
                        for (_h = 0, props_3 = props; _h < props_3.length; _h++) {
                            _j = props_3[_h], expiry = _j[1], underlying = _j[2], strike = _j[3];
                            this.contracts["S_" + token + "_" + expiry + "_" + underlying + "_" + strike] = sTokenContract;
                            lsfuiTokens.push("S_" + token + "_" + expiry + "_" + underlying + "_" + strike);
                        }
                        _m.label = 13;
                    case 13: return [4, CurrencyDao.methods.token_addresses__u(this.contracts[token]._address).call()];
                    case 14:
                        uTokenAddress = _m.sent();
                        if (!(uTokenAddress && uTokenAddress !== ZERO_ADDRESS)) return [3, 16];
                        uTokenContract = web3Utils.createContract(supportTokens.MultiFungibleToken.def, uTokenAddress);
                        return [4, this.getMFTProperties(uTokenContract)];
                    case 15:
                        props = _m.sent();
                        for (_k = 0, props_4 = props; _k < props_4.length; _k++) {
                            _l = props_4[_k], expiry = _l[1], underlying = _l[2], strike = _l[3];
                            this.contracts["U_" + token + "_" + expiry + "_" + underlying + "_" + strike] = uTokenContract;
                            lsfuiTokens.push("U_" + token + "_" + expiry + "_" + underlying + "_" + strike);
                        }
                        _m.label = 16;
                    case 16:
                        _i++;
                        return [3, 1];
                    case 17:
                        this.lsfuiTokens = lsfuiTokens;
                        this.lsfuiTokenMap = lsfuiTokenMap;
                        return [2];
                }
            });
        });
    };
    Contracts.prototype.initializeProtocol = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, ProtocolDao, web3Utils, currencyDaoAddr, currencyDao, interestPoolDaoAddr, interestPoolDao, poolContractDaoAddr, poolContractDao, marketDaoAddr, marketDao, poolNameRegistryAddr, poolNameRegistry, positionRegistryAddr, positionRegistry;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, ProtocolDao = _a.contracts.ProtocolDao, web3Utils = _a.web3Utils;
                        return [4, ProtocolDao.methods.daos(1).call()];
                    case 1:
                        currencyDaoAddr = _b.sent();
                        currencyDao = web3Utils.createContract(this.supportTokens.CurrencyDao.def, currencyDaoAddr);
                        this.contracts.CurrencyDao = currencyDao;
                        return [4, ProtocolDao.methods.daos(2).call()];
                    case 2:
                        interestPoolDaoAddr = _b.sent();
                        interestPoolDao = web3Utils.createContract(this.supportTokens.InterestPoolDao.def, interestPoolDaoAddr);
                        this.contracts.InterestPoolDao = interestPoolDao;
                        return [4, ProtocolDao.methods.daos(3).call()];
                    case 3:
                        poolContractDaoAddr = _b.sent();
                        poolContractDao = web3Utils.createContract(this.supportTokens.UnderwriterPoolDao.def, poolContractDaoAddr);
                        this.contracts.UnderwriterPoolDao = poolContractDao;
                        return [4, ProtocolDao.methods.daos(4).call()];
                    case 4:
                        marketDaoAddr = _b.sent();
                        marketDao = web3Utils.createContract(this.supportTokens.MarketDao.def, marketDaoAddr);
                        this.contracts.MarketDao = marketDao;
                        return [4, ProtocolDao.methods.registries(1).call()];
                    case 5:
                        poolNameRegistryAddr = _b.sent();
                        poolNameRegistry = web3Utils.createContract(this.supportTokens.PoolNameRegistry.def, poolNameRegistryAddr);
                        this.contracts.PoolNameRegistry = poolNameRegistry;
                        return [4, ProtocolDao.methods.registries(2).call()];
                    case 6:
                        positionRegistryAddr = _b.sent();
                        positionRegistry = web3Utils.createContract(this.supportTokens.PositionRegistry.def, positionRegistryAddr);
                        this.contracts.PositionRegistry = positionRegistry;
                        this.fetchPoolNames();
                        this.fetchRiskFreePools();
                        this.fetchRiskyPools();
                        this.fetchPositions();
                        return [4, this.initializeLSFUITokens()];
                    case 7:
                        _b.sent();
                        this.fetchBalanceStart();
                        return [2];
                }
            });
        });
    };
    return Contracts;
}());
exports.Contracts = Contracts;
//# sourceMappingURL=contracts.js.map