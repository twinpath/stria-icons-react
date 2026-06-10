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
var Airplay_exports = {};
__export(Airplay_exports, {
  default: () => Airplay_default
});
module.exports = __toCommonJS(Airplay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirplayThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 32H72C32.312 32 0 64.312 0 104V344C0 383.688 32.312 416 72 416H96C100.406 416 104 412.406 104 408S100.406 400 96 400H72C41.125 400 16 374.875 16 344V104C16 73.125 41.125 48 72 48H504C534.875 48 560 73.125 560 104V344C560 374.875 534.875 400 504 400H480C475.594 400 472 403.594 472 408S475.594 416 480 416H504C543.688 416 576 383.688 576 344V104C576 64.312 543.688 32 504 32ZM307.553 296.109C302.146 290.703 295.08 288 288.027 288C280.973 288 273.934 290.703 268.582 296.109L136.119 432.875C118.771 450.227 131.055 480 155.658 480H420.342C444.945 480 457.229 450.227 439.881 432.875L307.553 296.109ZM431.057 456.828C430.164 458.984 427.332 464 420.342 464H155.658C148.668 464 145.836 458.984 144.943 456.828C144.049 454.672 142.502 449.121 147.611 444.008L279.953 307.363C282.1 305.195 284.969 304 288.027 304C291.117 304 294.033 305.215 296.055 307.234L428.566 444.188C433.498 449.121 431.951 454.672 431.057 456.828Z" })
  }
));
AirplayThin.displayName = "AirplayThin";
var Airplay_default = AirplayThin;
