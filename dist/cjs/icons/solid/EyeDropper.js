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
var EyeDropper_exports = {};
__export(EyeDropper_exports, {
  default: () => EyeDropper_default
});
module.exports = __toCommonJS(EyeDropper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EyeDropperSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.875 28.125C446.406 -9.375 385.594 -9.375 348.125 28.125L271.031 105.219L257.938 92.125C248.5 82.656 233.281 82.812 224 92.125L183.031 133.094C173.656 142.438 173.656 157.656 183.031 167.031L344.969 328.969C354.406 338.406 369.625 338.281 378.906 328.969L419.875 288C429.25 278.625 429.25 263.438 419.875 254.062L406.781 240.969L483.875 163.875C521.375 126.375 521.375 65.625 483.875 28.125ZM139.152 421.652C137.66 423.145 135.6 424 133.5 424H88V378.5C88 376.4 88.855 374.34 90.348 372.848L216.971 246.225L177.373 206.627L50.75 333.25C38.75 345.25 32 361.531 32 378.5V424L0 480L32 512L88 480H133.5C150.469 480 166.75 473.25 178.75 461.25L305.373 334.627L265.775 295.029L139.152 421.652Z" })
  }
));
EyeDropperSolid.displayName = "EyeDropperSolid";
var EyeDropper_default = EyeDropperSolid;
