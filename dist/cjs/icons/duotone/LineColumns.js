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
var LineColumns_exports = {};
__export(LineColumns_exports, {
  default: () => LineColumns_default
});
module.exports = __toCommonJS(LineColumns_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LineColumnsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 288H320C302.326 288 288 302.326 288 320S302.326 352 320 352H480C497.674 352 512 337.674 512 320S497.674 288 480 288ZM480 416H320C302.326 416 288 430.326 288 448S302.326 480 320 480H480C497.674 480 512 465.674 512 448S497.674 416 480 416ZM480 160H320C302.326 160 288 174.326 288 192S302.326 224 320 224H480C497.674 224 512 209.674 512 192S497.674 160 480 160ZM320 96H480C497.674 96 512 81.674 512 64S497.674 32 480 32H320C302.326 32 288 46.326 288 64S302.326 96 320 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 416H32C14.326 416 0 430.326 0 448S14.326 480 32 480H192C209.674 480 224 465.674 224 448S209.674 416 192 416ZM32 96H192C209.674 96 224 81.674 224 64S209.674 32 192 32H32C14.326 32 0 46.326 0 64S14.326 96 32 96ZM192 160H32C14.326 160 0 174.326 0 192S14.326 224 32 224H192C209.674 224 224 209.674 224 192S209.674 160 192 160ZM192 288H32C14.326 288 0 302.326 0 320S14.326 352 32 352H192C209.674 352 224 337.674 224 320S209.674 288 192 288Z" })
    ]
  }
));
LineColumnsDuotone.displayName = "LineColumnsDuotone";
var LineColumns_default = LineColumnsDuotone;
