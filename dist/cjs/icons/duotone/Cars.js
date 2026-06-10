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
var Cars_exports = {};
__export(Cars_exports, {
  default: () => Cars_default
});
module.exports = __toCommonJS(Cars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M253.861 203.221C268.857 158.229 310.795 128 358.219 128H380.666L355.781 53.334C345.164 21.482 315.359 0 281.785 0H134.219C100.645 0 70.836 21.486 60.219 53.34L33.484 133.551C13.938 141.029 0 159.826 0 182V320C0 337.672 14.328 352 32 352H48C65.672 352 80 337.672 80 320V287H212.934C218.268 280.926 224.238 275.385 231.27 271.002L253.861 203.221ZM80 232C66.746 232 56 221.254 56 208C56 194.744 66.746 184 80 184S104 194.744 104 208C104 221.254 93.254 232 80 232ZM102.797 128L120.934 73.576C122.844 67.848 128.184 64 134.219 64H281.785C287.82 64 293.156 67.846 295.062 73.57L313.203 128H102.797Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M606.516 293.551L579.781 213.334C569.164 181.482 539.359 160 505.785 160H358.219C324.645 160 294.836 181.486 284.219 213.34L257.484 293.551C237.938 301.029 224 319.826 224 342V480C224 497.672 238.328 512 256 512H272C289.672 512 304 497.672 304 480V447H560V480C560 497.672 574.328 512 592 512H608C625.672 512 640 497.672 640 480V342C640 319.826 626.062 301.029 606.516 293.551ZM344.934 233.576C346.844 227.848 352.184 224 358.219 224H505.785C511.82 224 517.156 227.846 519.062 233.57L537.203 288H326.797L344.934 233.576ZM304 392C290.746 392 280 381.254 280 368C280 354.744 290.746 344 304 344S328 354.744 328 368C328 381.254 317.254 392 304 392ZM560 392C546.746 392 536 381.254 536 368C536 354.744 546.746 344 560 344S584 354.744 584 368C584 381.254 573.254 392 560 392Z" })
    ]
  }
));
CarsDuotone.displayName = "CarsDuotone";
var Cars_default = CarsDuotone;
