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
var FolderGrid_exports = {};
__export(FolderGrid_exports, {
  default: () => FolderGrid_default
});
module.exports = __toCommonJS(FolderGrid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderGridLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H272L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V160C512 124.656 483.346 96 448 96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H181.49C190.039 64 198.074 67.328 204.117 73.375L258.746 128H448C465.645 128 480 142.355 480 160V416ZM152 240H104C90.766 240 80 250.781 80 264V312C80 325.219 90.766 336 104 336H152C165.234 336 176 325.219 176 312V264C176 250.781 165.234 240 152 240ZM144 304H112V272H144V304ZM280 240H232C218.766 240 208 250.781 208 264V312C208 325.219 218.766 336 232 336H280C293.234 336 304 325.219 304 312V264C304 250.781 293.234 240 280 240ZM272 304H240V272H272V304ZM408 240H360C346.766 240 336 250.781 336 264V312C336 325.219 346.766 336 360 336H408C421.234 336 432 325.219 432 312V264C432 250.781 421.234 240 408 240ZM400 304H368V272H400V304Z" })
  }
));
FolderGridLight.displayName = "FolderGridLight";
var FolderGrid_default = FolderGridLight;
