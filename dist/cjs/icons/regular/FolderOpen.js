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
var FolderOpen_exports = {};
__export(FolderOpen_exports, {
  default: () => FolderOpen_default
});
module.exports = __toCommonJS(FolderOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderOpenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M572.58 270.312L476.58 462.312C471.16 473.152 460.08 480 447.959 480H64C28.654 480 0 451.344 0 416V96C0 60.656 28.654 32 64 32H181.49C198.465 32 214.742 38.742 226.746 50.746L275.883 96H416C451.346 96 480 124.656 480 160V192H432V160C432 151.176 424.822 144 416 144H256L192.805 84.688C189.783 81.664 185.764 80 181.49 80H64C55.178 80 48 87.176 48 96V384L119.156 241.688C124.576 230.848 135.656 224 147.777 224H543.959C567.746 224 583.219 249.031 572.58 270.312Z" })
  }
));
FolderOpenRegular.displayName = "FolderOpenRegular";
var FolderOpen_default = FolderOpenRegular;
