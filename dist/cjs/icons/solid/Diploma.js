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
var Diploma_exports = {};
__export(Diploma_exports, {
  default: () => Diploma_default
});
module.exports = __toCommonJS(Diploma_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiplomaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M539.26 144H473.156C477.494 134.189 480 123.398 480 112C480 68.148 444.324 32 400.473 32C367.695 32 345.527 47.084 320 78.949C294.473 47.084 272.305 32 239.529 32C195.676 32 160 68.148 160 112C160 123.398 162.506 134.189 166.844 144H96C42.98 144 0 192.471 0 272S42.98 416 96 416L256 381.715V480L320 448L384 480V382.012L539.26 416C594.898 416 640 351.527 640 272C640 192.469 594.898 144 539.26 144ZM256 316.26L93.438 351.096C84.68 346.031 64 319.668 64 272C64 218.664 89.891 208 96 208H256V316.26ZM239.529 143.529C222.115 143.529 208 129.414 208 112S222.115 80.471 239.529 80.471C255.219 80.471 266.797 83.07 307.389 143.529H239.529ZM332.611 143.529C373.205 83.07 384.781 80.471 400.473 80.471C417.887 80.471 432 94.586 432 112S417.887 143.529 400.473 143.529H332.611ZM542.865 351.273L384 316.494V208H539.26C551.875 208 576 223.154 576 272C576 316.51 555.967 346.332 542.865 351.273Z" })
  }
));
DiplomaSolid.displayName = "DiplomaSolid";
var Diploma_default = DiplomaSolid;
