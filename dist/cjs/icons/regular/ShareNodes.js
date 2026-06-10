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
var ShareNodes_exports = {};
__export(ShareNodes_exports, {
  default: () => ShareNodes_default
});
module.exports = __toCommonJS(ShareNodes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareNodesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 288C323.141 288 297.561 300.998 279.963 321.152L189.82 276.082C191.203 269.598 192 262.898 192 256S191.203 242.402 189.82 235.918L279.963 190.848C297.561 211.002 323.141 224 352 224C405.02 224 448 181.02 448 128S405.02 32 352 32S256 74.98 256 128C256 134.898 256.797 141.598 258.18 148.082L168.037 193.152C150.439 172.998 124.859 160 96 160C42.98 160 0 202.98 0 256S42.98 352 96 352C124.859 352 150.439 339.002 168.037 318.848L258.18 363.918C256.797 370.402 256 377.102 256 384C256 437.02 298.98 480 352 480S448 437.02 448 384S405.02 288 352 288ZM352 80C378.467 80 400 101.533 400 128S378.467 176 352 176S304 154.467 304 128S325.533 80 352 80ZM96 304C69.533 304 48 282.467 48 256S69.533 208 96 208S144 229.533 144 256S122.467 304 96 304ZM352 432C325.533 432 304 410.467 304 384S325.533 336 352 336S400 357.533 400 384S378.467 432 352 432Z" })
  }
));
ShareNodesRegular.displayName = "ShareNodesRegular";
var ShareNodes_default = ShareNodesRegular;
