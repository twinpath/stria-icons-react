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
var DropletDegree_exports = {};
__export(DropletDegree_exports, {
  default: () => DropletDegree_default
});
module.exports = __toCommonJS(DropletDegree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletDegreeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.99 32C180.74 32 169.457 38.32 165.438 51.361C122.938 189.281 32 226.906 32 324.141C32 410.219 103.562 480 192 480S352 410.219 352 324.141C352 226.359 261.271 190.047 218.562 51.361C214.932 38.596 203.479 32 191.99 32ZM320 324.141C320 392.438 262.58 448 192 448S64 392.438 64 324.141C64 283.426 84.559 255.068 113.014 215.818C138.684 180.41 170.256 136.865 191.998 73.17C213.846 137.254 245.457 180.715 271.156 216.049C299.512 255.033 320 283.199 320 324.141ZM352 32C316.654 32 288 60.654 288 96S316.654 160 352 160S416 131.346 416 96S387.346 32 352 32ZM352 128C334.355 128 320 113.645 320 96S334.355 64 352 64S384 78.355 384 96S369.645 128 352 128Z" })
  }
));
DropletDegreeLight.displayName = "DropletDegreeLight";
var DropletDegree_default = DropletDegreeLight;
