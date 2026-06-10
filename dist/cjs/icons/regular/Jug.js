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
var Jug_exports = {};
__export(Jug_exports, {
  default: () => Jug_default
});
module.exports = __toCommonJS(Jug_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JugRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 168C448 128.25 415.75 96 376 96C354.875 96 334.875 105.5 321.375 121.75L311 108.75C306.5 103.125 304 96 304 88.75V48C317.25 48 328 37.25 328 24S317.25 0 304 0H144C130.75 0 120 10.75 120 24S130.75 48 144 48V88.75C144 96.031 141.521 103.098 136.973 108.785L60.111 204.861C41.914 227.607 32 255.869 32 285V432C32 476.182 67.816 512 112 512H336C380.184 512 416 476.182 416 432V284.875C415.875 267.375 412.125 250 404.875 233.875C431.125 222.375 448 196.625 448 168ZM97.5 234.875L174.5 138.75C185.75 124.5 192 106.875 192 88.75V48H256V88.75C256 106.955 262.195 124.619 273.57 138.836L350.5 235C361.828 249.16 368 266.754 368 284.889V288H80V284.875C80 266.75 86.25 249.125 97.5 234.875ZM336 464H112C94.326 464 80 449.672 80 432V416H368V432C368 449.672 353.674 464 336 464ZM377.375 191.75L353.25 161.625C356.125 151.5 365 144 376 144C388.875 144 399.5 154.25 399.875 167.25C400.25 180.125 390.25 191 377.375 191.75Z" })
  }
));
JugRegular.displayName = "JugRegular";
var Jug_default = JugRegular;
