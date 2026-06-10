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
var HandMiddleFinger_exports = {};
__export(HandMiddleFinger_exports, {
  default: () => HandMiddleFinger_default
});
module.exports = __toCommonJS(HandMiddleFinger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandMiddleFingerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 240C390.848 240 382.385 242.697 375.107 247.139C370.943 224.869 351.48 208 328 208C311.281 208 296.594 216.561 288 229.52V40C288 17.906 270.094 0 248 0S208 17.906 208 40V240C208 213.484 186.516 192 160 192S112 213.484 112 240V336C112 344.836 104.836 352 96 352S80 344.836 80 336V290.527L50.016 314.516C38.629 323.626 32 337.418 32 352V400.025C32 410.401 35.366 420.497 41.594 428.797L56.021 448.025C86.239 488.299 133.652 512 184.002 512H320C390.692 512 448 454.692 448 384V288C448 261.484 426.516 240 400 240Z" })
  }
));
HandMiddleFingerSolid.displayName = "HandMiddleFingerSolid";
var HandMiddleFinger_default = HandMiddleFingerSolid;
