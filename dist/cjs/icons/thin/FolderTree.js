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
var FolderTree_exports = {};
__export(FolderTree_exports, {
  default: () => FolderTree_default
});
module.exports = __toCommonJS(FolderTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderTreeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 32H432L404.686 4.688C401.684 1.688 397.615 0 393.371 0H320C302.326 0 288 14.328 288 32V192C288 209.672 302.326 224 320 224H544C561.674 224 576 209.672 576 192V64C576 46.328 561.674 32 544 32ZM560 192C560 200.824 552.822 208 544 208H320C311.178 208 304 200.824 304 192V32C304 23.176 311.178 16 320 16H393.373L420.688 43.312L425.373 48H544C552.822 48 560 55.176 560 64V192ZM544 320H432L404.686 292.688C401.684 289.688 397.615 288 393.371 288H320C302.326 288 288 302.328 288 320V480C288 497.672 302.326 512 320 512H544C561.674 512 576 497.672 576 480V352C576 334.328 561.674 320 544 320ZM560 480C560 488.824 552.822 496 544 496H320C311.178 496 304 488.824 304 480V320C304 311.176 311.178 304 320 304H393.373L420.688 331.312L425.373 336H544C552.822 336 560 343.176 560 352V480ZM248 136C252.406 136 256 132.406 256 128S252.406 120 248 120H16V8C16 3.594 12.406 0 8 0S0 3.594 0 8V384C0 406.062 17.938 424 40 424H248C252.406 424 256 420.406 256 416S252.406 408 248 408H40C26.781 408 16 397.219 16 384V136H248Z" })
  }
));
FolderTreeThin.displayName = "FolderTreeThin";
var FolderTree_default = FolderTreeThin;
