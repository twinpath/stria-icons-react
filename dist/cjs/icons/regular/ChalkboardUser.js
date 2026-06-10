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
var ChalkboardUser_exports = {};
__export(ChalkboardUser_exports, {
  default: () => ChalkboardUser_default
});
module.exports = __toCommonJS(ChalkboardUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChalkboardUserRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 352H128C57.307 352 0 409.305 0 480C0 497.672 14.326 512 32 512H288C305.674 512 320 497.672 320 480C320 409.305 262.693 352 192 352ZM49.607 464C57.041 427.529 89.367 400 128 400H192C230.633 400 262.959 427.529 270.393 464H49.607ZM160 320C213.02 320 256 277.016 256 224C256 170.98 213.02 128 160 128C106.982 128 64 170.98 64 224C64 277.016 106.982 320 160 320ZM160 176C186.467 176 208 197.533 208 224S186.467 272 160 272S112 250.467 112 224S133.533 176 160 176ZM584 0H216C185.125 0 160 25.125 160 56V80C160 93.25 170.75 104 184 104S208 93.25 208 80V56C208 51.594 211.594 48 216 48H584C588.406 48 592 51.594 592 56V360C592 364.406 588.406 368 584 368H528V336C528 318.326 513.674 304 496 304H416C398.326 304 384 318.326 384 336V368H352C338.75 368 328 378.75 328 392S338.75 416 352 416H584C614.875 416 640 390.875 640 360V56C640 25.125 614.875 0 584 0Z" })
  }
));
ChalkboardUserRegular.displayName = "ChalkboardUserRegular";
var ChalkboardUser_default = ChalkboardUserRegular;
