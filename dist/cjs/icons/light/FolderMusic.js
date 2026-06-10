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
var FolderMusic_exports = {};
__export(FolderMusic_exports, {
  default: () => FolderMusic_default
});
module.exports = __toCommonJS(FolderMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderMusicLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H272L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.654 483.346 96 448 96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H181.49C190.039 64 198.074 67.328 204.117 73.375L249.373 118.627L258.746 128H448C465.645 128 480 142.355 480 160V416ZM338.25 177.281C329.625 171.281 318.625 169.844 308.75 173.594L212.75 209.594C200.344 214.25 192 226.281 192 239.562V313.283C184.697 310.287 176.621 308.469 168 308.469C137.125 308.469 112 330.001 112 356.469C112 382.937 137.125 404.469 168 404.469S224 382.937 224 356.469V239.531L320 203.563V281.283C312.697 278.287 304.621 276.469 296 276.469C265.125 276.469 240 298.001 240 324.469C240 350.938 265.125 372.469 296 372.469S352 350.938 352 324.469V203.562C352 193.062 346.844 183.25 338.25 177.281ZM168 372.469C155.219 372.469 144 365 144 356.469S155.219 340.469 168 340.469S192 347.937 192 356.469S180.781 372.469 168 372.469ZM296 340.469C283.219 340.469 272 333 272 324.469S283.219 308.469 296 308.469S320 315.937 320 324.469S308.781 340.469 296 340.469Z" })
  }
));
FolderMusicLight.displayName = "FolderMusicLight";
var FolderMusic_default = FolderMusicLight;
