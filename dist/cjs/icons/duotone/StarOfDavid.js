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
var StarOfDavid_exports = {};
__export(StarOfDavid_exports, {
  default: () => StarOfDavid_default
});
module.exports = __toCommonJS(StarOfDavid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarOfDavidDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M198.069 343.997H197.996L89.447 168.003H130.537L165.017 112.005H54.389C24.802 112.005 6.368 142.384 21.285 166.593L130.537 343.997H198.069ZM256 438.243L232.434 399.995H165.017L222.896 493.991C234.001 511.664 257.824 517.289 276.106 506.555C281.419 503.436 285.877 499.126 289.104 493.991L402.018 310.668L368.263 256L256 438.243ZM457.611 112.005H232.569L198.069 168.003H422.553L401.987 201.332L435.67 256L490.715 166.603C505.622 142.414 487.187 112.025 457.611 112.025L457.611 112.005Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M110.132 310.548L76.324 256L21.279 345.407C6.372 369.616 24.807 399.995 54.383 399.995H279.343L313.77 343.997H89.442L110.132 310.548ZM255.994 73.787L279.56 112.005H346.967L289.098 18.009C277.994 0.336 254.171 -5.288 235.888 5.445C230.575 8.564 226.117 12.874 222.891 18.009L110.007 201.322L143.752 256L255.994 73.787ZM490.74 345.407L381.457 168.003H313.998L422.547 343.997H381.167L346.802 399.995H457.606C487.192 399.995 505.626 369.636 490.709 345.427L490.74 345.407Z" })
    ]
  }
));
StarOfDavidDuotone.displayName = "StarOfDavidDuotone";
var StarOfDavid_default = StarOfDavidDuotone;
