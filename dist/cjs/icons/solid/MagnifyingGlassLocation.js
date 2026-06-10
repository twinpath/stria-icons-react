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
var MagnifyingGlassLocation_exports = {};
__export(MagnifyingGlassLocation_exports, {
  default: () => MagnifyingGlassLocation_default
});
module.exports = __toCommonJS(MagnifyingGlassLocation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MagnifyingGlassLocationSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M236 176C236 191.459 223.459 204 208 204S180 191.459 180 176S192.541 148 208 148S236 160.541 236 176ZM504.971 482.344L482.344 504.971C472.971 514.344 457.775 514.344 448.402 504.971L324.053 380.623C290.902 402.953 250.977 416 208 416C93.125 416 0 322.875 0 208S93.125 0 208 0S416 93.125 416 208C416 250.977 402.953 290.902 380.623 324.053L504.971 448.402C514.344 457.775 514.344 472.971 504.971 482.344ZM294.115 182.188C294.115 134.5 255.615 96 207.928 96C160.385 96 121.885 134.5 121.885 182.188C121.885 220.541 178.178 290.688 199.76 316.209C201.803 318.541 204.719 320 207.928 320C211.135 320 214.197 318.541 216.24 316.209C237.822 290.688 294.115 220.541 294.115 182.188Z" })
  }
));
MagnifyingGlassLocationSolid.displayName = "MagnifyingGlassLocationSolid";
var MagnifyingGlassLocation_default = MagnifyingGlassLocationSolid;
