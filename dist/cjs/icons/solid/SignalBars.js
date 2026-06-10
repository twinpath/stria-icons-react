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
var SignalBars_exports = {};
__export(SignalBars_exports, {
  default: () => SignalBars_default
});
module.exports = __toCommonJS(SignalBars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalBarsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 256H240C213.6 256 192 277.6 192 304V464C192 490.4 213.6 512 240 512H240C266.4 512 288 490.4 288 464V304C288 277.6 266.4 256 240 256ZM80 384H80C53.6 384 32 405.6 32 432V464C32 490.4 53.6 512 80 512H80C106.4 512 128 490.4 128 464V432C128 405.6 106.4 384 80 384ZM400 128H400C373.6 128 352 149.6 352 176V464C352 490.4 373.6 512 400 512H400C426.4 512 448 490.4 448 464V176C448 149.6 426.4 128 400 128ZM560 0H560C533.6 0 512 21.6 512 48V464C512 490.4 533.6 512 560 512H560C586.4 512 608 490.4 608 464V48C608 21.6 586.4 0 560 0Z" })
  }
));
SignalBarsSolid.displayName = "SignalBarsSolid";
var SignalBars_default = SignalBarsSolid;
