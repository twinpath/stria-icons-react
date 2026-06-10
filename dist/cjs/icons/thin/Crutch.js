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
var Crutch_exports = {};
__export(Crutch_exports, {
  default: () => Crutch_default
});
module.exports = __toCommonJS(Crutch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrutchThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.57 168.988L343.008 9.441C336.715 3.15 328.463 0 320.213 0C312.02 0 303.826 3.104 297.543 9.316C284.867 21.852 284.813 42.42 297.418 55.025L307.541 65.146L188.375 184.313C175.594 197.094 166.328 213.062 161.578 230.484L120.838 379.85L2.344 498.344C-0.781 501.469 -0.781 506.531 2.344 509.656C3.906 511.219 5.953 512 8 512S12.094 511.219 13.656 509.656L132.15 391.162L281.516 350.422C298.938 345.672 314.906 336.406 327.688 323.625L446.861 204.451L456.982 214.572C463.27 220.857 471.508 224 479.744 224C488.012 224 496.277 220.836 502.57 214.51L502.635 214.447C515.146 201.865 515.117 181.533 502.57 168.988ZM277.297 334.984L139.406 372.594L177.016 234.703C181.031 219.953 188.875 206.438 199.688 195.625L208 187.313L324.688 304L316.375 312.312C305.563 323.125 292.047 330.969 277.297 334.984ZM336 292.688L219.313 176L318.854 76.459L435.547 193.141L336 292.688ZM491.227 203.227C484.9 209.585 474.638 209.597 468.295 203.258L308.732 43.711C302.402 37.385 302.411 27.007 308.793 20.693C315.075 14.48 325.301 14.366 331.695 20.756L491.258 180.303C497.553 186.598 497.566 196.854 491.227 203.227Z" })
  }
));
CrutchThin.displayName = "CrutchThin";
var Crutch_default = CrutchThin;
