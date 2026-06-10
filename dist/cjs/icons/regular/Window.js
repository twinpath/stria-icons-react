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
var Window_exports = {};
__export(Window_exports, {
  default: () => Window_default
});
module.exports = __toCommonJS(Window_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindowRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H448C483.346 480 512 451.348 512 416V96C512 60.652 483.346 32 448 32ZM288 96C305.75 96 320 110.25 320 128S305.75 160 288 160S256 145.75 256 128S270.25 96 288 96ZM192 96C209.75 96 224 110.25 224 128S209.75 160 192 160S160 145.75 160 128S174.25 96 192 96ZM96 96C113.75 96 128 110.25 128 128S113.75 160 96 160S64 145.75 64 128S78.25 96 96 96ZM464 416C464 424.824 456.822 432 448 432H64C55.178 432 48 424.824 48 416V224H464V416Z" })
  }
));
WindowRegular.displayName = "WindowRegular";
var Window_default = WindowRegular;
