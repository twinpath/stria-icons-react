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
var Sigma_exports = {};
__export(Sigma_exports, {
  default: () => Sigma_default
});
module.exports = __toCommonJS(Sigma_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SigmaRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M335.999 136V80H83.585L248.621 238.688C253.34 243.219 255.996 249.469 255.996 256S253.34 268.781 248.621 273.312L83.585 432H335.999V376C335.999 362.75 346.749 352 359.999 352C373.25 352 384 362.75 384 376V456C384 469.25 373.25 480 359.999 480H23.99C14.208 480 5.395 474.062 1.739 464.969S0.302 445.5 7.364 438.687L197.37 256L7.364 73.312C0.301 66.5 -1.917 56.125 1.739 47.031S14.208 32 23.99 32H359.999C373.25 32 384 42.75 384 56V136C384 149.25 373.25 160 359.999 160C346.749 160 335.999 149.25 335.999 136Z" })
  }
));
SigmaRegular.displayName = "SigmaRegular";
var Sigma_default = SigmaRegular;
