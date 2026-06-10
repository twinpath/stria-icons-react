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
var Shovel_exports = {};
__export(Shovel_exports, {
  default: () => Shovel_default
});
module.exports = __toCommonJS(Shovel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShovelSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.624 99.885L412.115 9.376C399.619 -3.12 379.367 -3.131 366.859 9.376L321.605 54.631C292.144 84.09 286.234 127.943 303.146 163.596L197.367 269.375L152.111 224.121C139.611 211.617 119.358 211.617 106.858 224.121L38.973 292.004C-11.033 342.008 -6.283 473.028 16.346 495.657C38.973 518.282 169.988 523.032 219.996 473.028L287.879 405.141C300.381 392.641 300.381 372.391 287.879 359.887L242.623 314.633L348.4 208.854C384.05 225.766 427.91 219.855 457.369 190.394L502.624 145.14C515.13 132.633 515.12 112.381 502.624 99.885ZM412.115 145.14C399.63 157.625 379.334 157.615 366.859 145.14C354.386 132.666 354.375 112.371 366.859 99.885L389.488 77.258L434.742 122.513L412.115 145.14Z" })
  }
));
ShovelSolid.displayName = "ShovelSolid";
var Shovel_default = ShovelSolid;
