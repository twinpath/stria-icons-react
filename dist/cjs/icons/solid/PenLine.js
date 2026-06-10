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
var PenLine_exports = {};
__export(PenLine_exports, {
  default: () => PenLine_default
});
module.exports = __toCommonJS(PenLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.937 142.084C516.687 123.316 516.687 92.91 497.937 74.158L437.847 14.062C419.097 -4.688 388.662 -4.688 369.912 14.062L313.384 70.611L441.378 198.633L497.937 142.084ZM290.75 93.232L31.037 352.955C28.802 355.189 27.281 358.033 26.66 361.131L0.32 492.854C-1.92 504.049 7.951 513.92 19.144 511.68L150.855 485.334C153.953 484.715 156.796 483.193 159.031 480.961L418.75 221.258L290.75 93.232ZM552 464H248C234.746 464 224 474.744 224 488C224 501.254 234.746 512 248 512H552C565.253 512 576 501.254 576 488C576 474.744 565.253 464 552 464Z" })
  }
));
PenLineSolid.displayName = "PenLineSolid";
var PenLine_default = PenLineSolid;
