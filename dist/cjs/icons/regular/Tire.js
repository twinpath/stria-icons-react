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
var Tire_exports = {};
__export(Tire_exports, {
  default: () => Tire_default
});
module.exports = __toCommonJS(Tire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TireRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 84C161 84 84 161 84 256S161 428 256 428S428 351 428 256S351 84 256 84ZM256 132C274.625 132 292 136.375 307.875 143.75L281.25 180.5C273.25 177.75 264.875 176 256 176S238.75 177.75 230.75 180.5L204.125 143.75C220 136.375 237.375 132 256 132ZM133.5 270.5C132.875 265.75 132 261 132 256C132 223.5 144.875 194.125 165.375 172L191.875 208.625C182 221.875 176 238.125 176 256C176 256.25 176.125 256.5 176.125 256.75L133.5 270.5ZM232 377.625C195.875 370.5 165.75 347.375 148.25 316.25L191 302.375C201 316.25 215.25 326.625 232 331.875V377.625ZM256 288C238.375 288 224 273.625 224 256S238.375 224 256 224S288 238.375 288 256S273.625 288 256 288ZM280 377.625V331.875C296.75 326.625 311 316.25 321 302.375L363.75 316.25C346.25 347.375 316.125 370.5 280 377.625ZM335.875 256.75C335.875 256.5 336 256.25 336 256C336 238.125 330 221.875 320.125 208.625L346.625 172C367.125 194.125 380 223.5 380 256C380 261 379.125 265.75 378.5 270.5L335.875 256.75ZM256 0C114.625 0 0 114.625 0 256S114.625 512 256 512S512 397.375 512 256S397.375 0 256 0ZM256 464C141.25 464 48 370.75 48 256S141.25 48 256 48S464 141.25 464 256S370.75 464 256 464Z" })
  }
));
TireRegular.displayName = "TireRegular";
var Tire_default = TireRegular;
