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
var Trademark_exports = {};
__export(Trademark_exports, {
  default: () => Trademark_default
});
module.exports = __toCommonJS(Trademark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrademarkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M607.875 98.719C588.719 91.906 567.281 98.094 554.531 114L464 227.156L373.469 114C360.719 98.062 339.219 91.875 320.125 98.719C300.875 105.469 288 123.625 288 144V368C288 394.5 309.5 416 336 416S384 394.5 384 368V280.844L426.531 334C444.719 356.75 483.281 356.75 501.469 334L544 280.844V368C544 394.5 565.5 416 592 416S640 394.5 640 368V144C640 123.625 627.125 105.469 607.875 98.719ZM208 96H48C21.5 96 0 117.5 0 144S21.5 192 48 192H80V368C80 394.5 101.5 416 128 416S176 394.5 176 368V192H208C234.5 192 256 170.5 256 144S234.5 96 208 96Z" })
  }
));
TrademarkSolid.displayName = "TrademarkSolid";
var Trademark_default = TrademarkSolid;
