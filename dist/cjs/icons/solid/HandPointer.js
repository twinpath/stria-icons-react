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
var HandPointer_exports = {};
__export(HandPointer_exports, {
  default: () => HandPointer_default
});
module.exports = __toCommonJS(HandPointer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandPointerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.001 224C390.852 224 382.385 226.697 375.108 231.143C370.942 208.869 351.467 192 328.003 192C310.624 192 295.538 201.33 287.114 215.168C282.958 192.883 263.479 176 240.003 176C227.655 176 216.508 180.797 208.003 188.459V40C208.003 17.906 190.096 0 168.003 0C145.911 0 128.005 17.906 128.005 40V362.674L72.005 288C64.149 277.523 52.131 272 39.968 272C18.753 272 0 289.06 0 312.02C0 320.375 2.608 328.802 8.005 336L99.223 457.609C124.786 491.672 165.471 512 208.003 512H304.003C383.407 512 448.001 447.406 448.001 368V272C448.001 245.484 426.501 224 400.001 224ZM240.001 400C240.001 408.844 232.844 416 224.001 416S208.001 408.844 208.001 400V304C208.001 295.156 215.157 288 224.001 288S240.001 295.156 240.001 304V400ZM304.001 400C304.001 408.844 296.844 416 288.001 416S272.001 408.844 272.001 400V304C272.001 295.156 279.157 288 288.001 288S304.001 295.156 304.001 304V400ZM368.001 400C368.001 408.844 360.844 416 352.001 416S336.001 408.844 336.001 400V304C336.001 295.156 343.157 288 352.001 288S368.001 295.156 368.001 304V400Z" })
  }
));
HandPointerSolid.displayName = "HandPointerSolid";
var HandPointer_default = HandPointerSolid;
