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
var Helicopter_exports = {};
__export(Helicopter_exports, {
  default: () => Helicopter_default
});
module.exports = __toCommonJS(Helicopter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HelicopterLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 416C615.178 416 608 423.178 608 432C608 458.467 586.467 480 560 480H240C231.178 480 224 487.178 224 496S231.178 512 240 512H560C604.114 512 640 476.111 640 432C640 423.178 632.823 416 624 416ZM304 400H568C590.057 400 608 382.057 608 360C608 232.074 503.926 128 376 128H368V32H560C568.823 32 576 24.822 576 16S568.823 0 560 0H144C135.178 0 128 7.178 128 16S135.178 32 144 32H336V128H119.518L78.719 73.598C74.206 67.588 67.03 64 59.518 64H24.01C16.569 64 9.672 67.363 5.094 73.229C0.514 79.094 -1.078 86.6 0.727 93.818L23.788 186.064C26.895 198.49 35.848 208.748 47.739 213.506L186.973 270.631L271.999 384C279.512 394.018 291.475 400 304 400ZM416 164.031C507.178 182.613 576 263.414 576 360C576 364.41 572.413 368 568 368H416V164.031ZM207.282 244.373L199.12 241.025L59.627 183.795C57.282 182.857 55.446 180.752 54.832 178.303L34.258 96H55.522L93.918 147.199L103.518 160H376C378.702 160 381.327 160.299 384 160.406V368H304C301.532 368 299.079 366.773 297.6 364.801L212.575 251.432L207.282 244.373Z" })
  }
));
HelicopterLight.displayName = "HelicopterLight";
var Helicopter_default = HelicopterLight;
