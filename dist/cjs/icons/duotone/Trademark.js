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
const TrademarkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 144V368C640 394.5 618.5 416 592 416S544 394.5 544 368V280.844L501.469 334C483.281 356.75 444.719 356.75 426.531 334L384 280.844V368C384 394.5 362.5 416 336 416S288 394.5 288 368V144C288 123.625 300.875 105.469 320.125 98.719C339.219 91.875 360.719 98.062 373.469 114L464 227.156L554.531 114C567.281 98.094 588.719 91.906 607.875 98.719C627.125 105.469 640 123.625 640 144Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 144C256 170.5 234.5 192 208 192H176V368C176 394.5 154.5 416 128 416S80 394.5 80 368V192H48C21.5 192 0 170.5 0 144S21.5 96 48 96H208C234.5 96 256 117.5 256 144Z" })
    ]
  }
));
TrademarkDuotone.displayName = "TrademarkDuotone";
var Trademark_default = TrademarkDuotone;
