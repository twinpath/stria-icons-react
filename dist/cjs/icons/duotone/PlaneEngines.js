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
var PlaneEngines_exports = {};
__export(PlaneEngines_exports, {
  default: () => PlaneEngines_default
});
module.exports = __toCommonJS(PlaneEngines_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneEnginesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M165.631 491.594C162.694 501.812 170.381 512 181.006 512H246.508C252.227 512 257.539 508.922 260.383 503.938L365.51 320H214.663L165.631 491.594ZM214.663 192H365.51L260.414 8.062C257.852 3.609 251.633 0 246.508 0H181.006C170.381 0 162.694 10.172 165.631 20.391L214.663 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.998 192H111.991L68.802 134.406C65.771 130.375 61.021 128 55.99 128H15.989C5.582 128 -2.043 137.781 0.489 147.875L23.184 225.779C9.897 229.67 0 241.453 0 256S9.897 282.33 23.184 286.221L0.488 364.125C-2.043 374.219 5.582 384 15.989 384H55.99C61.021 384 65.771 381.625 68.802 377.594L111.991 320H479.998C515.343 320 576 291.344 576 256S515.343 192 479.998 192ZM336.007 128C344.845 128 352.007 120.836 352.007 112V80C352.007 71.164 344.845 64 336.007 64H292.58L329.147 128H336.007ZM336.007 384H329.136L292.557 448H336.007C344.845 448 352.007 440.836 352.007 432V400C352.007 391.164 344.845 384 336.007 384Z" })
    ]
  }
));
PlaneEnginesDuotone.displayName = "PlaneEnginesDuotone";
var PlaneEngines_default = PlaneEnginesDuotone;
