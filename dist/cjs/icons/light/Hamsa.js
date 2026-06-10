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
var Hamsa_exports = {};
__export(Hamsa_exports, {
  default: () => Hamsa_default
});
module.exports = __toCommonJS(Hamsa_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HamsaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 328C242.75 328 232 338.75 232 352S242.75 376 256 376S280 365.25 280 352S269.25 328 256 328ZM452 224H416V96C416 60.75 387.25 32 352 32C338.875 32 326.625 36 316.375 42.875C307.625 17.875 283.875 0 256 0C228.125 0 204.375 17.875 195.625 42.875C185.125 35.75 172.625 32 160 32C124.75 32 96 60.75 96 96V224H60C19 224 0 261.25 0 288C0 303.125 5 318.125 14.75 330L104.625 440.125C141.875 485.75 197.125 512 256 512S370.125 485.75 407.375 440.125L497.25 330.125C507 318.125 512 303.25 512 288C512 261.25 492.75 224 452 224ZM472.375 309.875L385 416.875C360.25 447.25 326.375 469.5 288 476.875C227.125 488.625 167.25 466.25 129.375 419.875L39.625 309.875C32 300.5 30 287 34.375 275.25C38.75 263.5 48.875 256 60 256H128L128 98C128 82.023 138.817 67.109 154.577 64.487C174.545 61.165 192 76.65 192 96V208C192 216.8 199.2 224 208 224H208C216.8 224 224 216.8 224 208L224 66C224 50.023 234.817 35.109 250.577 32.487C270.545 29.165 288 44.65 288 64V208C288 216.8 295.2 224 304 224H304C312.8 224 320 216.8 320 208L320 98C320 82.023 330.817 67.109 346.577 64.487C366.545 61.165 384 76.65 384 96V256H452C463.125 256 473.25 263.5 477.625 275.25C482.125 287 480 300.5 472.375 309.875ZM256 272C237.25 272 198 273.875 143.875 341.875C139.25 347.625 139.25 356.375 143.875 362.125C198.125 430.25 237.25 432 256 432S314 430.125 368.125 362.125C372.75 356.375 372.75 347.625 368.125 341.875C313.875 273.75 274.75 272 256 272ZM256 400C211.875 400 176 352 176 352S211.875 304 256 304S336 352 336 352S300.125 400 256 400Z" })
  }
));
HamsaLight.displayName = "HamsaLight";
var Hamsa_default = HamsaLight;
