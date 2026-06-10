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
var CheckDouble_exports = {};
__export(CheckDouble_exports, {
  default: () => CheckDouble_default
});
module.exports = __toCommonJS(CheckDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheckDoubleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M163.717 252.399C171.529 260.212 181.764 264.118 191.998 264.118S212.467 260.212 220.279 252.399L380.279 92.399C395.904 76.774 395.904 51.462 380.279 35.837S339.342 20.212 323.717 35.837L191.998 167.556L140.279 115.837C124.654 100.212 99.342 100.212 83.717 115.837S68.092 156.774 83.717 172.399L163.717 252.399ZM476.279 163.837C460.654 148.212 435.342 148.212 419.717 163.837L191.998 391.556L92.279 291.837C76.654 276.212 51.342 276.212 35.717 291.837S20.092 332.774 35.717 348.399L163.717 476.399C171.529 484.212 181.764 488.118 191.998 488.118S212.467 484.212 220.279 476.399L476.279 220.399C491.904 204.774 491.904 179.462 476.279 163.837Z" })
  }
));
CheckDoubleSolid.displayName = "CheckDoubleSolid";
var CheckDouble_default = CheckDoubleSolid;
