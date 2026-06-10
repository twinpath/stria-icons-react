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
var MagnifyingGlassPlus_exports = {};
__export(MagnifyingGlassPlus_exports, {
  default: () => MagnifyingGlassPlus_default
});
module.exports = __toCommonJS(MagnifyingGlassPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MagnifyingGlassPlusThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.656 498.344L360.465 349.152C394.828 312.055 416 262.555 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C262.555 416 312.055 394.828 349.152 360.465L498.344 509.656C499.906 511.219 501.938 512 504 512S508.094 511.219 509.656 509.656C512.781 506.531 512.781 501.469 509.656 498.344ZM208 400C102.133 400 16 313.867 16 208S102.133 16 208 16S400 102.133 400 208S313.867 400 208 400ZM296 200H216V120C216 115.578 212.42 112 208 112S200 115.578 200 120V200H120C115.58 200 112 203.578 112 208S115.578 216 120 216H200V296C200 300.422 203.578 304 208 304C212.42 304 216 300.422 216 296V216H296C300.42 216 304 212.422 304 208S300.42 200 296 200Z" })
  }
));
MagnifyingGlassPlusThin.displayName = "MagnifyingGlassPlusThin";
var MagnifyingGlassPlus_default = MagnifyingGlassPlusThin;
