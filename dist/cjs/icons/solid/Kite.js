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
var Kite_exports = {};
__export(Kite_exports, {
  default: () => Kite_default
});
module.exports = __toCommonJS(Kite_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KiteSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M113.75 315.902L167.125 351.406C177.75 358.531 192 350.906 192 338.156V269.898C192 257.148 177.75 249.523 167.125 256.648L120 288.023V224.02C120 175.391 80.625 136.012 32 136.012H16C7.125 136.012 0 143.137 0 152.016V168.016C0 176.891 7.125 184.016 16 184.016H32C54.125 184.016 72 201.891 72 224.02V288.023L24.875 256.648C14.25 249.523 0 257.148 0 269.898V338.156C0 350.906 14.25 358.531 24.875 351.406L78.25 315.902C89 308.652 103 308.652 113.75 315.902ZM608 0H345.457C330.555 0 317.627 10.285 314.275 24.805L234.162 371.992L146.598 459.441C136.775 469.25 120 462.293 120 448.414V358.531L96 342.531L72 358.531V443.289C72 459.914 77 476.414 87.75 489.043C114.25 520.547 156.75 517.297 180.625 493.418L268.039 405.871L615.195 325.75C629.715 322.402 640 309.473 640 294.57V32C640 14.328 625.674 0 608 0ZM555.312 212.703C561.562 218.957 561.562 229.082 555.312 235.332C549.066 241.578 538.941 241.586 532.688 235.332L480 182.641L363.312 299.336C357.066 305.586 346.941 305.594 340.688 299.336C334.438 293.086 334.438 282.961 340.688 276.711L457.375 160.016L404.688 107.32C398.438 101.07 398.438 90.945 404.688 84.695S421.063 78.445 427.312 84.695L480 137.387L532.688 84.695C538.938 78.445 549.063 78.445 555.312 84.695S561.562 101.07 555.312 107.32L502.625 160.016L555.312 212.703Z" })
  }
));
KiteSolid.displayName = "KiteSolid";
var Kite_default = KiteSolid;
