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
var UnlockKeyhole_exports = {};
__export(UnlockKeyhole_exports, {
  default: () => UnlockKeyhole_default
});
module.exports = __toCommonJS(UnlockKeyhole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UnlockKeyholeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 224H112V128C112 66.25 162.25 16 224 16S336 66.25 336 128C336 132.422 339.594 136 344 136S352 132.422 352 128C352 57.422 294.594 0 224 0S96 57.422 96 128V224H64C28.652 224 0 252.654 0 288V448C0 483.346 28.652 512 64 512H384C419.348 512 448 483.346 448 448V288C448 252.654 419.348 224 384 224ZM432 448C432 474.467 410.469 496 384 496H64C37.531 496 16 474.467 16 448V288C16 261.533 37.531 240 64 240H384C410.469 240 432 261.533 432 288V448ZM224 320C206.326 320 192 334.328 192 352V384C192 401.672 206.326 416 224 416S256 401.672 256 384V352C256 334.328 241.674 320 224 320ZM240 384C240 392.824 232.822 400 224 400S208 392.824 208 384V352C208 343.176 215.178 336 224 336S240 343.176 240 352V384Z" })
  }
));
UnlockKeyholeThin.displayName = "UnlockKeyholeThin";
var UnlockKeyhole_default = UnlockKeyholeThin;
