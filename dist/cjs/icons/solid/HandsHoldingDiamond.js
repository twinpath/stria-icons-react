var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var HandsHoldingDiamond_exports = {};
__export(HandsHoldingDiamond_exports, {
  default: () => HandsHoldingDiamond_default
});
module.exports = __toCommonJS(HandsHoldingDiamond_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandsHoldingDiamondSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M438.75 105.65L342.375 9.281C330 -3.094 310 -3.094 297.625 9.281L201.25 105.775C188.75 118.024 188.75 138.148 201.25 150.397L297.625 246.766C309.875 259.14 330 259.14 342.25 246.766L438.75 150.397C451.125 138.023 451.125 118.024 438.75 105.65ZM216.984 236.017C205.953 222.268 185.781 219.987 172.016 231.017C158.203 242.079 155.969 262.203 167.016 276.014L185.875 306.575C194.773 317.707 193.883 333.745 183.805 343.815C172.023 355.603 152.609 354.525 142.195 341.51L80 256.781V104.025C80 81.933 62.094 64.027 40 64.027S0 81.933 0 104.025V308.758C0 323.301 4.949 337.405 14.031 348.76L135.016 500.001C141.082 507.586 150.266 512 159.98 512H256C273.672 512 288 497.673 288 480.002V358.447C288 336.659 280.586 315.524 266.977 298.513L216.984 236.017ZM600 64.027C577.906 64.027 560 81.933 560 104.025V256.781L497.805 341.51C487.391 354.525 467.977 355.603 456.195 343.815C446.117 333.745 445.227 317.707 454.125 306.575L472.984 276.014C484.031 262.203 481.797 242.079 467.984 231.017C454.219 219.987 434.047 222.268 423.016 236.017L373.023 298.513C359.414 315.524 352 336.659 352 358.447V480.002C352 497.673 366.328 512 384 512H480.02C489.734 512 498.918 507.586 504.984 500.001L625.969 348.76C635.051 337.405 640 323.301 640 308.758V104.025C640 81.933 622.094 64.027 600 64.027Z" })
  }
));
HandsHoldingDiamondSolid.displayName = "HandsHoldingDiamondSolid";
var HandsHoldingDiamond_default = HandsHoldingDiamondSolid;
