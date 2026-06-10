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
var WeightScale_exports = {};
__export(WeightScale_exports, {
  default: () => WeightScale_default
});
module.exports = __toCommonJS(WeightScale_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WeightScaleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0C158.799 0 80 78.797 80 176C80 273.201 158.799 352 256 352S432 273.201 432 176C432 78.797 353.201 0 256 0ZM256 304C185.42 304 128 246.58 128 176S185.42 48 256 48S384 105.42 384 176S326.58 304 256 304Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 64H391.773C391.635 63.832 391.471 63.688 391.332 63.52C416.713 94.021 432 133.217 432 176C432 273.201 353.201 352 256 352S80 273.201 80 176C80 133.217 95.287 94.021 120.668 63.52C120.529 63.688 120.365 63.832 120.227 64H64C28.75 64 0 92.75 0 128V448C0 483.25 28.75 512 64 512H448C483.25 512 512 483.25 512 448V128C512 92.75 483.25 64 448 64ZM256 264C278.125 264 296 246.125 296 224C296 213.5 291.75 204 285 196.875L318.75 118.25C322.25 110.125 318.375 100.75 310.25 97.25C302.25 93.75 292.75 97.5 289.25 105.75L255.75 184C233.75 184.25 216 202 216 224C216 246.125 233.875 264 256 264Z" })
    ]
  }
));
WeightScaleDuotone.displayName = "WeightScaleDuotone";
var WeightScale_default = WeightScaleDuotone;
