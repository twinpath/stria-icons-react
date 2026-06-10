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
var WineBottle_exports = {};
__export(WineBottle_exports, {
  default: () => WineBottle_default
});
module.exports = __toCommonJS(WineBottle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineBottleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M179.762 423.238L44 287.473L166.01 165.457L301.773 301.227L179.762 423.238ZM507.793 72.57L439.912 4.688C433.66 -1.562 423.535 -1.562 417.285 4.688L394.656 27.312C388.408 33.564 388.41 43.689 394.654 49.941C394.656 49.943 394.654 49.943 394.656 49.945L350.551 94.053L418.432 161.936L462.539 117.828L462.541 117.83C468.795 124.08 479.039 124.078 485.291 117.828L507.918 95.199C514.043 88.945 514.043 78.82 507.793 72.57Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M417.935 161.936L385.41 194.461C405.162 241.094 396.162 296.848 358.158 334.852L199.767 493.25C174.765 518.25 134.261 518.25 109.259 493.25L18.751 402.734C-6.25 377.734 -6.25 337.227 18.751 312.227L43.503 287.473L179.265 423.238L301.277 301.227L165.513 165.457L177.14 153.828C215.144 115.828 270.9 106.824 317.529 126.578L350.054 94.053L417.935 161.936Z" })
    ]
  }
));
WineBottleDuotone.displayName = "WineBottleDuotone";
var WineBottle_default = WineBottleDuotone;
