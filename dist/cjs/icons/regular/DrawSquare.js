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
var DrawSquare_exports = {};
__export(DrawSquare_exports, {
  default: () => DrawSquare_default
});
module.exports = __toCommonJS(DrawSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrawSquareRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408 356.75V155.25C431.5 145.75 448 122.875 448 96C448 60.625 419.375 32 384 32C357.125 32 334.25 48.5 324.75 72H123.25C113.75 48.5 90.875 32 64 32C28.625 32 0 60.625 0 96C0 122.875 16.5 145.75 40 155.25V356.75C16.5 366.25 0 389.125 0 416C0 451.375 28.625 480 64 480C90.875 480 113.75 463.5 123.25 440H324.75C334.25 463.5 357.125 480 384 480C419.375 480 448 451.375 448 416C448 389.125 431.5 366.25 408 356.75ZM88 356.75V155.25C104 148.75 116.75 136 123.25 120H324.75C331.25 136 344 148.75 360 155.25V356.75C344 363.25 331.25 376 324.75 392H123.25C116.75 376 104 363.25 88 356.75ZM384 80C392.875 80 400 87.125 400 96S392.875 112 384 112S368 104.875 368 96S375.125 80 384 80ZM64 80C72.875 80 80 87.125 80 96S72.875 112 64 112S48 104.875 48 96S55.125 80 64 80ZM64 432C55.125 432 48 424.875 48 416S55.125 400 64 400S80 407.125 80 416S72.875 432 64 432ZM384 432C375.125 432 368 424.875 368 416S375.125 400 384 400S400 407.125 400 416S392.875 432 384 432Z" })
  }
));
DrawSquareRegular.displayName = "DrawSquareRegular";
var DrawSquare_default = DrawSquareRegular;
