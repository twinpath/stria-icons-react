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
var FaceDizzy_exports = {};
__export(FaceDizzy_exports, {
  default: () => FaceDizzy_default
});
module.exports = __toCommonJS(FaceDizzy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceDizzyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM200 240C202.047 240 204.094 239.219 205.656 237.656C208.781 234.531 208.781 229.469 205.656 226.344L171.312 192L205.656 157.656C208.781 154.531 208.781 149.469 205.656 146.344S197.469 143.219 194.344 146.344L160 180.688L125.656 146.344C122.531 143.219 117.469 143.219 114.344 146.344S111.219 154.531 114.344 157.656L148.688 192L114.344 226.344C111.219 229.469 111.219 234.531 114.344 237.656C115.906 239.219 117.953 240 120 240S124.094 239.219 125.656 237.656L160 203.312L194.344 237.656C195.906 239.219 197.953 240 200 240ZM397.656 146.344C394.531 143.219 389.469 143.219 386.344 146.344L352 180.688L317.656 146.344C314.531 143.219 309.469 143.219 306.344 146.344S303.219 154.531 306.344 157.656L340.688 192L306.344 226.344C303.219 229.469 303.219 234.531 306.344 237.656C307.906 239.219 309.953 240 312 240S316.094 239.219 317.656 237.656L352 203.312L386.344 237.656C387.906 239.219 389.953 240 392 240S396.094 239.219 397.656 237.656C400.781 234.531 400.781 229.469 397.656 226.344L363.312 192L397.656 157.656C400.781 154.531 400.781 149.469 397.656 146.344ZM256 288C220.654 288 192 316.654 192 352S220.654 416 256 416S320 387.346 320 352S291.346 288 256 288ZM256 400C229.533 400 208 378.467 208 352S229.533 304 256 304S304 325.533 304 352S282.467 400 256 400Z" })
  }
));
FaceDizzyThin.displayName = "FaceDizzyThin";
var FaceDizzy_default = FaceDizzyThin;
