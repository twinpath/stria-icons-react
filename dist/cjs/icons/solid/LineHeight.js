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
var LineHeight_exports = {};
__export(LineHeight_exports, {
  default: () => LineHeight_default
});
module.exports = __toCommonJS(LineHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LineHeightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 150.625C134.25 156.875 142.438 160 150.625 160S167 156.875 173.25 150.625C185.75 138.125 185.75 117.875 173.25 105.375L109.25 41.375C96.75 28.875 76.5 28.875 64 41.375L0 105.375C-12.5 117.875 -12.5 138.125 0 150.625S32.75 163.125 45.25 150.625L54.625 141.25V370.75L45.25 361.375C32.75 348.875 12.5 348.875 0 361.375S-12.5 394.125 0 406.625L64 470.625C70.25 476.875 78.438 480 86.625 480S103 476.875 109.25 470.625L173.25 406.625C185.75 394.125 185.75 373.875 173.25 361.375S140.5 348.875 128 361.375L118.625 370.75V141.25L128 150.625ZM278.625 128H534.625C552.299 128 566.625 113.674 566.625 96S552.299 64 534.625 64H278.625C260.951 64 246.625 78.326 246.625 96S260.951 128 278.625 128ZM534.625 224H278.625C260.951 224 246.625 238.326 246.625 256S260.951 288 278.625 288H534.625C552.299 288 566.625 273.674 566.625 256S552.299 224 534.625 224ZM534.625 384H278.625C260.951 384 246.625 398.326 246.625 416S260.951 448 278.625 448H534.625C552.299 448 566.625 433.674 566.625 416S552.299 384 534.625 384Z" })
  }
));
LineHeightSolid.displayName = "LineHeightSolid";
var LineHeight_default = LineHeightSolid;
