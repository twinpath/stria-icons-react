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
var Camcorder_exports = {};
__export(Camcorder_exports, {
  default: () => Camcorder_default
});
module.exports = __toCommonJS(Camcorder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CamcorderRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312 240H104C90.75 240 80 250.75 80 264S90.75 288 104 288H312C325.25 288 336 277.25 336 264S325.25 240 312 240ZM557.609 182.344C546.078 174.938 531.734 173.953 519.328 179.656L416 227.016V224C416 188.654 387.348 160 352 160H96V120C96 97.938 113.938 80 136 80H296C309.25 80 320 69.25 320 56S309.25 32 296 32H136C87.469 32 48 71.469 48 120V162.264C20.443 169.4 0 194.213 0 224V416C0 451.346 28.654 480 64 480H352C387.348 480 416 451.346 416 416V412.984L519.328 460.344C524.672 462.797 530.359 464.016 536.016 464.016C543.547 464.016 551.031 461.875 557.609 457.656C569.125 450.25 576 437.672 576 423.984V216.016C576 202.328 569.125 189.75 557.609 182.344ZM368 416C368 424.822 360.822 432 352 432H64C55.178 432 48 424.822 48 416V224C48 215.178 55.178 208 64 208H352C360.822 208 368 215.178 368 224V416ZM528 411.516L416 360.182V279.818L528 228.484V411.516Z" })
  }
));
CamcorderRegular.displayName = "CamcorderRegular";
var Camcorder_default = CamcorderRegular;
