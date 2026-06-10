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
var Pager_exports = {};
__export(Pager_exports, {
  default: () => Pager_default
});
module.exports = __toCommonJS(Pager_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PagerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 224C448 241.625 433.625 256 416 256H96C78.375 256 64 241.625 64 224V160C64 142.375 78.375 128 96 128H416C433.625 128 448 142.375 448 160V224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 64H64C28.625 64 0 92.625 0 128V384C0 419.375 28.625 448 64 448H448C483.375 448 512 419.375 512 384V128C512 92.625 483.375 64 448 64ZM160 368H80C71.125 368 64 360.875 64 352V336C64 327.125 71.125 320 80 320H160V368ZM288 352C288 360.875 280.875 368 272 368H192V320H272C280.875 320 288 327.125 288 336V352ZM448 224C448 241.625 433.625 256 416 256H96C78.375 256 64 241.625 64 224V160C64 142.375 78.375 128 96 128H416C433.625 128 448 142.375 448 160V224Z" })
    ]
  }
));
PagerDuotone.displayName = "PagerDuotone";
var Pager_default = PagerDuotone;
