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
const TrademarkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232 96H24C10.75 96 0 106.75 0 120S10.75 144 24 144H104.645C104.492 145.09 104 146.055 104 147.188V392C104 405.25 114.75 416 128 416S152 405.25 152 392V147.188C152 146.055 151.508 145.09 151.355 144H232C245.25 144 256 133.25 256 120S245.25 96 232 96ZM623.562 97.219C613.781 94.094 602.969 97.375 596.75 105.656L464 283.844L331.25 105.656C325.062 97.375 314.344 94.094 304.438 97.219C294.625 100.469 288 109.656 288 120V392C288 405.25 298.75 416 312 416S336 405.25 336 392V192.375L444.75 338.344C453.812 350.469 474.188 350.469 483.25 338.344L592 192.375V392C592 405.25 602.75 416 616 416S640 405.25 640 392V120C640 109.656 633.375 100.469 623.562 97.219Z" })
  }
));
TrademarkRegular.displayName = "TrademarkRegular";
var Trademark_default = TrademarkRegular;
