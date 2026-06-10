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
var VectorSquare_exports = {};
__export(VectorSquare_exports, {
  default: () => VectorSquare_default
});
module.exports = __toCommonJS(VectorSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VectorSquareDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 352H96V160H32V352ZM352 160V352H416V160H352ZM128 448H320V384H128V448ZM128 128H320V64H128V128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 352H32C14.328 352 0 366.326 0 384V448C0 465.674 14.328 480 32 480H96C113.674 480 128 465.674 128 448V384C128 366.326 113.674 352 96 352ZM80 432H48V400H80V432ZM416 352H352C334.328 352 320 366.326 320 384V448C320 465.674 334.328 480 352 480H416C433.674 480 448 465.674 448 448V384C448 366.326 433.674 352 416 352ZM400 432H368V400H400V432ZM416 32H352C334.328 32 320 46.326 320 64V128C320 145.674 334.328 160 352 160H416C433.674 160 448 145.674 448 128V64C448 46.326 433.674 32 416 32ZM400 112H368V80H400V112ZM96 32H32C14.328 32 0 46.326 0 64V128C0 145.674 14.328 160 32 160H96C113.674 160 128 145.674 128 128V64C128 46.326 113.674 32 96 32ZM80 112H48V80H80V112Z" })
    ]
  }
));
VectorSquareDuotone.displayName = "VectorSquareDuotone";
var VectorSquare_default = VectorSquareDuotone;
