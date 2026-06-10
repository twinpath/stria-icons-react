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
var WifiExclamation_exports = {};
__export(WifiExclamation_exports, {
  default: () => WifiExclamation_default
});
module.exports = __toCommonJS(WifiExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WifiExclamationRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.629 184.531C15.691 194.125 30.941 194.531 40.535 185.375C94.933 133.656 168.14 99.219 248 86.109V56C248 49.52 249.138 43.352 250.754 37.375C157.414 50.66 71.181 90.008 7.472 150.625C-2.153 159.75 -2.528 174.938 6.629 184.531ZM118.689 320.625C127.908 330.25 143.095 330.469 152.627 321.312C179.386 295.562 212.039 276.992 248 266.363V216.867C199.396 228.719 155.091 252.328 119.377 286.688C109.814 295.906 109.502 311.094 118.689 320.625ZM392 216.867V266.363C427.961 276.992 460.613 295.562 487.373 321.312C492.029 325.781 497.998 328 503.998 328C510.279 328 516.591 325.531 521.31 320.625C530.498 311.094 530.185 295.906 520.623 286.687C484.908 252.328 440.603 228.719 392 216.867ZM632.527 150.625C568.818 90.008 482.586 50.66 389.246 37.375C390.861 43.352 392 49.52 392 56V86.109C471.859 99.219 545.066 133.656 599.464 185.375C604.089 189.812 610.058 192 615.996 192C622.339 192 628.683 189.5 633.371 184.531C642.527 174.938 642.152 159.75 632.527 150.625ZM320 392C297.908 392 280 409.908 280 432S297.908 472 320 472S360 454.092 360 432S342.091 392 320 392ZM320 336C337.687 336 352 321.672 352 304V64C352 46.328 337.687 32 320 32S288 46.328 288 64V304C288 321.672 302.312 336 320 336Z" })
  }
));
WifiExclamationRegular.displayName = "WifiExclamationRegular";
var WifiExclamation_default = WifiExclamationRegular;
