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
var FloppyDisks_exports = {};
__export(FloppyDisks_exports, {
  default: () => FloppyDisks_default
});
module.exports = __toCommonJS(FloppyDisks_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FloppyDisksLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 480H96C60.654 480 32 451.346 32 416V112C32 103.164 24.836 96 16 96S0 103.164 0 112V416C0 469.02 42.98 512 96 512H400C408.836 512 416 504.836 416 496S408.836 480 400 480ZM488.562 97.938L414.062 23.438C398.938 8.328 378.875 0 357.5 0H176C131.875 0 96 35.891 96 80V336C96 380.109 131.875 416 176 416H432C476.125 416 512 380.109 512 336V154.516C512 133.141 503.688 113.047 488.562 97.938ZM192 32H352V112H192V32ZM480 336C480 362.469 458.469 384 432 384H176C149.531 384 128 362.469 128 336V80C128 59.168 141.416 41.574 160 34.947V112C160 129.672 174.326 144 192 144H352C369.674 144 384 129.672 384 112V40.02C386.664 41.777 389.166 43.791 391.438 46.063L465.938 120.563C475 129.641 480 141.688 480 154.516V336ZM296 192C256.312 192 224 224.297 224 264S256.312 336 296 336S368 303.703 368 264S335.688 192 296 192ZM296 304C273.938 304 256 286.062 256 264S273.938 224 296 224S336 241.938 336 264S318.062 304 296 304Z" })
  }
));
FloppyDisksLight.displayName = "FloppyDisksLight";
var FloppyDisks_default = FloppyDisksLight;
