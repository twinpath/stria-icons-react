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
var DeleteRight_exports = {};
__export(DeleteRight_exports, {
  default: () => DeleteRight_default
});
module.exports = __toCommonJS(DeleteRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DeleteRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 128V384C0 419.375 28.625 448 64 448H370.75C387.75 448 404 441.25 416 429.25L566.625 278.625C579.125 266.125 579.125 245.875 566.625 233.375L416 82.75C404 70.75 387.75 64 370.75 64H64C28.625 64 0 92.625 0 128ZM16 128C16 101.533 37.533 80 64 80H370.75C383.564 80 395.617 84.994 404.686 94.062L555.311 244.687C558.334 247.713 560 251.729 560 256C560 260.27 558.334 264.287 555.311 267.311L404.686 417.936C395.617 427.006 383.564 432 370.75 432H64C37.533 432 16 410.467 16 384V128ZM146.344 189.656L212.688 256L146.344 322.344C143.219 325.469 143.219 330.531 146.344 333.656C149.471 336.783 154.529 336.783 157.656 333.656L224 267.312L290.344 333.656C293.471 336.783 298.529 336.783 301.656 333.656C304.781 330.531 304.781 325.469 301.656 322.344L235.312 256L301.656 189.656C304.781 186.531 304.781 181.469 301.656 178.344S293.469 175.219 290.344 178.344L224 244.688L157.656 178.344C154.531 175.219 149.469 175.219 146.344 178.344S143.219 186.531 146.344 189.656Z" })
  }
));
DeleteRightThin.displayName = "DeleteRightThin";
var DeleteRight_default = DeleteRightThin;
