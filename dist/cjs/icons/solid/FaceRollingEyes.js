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
var FaceRollingEyes_exports = {};
__export(FaceRollingEyes_exports, {
  default: () => FaceRollingEyes_default
});
module.exports = __toCommonJS(FaceRollingEyes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceRollingEyesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM96.035 224C96.035 199.75 109.719 178.75 129.578 168C128.852 170.625 128.004 173.25 128.004 176C128.004 193.75 142.293 208 159.973 208C177.652 208 191.941 193.75 191.941 176C191.941 173.25 191.094 170.625 190.367 168C210.348 178.75 224.031 199.75 224.031 224C224.031 259.25 195.332 288 159.973 288C124.734 288 96.035 259.25 96.035 224ZM320.059 400H191.941C170.75 400 170.75 368 191.941 368H320.059C341.25 368 341.25 400 320.059 400ZM352.027 288C316.668 288 287.969 259.25 287.969 224C287.969 199.75 301.652 178.75 321.633 168C320.906 170.625 320.059 173.25 320.059 176C320.059 193.75 334.348 208 352.027 208S383.996 193.75 383.996 176C383.996 173.25 383.148 170.625 382.422 168C402.281 178.75 415.965 199.75 415.965 224C415.965 259.25 387.266 288 352.027 288Z" })
  }
));
FaceRollingEyesSolid.displayName = "FaceRollingEyesSolid";
var FaceRollingEyes_default = FaceRollingEyesSolid;
