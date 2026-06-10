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
var BabyCarriage_exports = {};
__export(BabyCarriage_exports, {
  default: () => BabyCarriage_default
});
module.exports = __toCommonJS(BabyCarriage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BabyCarriageDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 384C316.654 384 288 412.652 288 448C288 483.346 316.654 512 352 512C387.348 512 416 483.346 416 448C416 412.652 387.348 384 352 384ZM96 384C60.654 384 32 412.652 32 448C32 483.346 60.654 512 96 512C131.348 512 160 483.346 160 448C160 412.652 131.348 384 96 384ZM90.75 7.598C35.25 51.852 0 117.996 0 192V224H275.033L144.75 16.975C133.5 -0.777 107.625 -5.777 90.75 7.598Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 95.979H448C412.75 95.979 384 124.729 384 159.98V224H0C0 276.258 24.793 323.227 64.346 357.789C74.309 354.279 84.854 352 96 352C137.66 352 172.848 378.834 186.102 416H261.898C275.152 378.834 310.34 352 352 352C363.229 352 373.852 354.301 383.875 357.859C423.346 323.273 448 276.215 448 224V159.98H496C504.75 159.98 512 152.73 512 143.98V111.979C512 103.229 504.75 95.979 496 95.979Z" })
    ]
  }
));
BabyCarriageDuotone.displayName = "BabyCarriageDuotone";
var BabyCarriage_default = BabyCarriageDuotone;
