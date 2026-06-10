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
var VectorCircle_exports = {};
__export(VectorCircle_exports, {
  default: () => VectorCircle_default
});
module.exports = __toCommonJS(VectorCircle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VectorCircleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 192H470.602C449.094 119.787 392.213 62.906 320 41.398V32C320 14.326 305.674 0 288 0H224C206.328 0 192 14.326 192 32V41.398C119.785 62.906 62.908 119.787 41.398 192H32C14.328 192 0 206.326 0 224V288C0 305.674 14.328 320 32 320H41.398C62.908 392.215 119.785 449.092 192 470.602V480C192 497.674 206.328 512 224 512H288C305.674 512 320 497.674 320 480V470.602C392.213 449.092 449.094 392.215 470.602 320H480C497.674 320 512 305.674 512 288V224C512 206.326 497.674 192 480 192ZM80 272H48V240H80V272ZM240 48H272V80H240V48ZM272 464H240V432H272V464ZM403.629 317.504C387.396 356.322 356.324 387.396 317.504 403.629C312.664 392.102 301.285 384 288 384H224C210.715 384 199.338 392.1 194.498 403.629C155.68 387.395 124.604 356.324 108.371 317.504C119.898 312.664 128 301.285 128 288V224C128 210.715 119.898 199.336 108.371 194.496C124.604 155.676 155.68 124.605 194.498 108.371C199.338 119.9 210.715 128 224 128H288C301.285 128 312.664 119.898 317.504 108.371C356.324 124.604 387.396 155.678 403.629 194.496C392.102 199.336 384 210.715 384 224V288C384 301.285 392.102 312.664 403.629 317.504ZM464 272H432V240H464V272Z" })
  }
));
VectorCircleSolid.displayName = "VectorCircleSolid";
var VectorCircle_default = VectorCircleSolid;
