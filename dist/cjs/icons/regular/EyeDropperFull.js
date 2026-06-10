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
var EyeDropperFull_exports = {};
__export(EyeDropperFull_exports, {
  default: () => EyeDropperFull_default
});
module.exports = __toCommonJS(EyeDropperFull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EyeDropperFullRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.895 0C446.418 -37.475 385.709 -37.475 348.235 0L237.276 110.958L225.16 98.841C215.791 89.472 200.614 89.472 191.244 98.841S181.875 123.386 191.244 132.755L351.139 292.65C355.823 297.335 361.944 299.677 368.096 299.677S380.369 297.335 385.053 292.65C394.422 283.281 394.422 268.103 385.053 258.736L372.936 246.619L483.895 135.66C521.369 98.185 521.369 37.476 483.895 0ZM43.387 312.591C31.397 324.582 24.662 340.843 24.662 357.8V403.271L3.903 439.599C-2.722 451.191 -0.769 465.781 8.672 475.222C18.114 484.662 32.703 486.615 44.295 479.994L80.625 459.234H126.094C143.051 459.234 159.313 452.498 171.303 440.507L312.526 299.285L184.61 171.371L43.387 312.591Z" })
  }
));
EyeDropperFullRegular.displayName = "EyeDropperFullRegular";
var EyeDropperFull_default = EyeDropperFullRegular;
