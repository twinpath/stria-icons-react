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
var Car_exports = {};
__export(Car_exports, {
  default: () => Car_default
});
module.exports = __toCommonJS(Car_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104 256C81.91 256 64 273.908 64 296C64 318.09 81.91 336 104 336S144 318.09 144 296C144 273.908 126.09 256 104 256ZM104 320C90.766 320 80 309.232 80 296C80 282.766 90.766 272 104 272S128 282.766 128 296C128 309.232 117.234 320 104 320ZM408 256C385.91 256 368 273.908 368 296C368 318.09 385.91 336 408 336S448 318.09 448 296C448 273.908 430.09 256 408 256ZM408 320C394.766 320 384 309.232 384 296C384 282.766 394.766 272 408 272S432 282.766 432 296C432 309.232 421.234 320 408 320ZM454.783 195.693L419.172 83.531C409.391 52.703 381.938 32 350.844 32H161.156C130.062 32 102.609 52.703 92.828 83.531L57.217 195.693C24.211 205.555 0 235.789 0 272V472C0 476.418 3.582 480 8 480S16 476.418 16 472V400H496V472C496 476.418 499.582 480 504 480S512 476.418 512 472V272C512 235.789 487.789 205.555 454.783 195.693ZM108.078 88.375C115.734 64.219 137.062 48 161.156 48H350.844C374.938 48 396.266 64.219 403.922 88.375L436.982 192.502C435.303 192.396 433.707 192 432 192H80C78.293 192 76.697 192.396 75.018 192.502L108.078 88.375ZM496 384H16V272C16 236.709 44.711 208 80 208H432C467.289 208 496 236.709 496 272V384Z" })
  }
));
CarThin.displayName = "CarThin";
var Car_default = CarThin;
