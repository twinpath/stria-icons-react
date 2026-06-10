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
var HeadSideHeart_exports = {};
__export(HeadSideHeart_exports, {
  default: () => HeadSideHeart_default
});
module.exports = __toCommonJS(HeadSideHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideHeartDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.256 275C488.256 227.875 460.756 123.25 436.131 88.25C397.13 32.875 333.754 0 266.128 0H192.002C86.001 0 0 86 0 192C0 246.5 23.25 298.5 64.001 334.875V512H320.004V448H384.005C419.38 448 448.006 419.375 448.006 384V320H480.006C490.881 320 500.881 314.5 506.756 305.375C512.757 296.375 513.632 284.875 509.256 275ZM330.385 198.314L247.392 283.873C242.005 289.377 233.439 289.377 228.052 283.873L145.058 198.314C120.949 173.299 122.418 132.143 149.344 109.127C172.848 89.111 207.731 92.74 229.153 114.881L237.599 123.635L246.044 114.881C267.591 92.74 302.6 89.111 325.975 109.127C353.03 132.143 354.499 173.299 330.385 198.314Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M330.383 198.314L247.39 283.873C242.003 289.377 233.437 289.377 228.05 283.873L145.057 198.314C120.947 173.299 122.416 132.143 149.342 109.127C172.846 89.111 207.729 92.74 229.151 114.881L237.597 123.635L246.042 114.881C267.589 92.74 302.598 89.111 325.973 109.127C353.028 132.143 354.497 173.299 330.383 198.314Z" })
    ]
  }
));
HeadSideHeartDuotone.displayName = "HeadSideHeartDuotone";
var HeadSideHeart_default = HeadSideHeartDuotone;
