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
var PaintBrush_exports = {};
__export(PaintBrush_exports, {
  default: () => PaintBrush_default
});
module.exports = __toCommonJS(PaintBrush_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaintBrushSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.186 288.92C150.877 291.076 128.205 301.113 110.807 318.619C88.408 341.129 78.488 371.516 81.062 401.004C83.316 426.828 64.072 448.004 32.035 448.004C14.342 448.004 0 462.328 0 480.002C0 497.672 14.342 512 32.035 512C32.035 512 60.191 512 85.811 512C140.402 512 218.959 504.432 258.098 465.082C281.771 441.258 290.59 408.723 286.289 377.697L175.186 288.92ZM499.477 17.463C490.498 7.182 478.076 1.025 464.469 0.135C450.922 -0.865 437.75 3.713 427.553 12.729L222.26 193.719C215.846 199.438 210.121 206.156 205.742 213.125C196.283 228.078 191.98 244.791 191.961 261.324L302.311 349.5C325.336 344.064 345.016 330.156 357.725 310.057L504.137 78.49C516.15 59.492 514.242 34.398 499.477 17.463Z" })
  }
));
PaintBrushSolid.displayName = "PaintBrushSolid";
var PaintBrush_default = PaintBrushSolid;
