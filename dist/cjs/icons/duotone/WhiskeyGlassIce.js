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
var WhiskeyGlassIce_exports = {};
__export(WhiskeyGlassIce_exports, {
  default: () => WhiskeyGlassIce_default
});
module.exports = __toCommonJS(WhiskeyGlassIce_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WhiskeyGlassIceDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 336H242.198L233.705 327.484C220.766 314.543 220.766 293.582 233.705 280.641L280.545 233.672C282.151 232.066 284.168 231.266 285.994 230.062C281.77 217.332 270.149 208 256 208H176C158.326 208 144 222.328 144 240V304C144 321.672 158.326 336 176 336ZM479.955 32H32.045C12.549 32 -2.324 49.254 0.301 68.508L56.289 425.109C60.789 456.617 87.783 480 119.778 480H392.723C424.467 480 451.586 456.617 456.086 425.109L511.699 68.508C514.324 49.254 499.451 32 479.955 32ZM392.723 416L119.514 415.184L69.389 96H442.637L392.723 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M79 160L119.074 415.184L392.283 416L432.215 160H79ZM373.916 327.484L327.076 374.453C314.137 387.391 293.045 387.391 280.105 374.453L241.758 336H175.561C157.887 336 143.561 321.672 143.561 304V240C143.561 222.328 157.887 208 175.561 208H255.561C269.709 208 281.33 217.332 285.555 230.062C298.441 221.539 315.742 222.34 327.076 233.672L373.916 280.641C386.855 293.582 386.855 314.543 373.916 327.484Z" })
    ]
  }
));
WhiskeyGlassIceDuotone.displayName = "WhiskeyGlassIceDuotone";
var WhiskeyGlassIce_default = WhiskeyGlassIceDuotone;
