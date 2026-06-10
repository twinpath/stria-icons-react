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
var Grid2Plus_exports = {};
__export(Grid2Plus_exports, {
  default: () => Grid2Plus_default
});
module.exports = __toCommonJS(Grid2Plus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Grid2PlusLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 0H336C309.49 0 288 21.49 288 48V176C288 202.51 309.49 224 336 224H464C490.51 224 512 202.51 512 176V48C512 21.49 490.51 0 464 0ZM480 176C480 184.822 472.822 192 464 192H336C327.178 192 320 184.822 320 176V48C320 39.178 327.178 32 336 32H464C472.822 32 480 39.178 480 48V176ZM176 288H48C21.49 288 0 309.49 0 336V464C0 490.51 21.49 512 48 512H176C202.51 512 224 490.51 224 464V336C224 309.49 202.51 288 176 288ZM192 464C192 472.822 184.822 480 176 480H48C39.178 480 32 472.822 32 464V336C32 327.178 39.178 320 48 320H176C184.822 320 192 327.178 192 336V464ZM176 0H48C21.49 0 0 21.49 0 48V176C0 202.51 21.49 224 48 224H176C202.51 224 224 202.51 224 176V48C224 21.49 202.51 0 176 0ZM192 176C192 184.822 184.822 192 176 192H48C39.178 192 32 184.822 32 176V48C32 39.178 39.178 32 48 32H176C184.822 32 192 39.178 192 48V176ZM496 384H416V304C416 295.156 408.844 288 400 288S384 295.156 384 304V384H304C295.156 384 288 391.156 288 400S295.156 416 304 416H384V496C384 504.844 391.156 512 400 512S416 504.844 416 496V416H496C504.844 416 512 408.844 512 400S504.844 384 496 384Z" })
  }
));
Grid2PlusLight.displayName = "Grid2PlusLight";
var Grid2Plus_default = Grid2PlusLight;
