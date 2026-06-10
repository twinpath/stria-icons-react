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
var Plane_exports = {};
__export(Plane_exports, {
  default: () => Plane_default
});
module.exports = __toCommonJS(Plane_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M214.663 192H365.51L260.414 8.062C257.852 3.609 251.633 0 246.508 0H181.006C170.381 0 162.694 10.172 165.631 20.391L214.663 192ZM165.631 491.594C162.694 501.812 170.381 512 181.006 512H246.508C252.227 512 257.539 508.922 260.383 503.938L365.51 320H214.663L165.631 491.594Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.998 192C515.343 192 576 220.656 576 256S515.343 320 479.998 320H111.991L68.802 377.594C65.771 381.625 61.021 384 55.99 384H15.989C5.582 384 -2.043 374.219 0.488 364.125L31.989 256L0.488 147.875C-2.043 137.781 5.582 128 15.989 128H55.99C61.021 128 65.771 130.375 68.802 134.406L111.991 192H479.998Z" })
    ]
  }
));
PlaneDuotone.displayName = "PlaneDuotone";
var Plane_default = PlaneDuotone;
