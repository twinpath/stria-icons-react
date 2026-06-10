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
var __exports = {};
__export(__exports, {
  default: () => __default
});
module.exports = __toCommonJS(__exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Icon2Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 431.963C320 458.484 298.516 480 272 480H48.002C28.409 480 10.768 468.085 3.456 449.883C-3.841 431.682 0.643 410.854 14.8 397.281L188.454 230.779C199.704 219.708 206.126 204.571 206.126 188.496C206.126 172.453 199.704 157.316 188.048 145.87C163.361 121.57 123.174 121.602 98.518 145.839L83.236 162.445C65.237 181.929 34.878 183.149 15.393 165.072C-4.06 147.059 -5.231 116.66 12.768 97.208L29.659 78.944C93.033 16.615 193.501 16.647 255.282 77.287C285.485 106.934 302.125 146.433 302.125 188.496C302.125 230.591 285.485 270.09 255.266 299.769L167.486 383.927H272C298.516 383.927 320 405.443 320 431.963Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
Icon2Duotone.displayName = "Icon2Duotone";
var __default = Icon2Duotone;
