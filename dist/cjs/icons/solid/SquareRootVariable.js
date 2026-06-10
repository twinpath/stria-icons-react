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
var SquareRootVariable_exports = {};
__export(SquareRootVariable_exports, {
  default: () => SquareRootVariable_default
});
module.exports = __toCommonJS(SquareRootVariable_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareRootVariableSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M566.625 233.375C554.125 220.875 533.875 220.875 521.375 233.375L480 274.75L438.625 233.375C426.125 220.875 405.875 220.875 393.375 233.375S380.875 266.125 393.375 278.625L434.75 320L393.375 361.375C380.875 373.875 380.875 394.125 393.375 406.625C399.625 412.875 407.812 416 416 416S432.375 412.875 438.625 406.625L480 365.25L521.375 406.625C527.625 412.875 535.812 416 544 416S560.375 412.875 566.625 406.625C579.125 394.125 579.125 373.875 566.625 361.375L525.25 320L566.625 278.625C579.125 266.125 579.125 245.875 566.625 233.375ZM576 40C576 17.908 558.092 0 536 0H320.01C301.781 0 285.855 12.322 281.281 29.969L194.875 363.25L131.219 245.031C124.244 232.078 110.721 224 96.008 224H40C17.908 224 0 241.908 0 264S17.908 304 40 304H72.094L172.781 490.969C179.812 504.031 193.406 512 208 512C209.594 512 211.188 511.906 212.781 511.719C229.125 509.75 242.594 497.969 246.719 482.031L350.938 80H536C558.092 80 576 62.092 576 40Z" })
  }
));
SquareRootVariableSolid.displayName = "SquareRootVariableSolid";
var SquareRootVariable_default = SquareRootVariableSolid;
