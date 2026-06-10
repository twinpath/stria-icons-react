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
var MobileNotch_exports = {};
__export(MobileNotch_exports, {
  default: () => MobileNotch_default
});
module.exports = __toCommonJS(MobileNotch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MobileNotchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 0H96C51.818 0 16 35.816 16 80V432C16 476.182 51.818 512 96 512H288C332.184 512 368 476.182 368 432V80C368 35.816 332.184 0 288 0ZM304 432C304 440.822 296.822 448 288 448H96C87.178 448 80 440.822 80 432V80C80 71.178 87.178 64 96 64H128V80C128 88.836 135.164 96 144 96H240C248.838 96 256 88.836 256 80V64H288C296.822 64 304 71.178 304 80V432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 64H256V80C256 88.836 248.838 96 240 96H144C135.164 96 128 88.836 128 80V64H96C87.178 64 80 71.178 80 80V432C80 440.822 87.178 448 96 448H288C296.822 448 304 440.822 304 432V80C304 71.178 296.822 64 288 64ZM240 416H144C135.164 416 128 408.836 128 400C128 391.162 135.164 384 144 384H240C248.838 384 256 391.162 256 400C256 408.836 248.838 416 240 416Z" })
    ]
  }
));
MobileNotchDuotone.displayName = "MobileNotchDuotone";
var MobileNotch_default = MobileNotchDuotone;
