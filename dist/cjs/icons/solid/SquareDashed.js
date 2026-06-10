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
var SquareDashed_exports = {};
__export(SquareDashed_exports, {
  default: () => SquareDashed_default
});
module.exports = __toCommonJS(SquareDashed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDashedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 392V352H0V392C0 440.531 39.469 480 88 480H128V416H88C74.781 416 64 405.234 64 392ZM64 192H0V320H64V192ZM160 480H288V416H160V480ZM0 120V160H64V120C64 106.766 74.781 96 88 96H128V32H88C39.469 32 0 71.469 0 120ZM160 96H288V32H160V96ZM360 32H320V96H360C373.219 96 384 106.766 384 120V160H448V120C448 71.469 408.531 32 360 32ZM384 320H448V192H384V320ZM384 392C384 405.234 373.219 416 360 416H320V480H360C408.531 480 448 440.531 448 392V352H384V392Z" })
  }
));
SquareDashedSolid.displayName = "SquareDashedSolid";
var SquareDashed_default = SquareDashedSolid;
