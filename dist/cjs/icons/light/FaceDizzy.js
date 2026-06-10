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
const FaceDizzyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M227.301 243.25C233.477 237.125 233.477 226.875 227.301 220.75L198.602 192L227.301 163.25C233.477 157.125 233.477 146.875 227.301 140.75C221.125 134.5 210.953 134.5 204.656 140.75L175.957 169.375L147.258 140.75C141.082 134.5 130.91 134.5 124.734 140.75C118.559 146.875 118.559 157.125 124.734 163.25L153.434 192L124.734 220.75C118.559 226.875 118.559 237.125 124.734 243.25C130.91 249.5 141.082 249.625 147.258 243.25L175.957 214.625L204.656 243.25C210.953 249.625 221.125 249.625 227.301 243.25ZM256 288C220.641 288 191.941 316.75 191.941 352S220.641 416 256 416S320.059 387.25 320.059 352S291.359 288 256 288ZM256 384C238.441 384 224.031 369.625 224.031 352S238.441 320 256 320S287.969 334.375 287.969 352S273.559 384 256 384ZM387.266 140.75C381.09 134.5 370.918 134.5 364.742 140.75L336.043 169.375L307.344 140.75C301.047 134.5 290.875 134.5 284.699 140.75C278.523 146.875 278.523 157.125 284.699 163.25L313.398 192L284.699 220.75C278.523 226.875 278.523 237.125 284.699 243.25C290.875 249.5 301.047 249.625 307.344 243.25L336.043 214.625L364.742 243.25C370.918 249.5 381.09 249.625 387.266 243.25C393.441 237.125 393.441 226.875 387.266 220.75L358.566 192L387.266 163.25C393.562 157.125 393.562 146.875 387.266 140.75ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" })
  }
));
FaceDizzyLight.displayName = "FaceDizzyLight";
var FaceDizzy_default = FaceDizzyLight;
