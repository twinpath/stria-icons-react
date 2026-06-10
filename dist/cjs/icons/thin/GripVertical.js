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
var GripVertical_exports = {};
__export(GripVertical_exports, {
  default: () => GripVertical_default
});
module.exports = __toCommonJS(GripVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GripVerticalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 32H32C14.326 32 0 46.328 0 64V128C0 145.672 14.326 160 32 160H96C113.674 160 128 145.672 128 128V64C128 46.328 113.674 32 96 32ZM112 128C112 136.824 104.822 144 96 144H32C23.178 144 16 136.824 16 128V64C16 55.176 23.178 48 32 48H96C104.822 48 112 55.176 112 64V128ZM288 32H224C206.326 32 192 46.328 192 64V128C192 145.672 206.326 160 224 160H288C305.674 160 320 145.672 320 128V64C320 46.328 305.674 32 288 32ZM304 128C304 136.824 296.822 144 288 144H224C215.178 144 208 136.824 208 128V64C208 55.176 215.178 48 224 48H288C296.822 48 304 55.176 304 64V128ZM288 192H224C206.326 192 192 206.328 192 224V288C192 305.672 206.326 320 224 320H288C305.674 320 320 305.672 320 288V224C320 206.328 305.674 192 288 192ZM304 288C304 296.824 296.822 304 288 304H224C215.178 304 208 296.824 208 288V224C208 215.176 215.178 208 224 208H288C296.822 208 304 215.176 304 224V288ZM96 192H32C14.326 192 0 206.328 0 224V288C0 305.672 14.326 320 32 320H96C113.674 320 128 305.672 128 288V224C128 206.328 113.674 192 96 192ZM112 288C112 296.824 104.822 304 96 304H32C23.178 304 16 296.824 16 288V224C16 215.176 23.178 208 32 208H96C104.822 208 112 215.176 112 224V288ZM288 352H224C206.326 352 192 366.328 192 384V448C192 465.672 206.326 480 224 480H288C305.674 480 320 465.672 320 448V384C320 366.328 305.674 352 288 352ZM304 448C304 456.824 296.822 464 288 464H224C215.178 464 208 456.824 208 448V384C208 375.176 215.178 368 224 368H288C296.822 368 304 375.176 304 384V448ZM96 352H32C14.326 352 0 366.328 0 384V448C0 465.672 14.326 480 32 480H96C113.674 480 128 465.672 128 448V384C128 366.328 113.674 352 96 352ZM112 448C112 456.824 104.822 464 96 464H32C23.178 464 16 456.824 16 448V384C16 375.176 23.178 368 32 368H96C104.822 368 112 375.176 112 384V448Z" })
  }
));
GripVerticalThin.displayName = "GripVerticalThin";
var GripVertical_default = GripVerticalThin;
