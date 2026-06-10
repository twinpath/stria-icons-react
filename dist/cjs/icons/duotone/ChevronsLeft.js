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
const ChevronsLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.34 256L436.896 99.656C452.145 83.688 451.676 58.359 435.646 43.094C419.678 27.828 394.367 28.391 379.086 44.344L203.094 228.344C195.688 236.078 192 246.047 192 256S195.688 275.922 203.094 283.656L379.086 467.656C394.367 483.609 419.678 484.172 435.646 468.906C451.613 453.641 452.176 428.312 436.896 412.344L287.34 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M95.34 256L244.895 99.656C260.145 83.688 259.645 58.359 243.645 43.094C227.678 27.828 202.365 28.391 187.086 44.344L11.094 228.344C3.688 236.078 0 246.047 0 256S3.688 275.922 11.094 283.656L187.086 467.656C202.365 483.609 227.678 484.172 243.645 468.906C259.613 453.641 260.145 428.312 244.895 412.344L95.34 256Z" })
    ]
  }
));
ChevronsLeftDuotone.displayName = "ChevronsLeftDuotone";
var ChevronsLeft_default = ChevronsLeftDuotone;
