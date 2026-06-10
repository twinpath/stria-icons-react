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
var Flute_exports = {};
__export(Flute_exports, {
  default: () => Flute_default
});
module.exports = __toCommonJS(Flute_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FluteLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 232C306.75 232 296 242.75 296 256S306.75 280 320 280S344 269.25 344 256S333.25 232 320 232ZM592 160H48C21.6 160 0 181.6 0 208V304C0 330.4 21.6 352 48 352H592C618.4 352 640 330.4 640 304V208C640 181.6 618.4 160 592 160ZM112 320H48C39.164 320 32 312.836 32 304V208C32 199.164 39.164 192 48 192H112V320ZM608 304C608 312.836 600.838 320 592 320H144V192H592C600.838 192 608 199.164 608 208V304ZM512 232C498.75 232 488 242.75 488 256S498.75 280 512 280S536 269.25 536 256S525.25 232 512 232ZM416 232C402.75 232 392 242.75 392 256S402.75 280 416 280S440 269.25 440 256S429.25 232 416 232Z" })
  }
));
FluteLight.displayName = "FluteLight";
var Flute_default = FluteLight;
