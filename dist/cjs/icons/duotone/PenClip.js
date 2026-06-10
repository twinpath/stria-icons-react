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
var PenClip_exports = {};
__export(PenClip_exports, {
  default: () => PenClip_default
});
module.exports = __toCommonJS(PenClip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenClipDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M498.219 60.116L438.103 0C419.356 -18.747 388.86 -18.747 370.113 0L291 79.238L418.981 207.219L498.219 128.106C516.966 109.359 516.966 78.863 498.219 60.116Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M251.101 41.962C235.479 26.34 210.232 26.34 194.61 41.962L75.753 160.695C69.503 166.944 69.503 177.067 75.753 183.316L87.062 194.626C93.311 200.875 103.435 200.875 109.684 194.626L222.856 81.579L256.789 115.513L94 278.302C41.508 330.794 8.388 399.659 0.139 473.398V473.648C-1.486 488.896 11.387 501.769 26.635 500.144C100.499 492.02 169.364 458.9 221.981 406.283L418.701 209.562L251.101 41.962Z" })
    ]
  }
));
PenClipDuotone.displayName = "PenClipDuotone";
var PenClip_default = PenClipDuotone;
