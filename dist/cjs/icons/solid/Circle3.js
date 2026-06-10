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
var Circle3_exports = {};
__export(Circle3_exports, {
  default: () => Circle3_default
});
module.exports = __toCommonJS(Circle3_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Circle3Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM268 384H223.359C195.125 384 170.156 366 161.234 339.219C157.047 326.625 163.844 313.031 176.422 308.844C189 304.781 202.594 311.469 206.766 324.031C209.156 331.188 215.812 336 223.359 336H268C287.844 336 304 319.844 304 300S287.844 264 268 264H216C206.109 264 197.219 257.938 193.625 248.688C190.047 239.469 192.484 229 199.781 222.312L250.297 176H184C170.75 176 160 165.25 160 152S170.75 128 184 128H312C321.891 128 330.781 134.062 334.375 143.312C337.953 152.531 335.516 163 328.219 169.688L277.156 216.5C319.188 221.062 352 256.781 352 300C352 346.312 314.312 384 268 384Z" })
  }
));
Circle3Solid.displayName = "Circle3Solid";
var Circle3_default = Circle3Solid;
