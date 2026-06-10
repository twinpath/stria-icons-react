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
var ChevronsLeft_exports = {};
__export(ChevronsLeft_exports, {
  default: () => ChevronsLeft_default
});
module.exports = __toCommonJS(ChevronsLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M253.227 466.066L19.82 256L253.227 45.934C254.977 44.371 255.867 42.184 255.867 39.996C255.867 38.09 255.195 36.183 253.82 34.652C250.852 31.371 245.805 31.09 242.508 34.058L2.508 250.062C-0.836 253.062 -0.836 258.938 2.508 261.938L242.508 477.942C245.805 480.91 250.852 480.629 253.82 477.348C256.805 474.067 256.508 468.973 253.227 466.066ZM194.623 250.062C191.279 253.062 191.279 258.938 194.623 261.938L434.623 477.942C437.92 480.91 442.967 480.629 445.936 477.348C448.92 474.067 448.623 468.973 445.342 466.066L211.936 256L445.342 45.934C447.092 44.371 447.982 42.184 447.982 39.996C447.982 38.09 447.311 36.183 445.936 34.652C442.967 31.371 437.92 31.09 434.623 34.058L194.623 250.062Z" })
  }
));
ChevronsLeftThin.displayName = "ChevronsLeftThin";
var ChevronsLeft_default = ChevronsLeftThin;
