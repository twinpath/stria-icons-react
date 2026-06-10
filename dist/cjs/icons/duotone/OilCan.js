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
var OilCan_exports = {};
__export(OilCan_exports, {
  default: () => OilCan_default
});
module.exports = __toCommonJS(OilCan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OilCanDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H176C167.164 64 160 71.162 160 80V96C160 104.836 167.164 112 176 112H224V160H288V112H336C344.838 112 352 104.836 352 96V80C352 71.162 344.838 64 336 64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M637.875 168.031C634.391 161.969 627.391 158.922 620.531 160.375L450.828 197.984L400.859 167.547C392.781 162.609 383.25 160 373.328 160H48C21.531 160 0 181.531 0 208V272.297C0 291.359 11.281 308.625 28.75 316.281L96 345.699V374.001C96 397.156 117.531 416 144 416H400.766C414.656 416 427.844 410.797 437.359 401.25L635.75 186.859C640.5 181.734 641.359 174.109 637.875 168.031ZM96 293.301L48 272.297V208H96V293.301Z" })
    ]
  }
));
OilCanDuotone.displayName = "OilCanDuotone";
var OilCan_default = OilCanDuotone;
