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
var Droplet_exports = {};
__export(Droplet_exports, {
  default: () => Droplet_default
});
module.exports = __toCommonJS(Droplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M221.25 22.128C213.25 -6.747 171.75 -7.997 162.75 22.128C116 179.877 16 222.752 16 333.876C16 432.376 94.75 512.001 192 512.001S368 432.376 368 333.876C368 222.127 268.25 180.627 221.25 22.128ZM192 448.001C130.25 448.001 80 397.751 80 336.001C80 327.126 87.125 320.002 96 320.002S112 327.126 112 336.001C112 380.126 147.875 416.001 192 416.001C200.875 416.001 208 423.126 208 432.001C208 440.876 200.875 448.001 192 448.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 448.001C130.25 448.001 80 397.751 80 336.001C80 327.126 87.125 320.002 96 320.002S112 327.126 112 336.001C112 380.126 147.875 416.001 192 416.001C200.875 416.001 208 423.126 208 432.001C208 440.876 200.875 448.001 192 448.001Z" })
    ]
  }
));
DropletDuotone.displayName = "DropletDuotone";
var Droplet_default = DropletDuotone;
