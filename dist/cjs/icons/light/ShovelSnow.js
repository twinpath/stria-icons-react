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
var ShovelSnow_exports = {};
__export(ShovelSnow_exports, {
  default: () => ShovelSnow_default
});
module.exports = __toCommonJS(ShovelSnow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShovelSnowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M180.768 244.75L100.772 324.75C94.522 330.875 94.522 341.125 100.772 347.25C103.772 350.375 107.896 352 112.021 352S120.271 350.375 123.271 347.25L203.266 267.25C209.516 261.125 209.516 250.875 203.266 244.75C197.142 238.375 186.892 238.375 180.768 244.75ZM164.768 411.25C167.768 414.375 171.893 416 176.018 416S184.267 414.375 187.267 411.25L267.263 331.25C273.513 325.125 273.513 314.875 267.263 308.75C261.138 302.375 250.889 302.375 244.764 308.75L164.768 388.75C158.394 394.875 158.394 405.125 164.768 411.25ZM502.625 65.875L446.129 9.375C439.754 3.125 431.629 0 423.38 0C415.255 0 407.006 3.125 400.756 9.375L383.757 26.375C359.633 50.625 356.383 87.75 373.757 115.5L267.638 221.75L220.391 174.625C210.766 164.875 197.892 160 185.142 160C174.393 160 163.643 163.375 154.644 170.375L19.401 274.875C-4.348 293.25 -6.722 328.375 14.651 349.75L162.269 497.375C172.143 507.25 184.892 512 197.642 512C212.391 512 227.265 505.375 237.14 492.625L341.634 357.375C357.008 337.5 355.258 309.25 337.384 291.625L290.262 244.375L396.506 138.125C408.255 145.375 421.38 149.25 434.754 149.25C453.128 149.25 471.627 142.25 485.626 128.125L502.625 111.125C515.125 98.75 515.125 78.375 502.625 65.875ZM314.76 314.25C321.135 320.625 321.76 330.75 316.26 337.75L211.766 473C208.391 477.375 203.266 480 197.642 480C194.767 480 189.517 479.25 184.892 474.75L37.275 327.125C32.275 322.125 31.901 316.25 32.15 313.25C32.275 310.25 33.4 304.625 39.025 300.25L174.268 195.75C178.268 192.75 182.393 192.125 185.142 192.125C189.892 192.125 194.392 194 197.767 197.375L314.76 314.25ZM463.003 105.5C455.378 113.125 445.379 117.25 434.754 117.25C424.005 117.25 414.005 113 406.381 105.5C398.756 97.875 394.756 87.875 394.756 77.25C394.756 66.5 398.881 56.5 406.381 48.875L423.255 31.875L480.002 88.625L463.003 105.5Z" })
  }
));
ShovelSnowLight.displayName = "ShovelSnowLight";
var ShovelSnow_default = ShovelSnowLight;
