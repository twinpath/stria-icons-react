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
var Seal_exports = {};
__export(Seal_exports, {
  default: () => Seal_default
});
module.exports = __toCommonJS(Seal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SealDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.236 289.942L447.648 335.53V400.001C447.648 426.51 426.158 448 399.648 448H335.177L289.589 493.588C270.843 512.332 240.453 512.332 221.707 493.588L176.119 448H111.648C85.138 448 63.648 426.51 63.648 400.001V335.53L18.06 289.942C-0.687 271.196 -0.687 240.803 18.06 222.059L63.648 176.472V112.001C63.648 85.491 85.138 64.001 111.648 64.001H176.119L221.707 18.413C240.453 -0.333 270.843 -0.333 289.589 18.413L335.177 64.001H399.648C426.158 64.001 447.648 85.491 447.648 112.001V176.472L493.236 222.059C511.983 240.803 511.983 271.196 493.236 289.942Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
SealDuotone.displayName = "SealDuotone";
var Seal_default = SealDuotone;
