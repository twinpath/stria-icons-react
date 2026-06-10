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
var FolderXmark_exports = {};
__export(FolderXmark_exports, {
  default: () => FolderXmark_default
});
module.exports = __toCommonJS(FolderXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderXmarkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H272L226.746 50.746C214.742 38.742 198.465 32 181.492 32H64C28.656 32 0 60.654 0 96V416C0 451.346 28.656 480 64 480H448C483.344 480 512 451.346 512 416V160C512 124.654 483.344 96 448 96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H181.492C190.039 64 198.074 67.328 204.117 73.375L249.375 118.627L258.746 128H448C465.645 128 480 142.355 480 160V416ZM331.312 212.688C325.062 206.438 314.937 206.438 308.688 212.688L256 265.375L203.312 212.688C197.062 206.438 186.937 206.438 180.688 212.688S174.438 229.063 180.688 235.312L233.375 288L180.688 340.688C174.438 346.938 174.438 357.063 180.688 363.312C186.934 369.559 197.059 369.566 203.312 363.312L256 310.625L308.688 363.312C314.934 369.559 325.059 369.566 331.312 363.312C337.562 357.062 337.562 346.937 331.312 340.688L278.625 288L331.312 235.312C337.562 229.062 337.562 218.938 331.312 212.688Z" })
  }
));
FolderXmarkLight.displayName = "FolderXmarkLight";
var FolderXmark_default = FolderXmarkLight;
