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
var CediSign_exports = {};
__export(CediSign_exports, {
  default: () => CediSign_default
});
module.exports = __toCommonJS(CediSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CediSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M338.987 392.469C307.503 417.834 269.834 430.248 232.002 431.432V80.568C269.831 81.756 307.499 94.168 338.987 119.531C342.378 122.281 347.441 121.75 350.238 118.344C353.003 114.906 352.456 109.844 349.019 107.094C314.589 79.309 273.372 65.768 232.002 64.58V8C232.002 3.594 228.424 0 224.002 0S216.002 3.594 216.002 8V64.047C169.683 66.508 124.224 85.369 88.954 120.219C52.235 156.469 32 204.688 32 256S52.235 355.531 88.954 391.781C124.216 426.607 169.699 444.789 216.002 447.258V504C216.002 508.406 219.58 512 224.002 512S232.002 508.406 232.002 504V447.783C273.37 446.592 314.599 432.676 349.019 404.906C352.456 402.156 353.003 397.094 350.238 393.656C347.441 390.25 342.378 389.719 338.987 392.469ZM100.204 380.406C66.547 347.156 48 303 48 256S66.547 164.844 100.204 131.594C132.368 99.824 173.771 82.617 216.002 80.18V431.818C173.775 429.377 132.374 412.174 100.204 380.406Z" })
  }
));
CediSignThin.displayName = "CediSignThin";
var CediSign_default = CediSignThin;
