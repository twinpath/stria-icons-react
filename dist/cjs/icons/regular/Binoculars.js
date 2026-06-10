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
var Binoculars_exports = {};
__export(Binoculars_exports, {
  default: () => Binoculars_default
});
module.exports = __toCommonJS(Binoculars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BinocularsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416.002 80H320.002V48C320.002 39.2 327.202 32 336.002 32H400.002C408.802 32 416.002 39.2 416.002 48V80ZM192.002 48C192.002 39.2 184.802 32 176.002 32H112.002C103.202 32 96.002 39.2 96.002 48V80H192.002V48ZM512.002 432C512.227 458.443 490.853 480 464.409 480H336.002C309.492 480 288.002 458.51 288.002 432V288H224.002V432C224.002 458.51 202.511 480 176.002 480H47.594C21.15 480 -0.224 458.443 0.002 432L0.377 388C3.751 258.296 61.336 237.89 63.874 144.1C64.351 126.487 78.257 112 95.877 112L192.002 112C209.675 112 224.002 126.327 224.002 144V160H288.002V144C288.002 126.327 302.329 112 320.002 112L416.127 112C433.746 112 447.653 126.487 448.13 144.1C450.668 237.89 508.253 258.296 511.627 388L512.002 432ZM176.002 160H111.127C107.377 205 92.752 236.625 79.752 264.75C64.377 297.75 49.877 329 48.252 389.25L48.002 432.375L176.002 432V160ZM464.002 432L463.627 388.375C462.127 329 447.627 297.75 432.252 264.75C419.252 236.625 404.627 205 400.877 160H336.002V432H464.002Z" })
  }
));
BinocularsRegular.displayName = "BinocularsRegular";
var Binoculars_default = BinocularsRegular;
