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
var Wind_exports = {};
__export(Wind_exports, {
  default: () => Wind_default
});
module.exports = __toCommonJS(Wind_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 184H356C406.719 184 448 142.719 448 92S406.719 0 356 0H320C306.75 0 296 10.75 296 24S306.75 48 320 48H356C380.25 48 400 67.75 400 92S380.25 136 356 136H24C10.75 136 0 146.75 0 160S10.75 184 24 184ZM164 328H24C10.75 328 0 338.75 0 352S10.75 376 24 376H164C188.25 376 208 395.75 208 420S188.25 464 164 464H128C114.75 464 104 474.75 104 488S114.75 512 128 512H164C214.719 512 256 470.719 256 420S214.719 328 164 328ZM420 232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H420C444.25 280 464 299.75 464 324S444.25 368 420 368H384C370.75 368 360 378.75 360 392S370.75 416 384 416H420C470.719 416 512 374.719 512 324S470.719 232 420 232Z" })
  }
));
WindRegular.displayName = "WindRegular";
var Wind_default = WindRegular;
