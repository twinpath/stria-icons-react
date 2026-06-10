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
var FaceLaughWink_exports = {};
__export(FaceLaughWink_exports, {
  default: () => FaceLaughWink_default
});
module.exports = __toCommonJS(FaceLaughWink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughWinkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.955 200C189.293 200 200 189.312 200 176S189.293 152 175.955 152C162.707 152 152 162.688 152 176S162.707 200 175.955 200ZM391.02 272H120.98C111.414 272 103.906 280.375 105.117 290C113.957 361 174.504 416 248.008 416H263.992C337.375 416 398.043 361 406.883 290C408.094 280.375 400.586 272 391.02 272ZM263.992 384H248.008C197.754 384 154.523 350.75 140.598 304H371.402C357.477 350.75 314.246 384 263.992 384ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM285.375 207.072C293.781 210.025 302.844 205.697 305.813 197.322C310.312 184.572 322.438 175.994 336 175.994S361.688 184.572 366.188 197.322C368.531 203.9 374.688 207.994 381.281 207.994C383.063 207.994 384.844 207.697 386.625 207.072C394.938 204.135 399.313 194.994 396.375 186.666C387.344 161.135 363.094 143.992 336 143.992S284.656 161.135 275.625 186.666C272.688 194.994 277.062 204.135 285.375 207.072Z" })
  }
));
FaceLaughWinkLight.displayName = "FaceLaughWinkLight";
var FaceLaughWink_default = FaceLaughWinkLight;
