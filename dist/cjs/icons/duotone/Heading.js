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
var Heading_exports = {};
__export(Heading_exports, {
  default: () => Heading_default
});
module.exports = __toCommonJS(Heading_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 448C448 465.672 433.674 480 416 480H320C302.326 480 288 465.672 288 448C288 430.326 302.326 416 320 416V288H128V416C145.674 416 160 430.326 160 448C160 465.672 145.674 480 128 480H32C14.326 480 0 465.672 0 448C0 430.326 14.326 416 32 416V96C14.326 96 0 81.672 0 64C0 46.326 14.326 32 32 32H128C145.674 32 160 46.326 160 64C160 81.672 145.674 96 128 96V192H320V96C302.326 96 288 81.672 288 64C288 46.326 302.326 32 320 32H416C433.674 32 448 46.326 448 64C448 81.672 433.674 96 416 96V416C433.674 416 448 430.326 448 448Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
HeadingDuotone.displayName = "HeadingDuotone";
var Heading_default = HeadingDuotone;
