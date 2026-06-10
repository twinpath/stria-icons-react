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
var DiagramVenn_exports = {};
__export(DiagramVenn_exports, {
  default: () => DiagramVenn_default
});
module.exports = __toCommonJS(DiagramVenn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramVennRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 32C381.594 32 349.129 39.984 320 53.846C290.871 39.984 258.406 32 224 32C100.289 32 0 132.289 0 256S100.289 480 224 480C258.406 480 290.871 472.016 320 458.154C349.129 472.016 381.594 480 416 480C539.713 480 640 379.711 640 256S539.713 32 416 32ZM320 108.68C340.404 122.021 357.652 139.611 370.959 160H269.041C282.348 139.611 299.596 122.021 320 108.68ZM224 432C126.953 432 48 353.047 48 256S126.953 80 224 80C239.949 80 255.332 82.322 270.033 86.316C222.326 127.395 192 188.105 192 256S222.326 384.605 270.033 425.684C255.332 429.678 239.949 432 224 432ZM320 403.32C299.6 389.982 282.371 372.363 268.996 352H371.004C357.629 372.363 340.4 389.982 320 403.32ZM387.834 320H252.166C246.238 304.916 242.562 288.773 241.031 272H398.969C397.438 288.773 393.762 304.916 387.834 320ZM241.031 240C242.566 223.168 246.709 207.139 252.631 192H387.369C393.291 207.139 397.434 223.168 398.969 240H241.031Z" })
  }
));
DiagramVennRegular.displayName = "DiagramVennRegular";
var DiagramVenn_default = DiagramVennRegular;
