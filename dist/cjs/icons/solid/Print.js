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
var Print_exports = {};
__export(Print_exports, {
  default: () => Print_default
});
module.exports = __toCommonJS(Print_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrintSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 192H64C28.654 192 0 220.654 0 256V352C0 369.674 14.326 384 32 384H64V480C64 497.674 78.326 512 96 512H416C433.674 512 448 497.674 448 480V384H480C497.674 384 512 369.674 512 352V256C512 220.654 483.346 192 448 192ZM384 448H128V352H384V448ZM432 296C418.75 296 408 285.25 408 272C408 258.734 418.75 248 432 248S456 258.734 456 272C456 285.25 445.25 296 432 296ZM128 64H357.49L384 90.51V160H448V77.25C448 68.766 444.625 60.625 438.625 54.625L393.375 9.375C387.375 3.375 379.219 0 370.75 0H96C78.344 0 64 14.328 64 32V160H128V64Z" })
  }
));
PrintSolid.displayName = "PrintSolid";
var Print_default = PrintSolid;
