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
const MagnifyingGlassLocationDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 0C93.125 0 0 93.125 0 208S93.125 416 208 416S416 322.875 416 208S322.875 0 208 0ZM216.24 316.209C214.197 318.541 211.135 320 207.928 320C204.719 320 201.803 318.541 199.76 316.209C178.178 290.688 121.885 220.541 121.885 182.188C121.885 134.5 160.385 96 207.928 96C255.615 96 294.115 134.5 294.115 182.188C294.115 220.541 237.822 290.688 216.24 316.209Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.086 448.402L380.738 324.053C365.709 346.361 346.477 365.594 324.168 380.623L448.518 504.971C457.891 514.344 473.086 514.344 482.459 504.971L505.086 482.344C514.459 472.971 514.459 457.775 505.086 448.402ZM208.043 96C160.5 96 122 134.5 122 182.188C122 220.541 178.293 290.688 199.875 316.209C201.918 318.541 204.834 320 208.043 320C211.25 320 214.313 318.541 216.355 316.209C237.938 290.688 294.23 220.541 294.23 182.188C294.23 134.5 255.73 96 208.043 96ZM208.115 204C192.656 204 180.115 191.459 180.115 176S192.656 148 208.115 148S236.115 160.541 236.115 176S223.574 204 208.115 204Z" })
    ]
  }
));
MagnifyingGlassLocationDuotone.displayName = "MagnifyingGlassLocationDuotone";
var MagnifyingGlassLocation_default = MagnifyingGlassLocationDuotone;
