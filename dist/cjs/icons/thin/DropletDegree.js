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
const DropletDegreeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.99 32C180.742 32 169.457 38.32 165.438 51.361C122.938 189.281 32 226.906 32 324.141C32 410.219 103.562 480 192 480S352 410.219 352 324.141C352 226.359 261.271 190.047 218.562 51.361C214.932 38.596 203.479 32 191.99 32ZM336 324.141C336 401.26 271.402 464 192 464S48 401.26 48 324.141C48 278.236 70.975 246.549 100.061 206.428C128.053 167.816 159.781 124.055 180.729 56.074C182.975 48.787 189.354 48 191.99 48C193.49 48 201.078 48.373 203.271 56.07C224.338 124.477 256.086 168.127 284.098 206.637C313.096 246.506 336 277.998 336 324.141ZM352 32C316.75 32 288 60.75 288 96S316.75 160 352 160S416 131.25 416 96S387.25 32 352 32ZM352 144C325.533 144 304 122.467 304 96S325.533 48 352 48S400 69.533 400 96S378.467 144 352 144Z" })
  }
));
DropletDegreeThin.displayName = "DropletDegreeThin";
var DropletDegree_default = DropletDegreeThin;
