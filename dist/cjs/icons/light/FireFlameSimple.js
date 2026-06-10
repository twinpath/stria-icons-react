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
var FireFlameSimple_exports = {};
__export(FireFlameSimple_exports, {
  default: () => FireFlameSimple_default
});
module.exports = __toCommonJS(FireFlameSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireFlameSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M214.004 8.775C201.832 -2.924 182.162 -2.924 169.986 8.77C69.465 105.311 0 226.186 0 300.5C0 425 79 512 192 512S384 425 384 300.5C384 225.973 314.135 105.01 214.004 8.775ZM212.75 477.875C205.875 478.75 199.25 480 192 480S178.125 478.75 171.25 477.875C127.75 469.375 98.875 433.75 98.875 385.25C98.875 371.875 103.125 324 192 224C280.875 324 285.125 371.875 285.125 385.25C285.125 433.75 256.25 469.25 212.75 477.875ZM310.875 424.875C314.625 412.5 317.125 399.375 317.125 385.25C317.125 304.25 204.375 189.75 192 175.75C179.125 190.25 66.875 304.375 66.875 385.25C66.875 399.375 69.375 412.5 73.125 424.875C47.25 393.625 32 350.875 32 300.5C32 209.75 154.625 73.031 192 36.906C229.375 72.906 352 209.75 352 300.5C352 350.875 336.75 393.625 310.875 424.875Z" })
  }
));
FireFlameSimpleLight.displayName = "FireFlameSimpleLight";
var FireFlameSimple_default = FireFlameSimpleLight;
