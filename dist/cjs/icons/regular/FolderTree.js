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
const FolderTreeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 320H448L403.842 292.766C398.791 289.648 392.975 288 387.043 288H320C302.326 288 288 302.328 288 320V480C288 497.672 302.326 512 320 512H544C561.674 512 576 497.672 576 480V352C576 334.328 561.674 320 544 320ZM528 464H336V336H382.504L422.803 360.855C430.377 365.527 439.102 368 448 368H528V464ZM232 160C245.254 160 256 149.254 256 136C256 122.742 245.254 112 232 112H48V24C48 10.742 37.254 0 24 0S0 10.742 0 24V392C0 422.93 25.072 448 56 448H232C245.254 448 256 437.254 256 424C256 410.742 245.254 400 232 400H56C51.6 400 48 396.398 48 392V160H232ZM544 32H448L403.842 4.766C398.791 1.648 392.975 0 387.043 0H320C302.326 0 288 14.328 288 32V192C288 209.672 302.326 224 320 224H544C561.674 224 576 209.672 576 192V64C576 46.328 561.674 32 544 32ZM528 176H336V48H382.504L422.803 72.855C430.377 77.527 439.102 80 448 80H528V176Z" })
  }
));
FolderTreeRegular.displayName = "FolderTreeRegular";
var FolderTree_default = FolderTreeRegular;
