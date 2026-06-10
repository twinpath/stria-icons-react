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
var Folders_exports = {};
__export(Folders_exports, {
  default: () => Folders_default
});
module.exports = __toCommonJS(Folders_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FoldersThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 96H400L345.373 41.375C339.371 35.371 331.232 32 322.746 32H176C149.49 32 128 53.492 128 80V336C128 362.508 149.49 384 176 384H560C586.51 384 608 362.508 608 336V144C608 117.492 586.51 96 560 96ZM592 336C592 353.672 577.674 368 560 368H176C158.326 368 144 353.672 144 336V80C144 62.328 158.326 48 176 48H316.117C324.604 48 332.742 51.371 338.744 57.371L393.371 112H560C577.674 112 592 126.328 592 144V336ZM504 416C499.582 416 496 419.582 496 424V432C496 449.672 481.674 464 464 464H80C62.326 464 48 449.672 48 432V176C48 158.328 62.326 144 80 144H88C92.418 144 96 140.418 96 136S92.418 128 88 128H80C53.49 128 32 149.492 32 176V432C32 458.508 53.49 480 80 480H464C490.51 480 512 458.508 512 432V424C512 419.582 508.418 416 504 416Z" })
  }
));
FoldersThin.displayName = "FoldersThin";
var Folders_default = FoldersThin;
