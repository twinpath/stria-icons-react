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
var Database_exports = {};
__export(Database_exports, {
  default: () => Database_default
});
module.exports = __toCommonJS(Database_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DatabaseThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 0C100.289 0 0 35.816 0 80V432C0 476.182 100.289 512 224 512S448 476.182 448 432V80C448 35.816 347.711 0 224 0ZM432 325.682C407.273 347.686 326.463 368 224 368S40.727 347.686 16 325.682V184.539C56.129 210.217 141.539 224 224 224S391.871 210.217 432 184.539V325.682ZM224 16C350.973 16 432 53.904 432 80V165.682C407.273 187.686 326.463 208 224 208S40.727 187.686 16 165.682V80C16 53.904 97.027 16 224 16ZM224 496C97.027 496 16 458.096 16 432V344.539C56.129 370.217 141.539 384 224 384S391.871 370.217 432 344.539V432C432 458.096 350.973 496 224 496Z" })
  }
));
DatabaseThin.displayName = "DatabaseThin";
var Database_default = DatabaseThin;
