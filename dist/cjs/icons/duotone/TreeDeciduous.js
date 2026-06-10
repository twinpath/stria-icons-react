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
var TreeDeciduous_exports = {};
__export(TreeDeciduous_exports, {
  default: () => TreeDeciduous_default
});
module.exports = __toCommonJS(TreeDeciduous_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeDeciduousDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 288C512 314.625 502.625 337.375 484 356S442.625 384 416 384H288V368L319.145 315.576C321.805 310.258 317.938 304 311.99 304H288V224C288 206.327 273.673 192 256 192H256C238.327 192 224 206.327 224 224V240H200.01C194.062 240 190.195 246.258 192.855 251.578L224 304V384H96C69.375 384 46.625 374.625 28 356S0 314.625 0 288C0 268.625 5.375 251 16 235S41 207.375 59 200C49.625 184 46.125 167.5 48.5 150.5S57.625 118.875 69 106.5S94.125 86 110.5 82S143.375 79.625 160 87C162.682 61.844 173.582 40.732 192.7 23.93C209.858 8.851 232.334 0.176 255.175 0.003C280.145 -0.186 301.92 8.19 320.5 25C338.875 41.625 349.375 62.375 352 87C368.625 79.625 385.125 78 401.5 82S431.625 94.125 443 106.5S461.125 133.5 463.5 150.5S462.625 184 454 200H453C471 207.375 485.375 219 496 235S512 268.625 512 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200.01 240H224V224C224 206.327 238.327 192 256 192H256C273.673 192 288 206.327 288 224V304H311.99C317.938 304 321.805 310.258 319.145 315.576L288 368V480C288 497.673 273.673 512 256 512H256C238.327 512 224 497.673 224 480V304L192.855 251.578C190.195 246.258 194.062 240 200.01 240Z" })
    ]
  }
));
TreeDeciduousDuotone.displayName = "TreeDeciduousDuotone";
var TreeDeciduous_default = TreeDeciduousDuotone;
