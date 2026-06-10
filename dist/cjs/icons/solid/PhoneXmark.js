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
var PhoneXmark_exports = {};
__export(PhoneXmark_exports, {
  default: () => PhoneXmark_default
});
module.exports = __toCommonJS(PhoneXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneXmarkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.094 351.248L384.609 304.748C371.828 299.217 356.813 302.936 348.125 313.717L304.078 367.529C234.828 333.529 178.531 277.248 144.547 208.029L198.375 163.934C209.125 155.152 212.797 140.277 207.359 127.496L160.828 18.934C154.734 5.027 139.656 -2.598 124.969 0.809L24.219 24.059C9.969 27.309 0 39.84 0 54.496C0 306.779 205.234 512 457.484 512C472.156 512 484.688 502.031 487.953 487.781L511.203 386.998C514.578 372.404 507 357.248 493.094 351.248ZM348.119 62.057L382.06 95.999L348.116 129.943C338.743 139.316 338.738 154.502 348.118 163.882C357.492 173.257 372.681 173.26 382.057 163.884L416.001 129.94L449.943 163.881C459.32 173.258 474.508 173.257 483.882 163.882C493.257 154.508 493.258 139.32 483.881 129.943L449.94 96.001L483.884 62.057C493.26 52.681 493.257 37.492 483.882 28.118S459.319 18.74 449.942 28.116L415.999 62.06L382.057 28.119C372.68 18.742 357.492 18.743 348.118 28.118C338.744 37.491 338.736 52.675 348.119 62.057Z" })
  }
));
PhoneXmarkSolid.displayName = "PhoneXmarkSolid";
var PhoneXmark_default = PhoneXmarkSolid;
