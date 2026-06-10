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
var EmptySet_exports = {};
__export(EmptySet_exports, {
  default: () => EmptySet_default
});
module.exports = __toCommonJS(EmptySet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EmptySetDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M76.736 389.908C48.766 352.527 32 306.277 32 256C32 132.289 132.289 32 256 32C306.297 32 352.563 48.779 389.952 76.77L332.327 134.381C310.141 120.408 284.1 112 256 112C176.598 112 112 176.598 112 256C112 284.086 120.404 310.117 134.365 332.295L76.736 389.908ZM377.604 179.648C391.587 201.838 400.001 227.891 400.001 256C400.001 335.402 335.403 400 256 400C227.891 400 201.842 391.586 179.653 377.605L122.037 435.223C159.428 463.217 205.698 480 256 480C379.712 480 480.001 379.711 480.001 256C480.001 205.695 463.218 159.422 435.22 122.031L377.604 179.648Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M54.592 502.652C42.129 515.115 21.922 515.116 9.458 502.654L9.336 502.532C-3.112 490.086 -3.112 469.721 9.336 457.276L457.408 9.332C469.854 -3.111 490.219 -3.111 502.665 9.333L502.665 9.333C515.111 21.777 515.112 42.14 502.667 54.585L54.592 502.652Z" })
    ]
  }
));
EmptySetDuotone.displayName = "EmptySetDuotone";
var EmptySet_default = EmptySetDuotone;
