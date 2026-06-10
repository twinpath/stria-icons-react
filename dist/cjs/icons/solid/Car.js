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
const CarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M470.789 196.371L437.883 97.643C424.812 58.441 388.129 32 346.805 32H165.195C123.871 32 87.188 58.441 74.117 97.643L41.211 196.371C17.156 205.576 0 228.709 0 256V448C0 465.672 14.328 480 32 480H64C81.672 480 96 465.672 96 448V400H416V448C416 465.672 430.328 480 448 480H480C497.672 480 512 465.672 512 448V256C512 228.709 494.844 205.576 470.789 196.371ZM134.836 117.881C139.195 104.793 151.398 96 165.195 96H346.805C360.602 96 372.805 104.793 377.164 117.881L401.871 192H110.129L134.836 117.881ZM96 320C78.328 320 64 305.672 64 288C64 270.326 78.328 256 96 256S128 270.326 128 288C128 305.672 113.672 320 96 320ZM384 288C384 270.326 398.328 256 416 256S448 270.326 448 288C448 305.672 433.672 320 416 320S384 305.672 384 288Z" })
  }
));
CarSolid.displayName = "CarSolid";
var Car_default = CarSolid;
