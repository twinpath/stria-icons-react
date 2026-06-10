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
var TrashCanUndo_exports = {};
__export(TrashCanUndo_exports, {
  default: () => TrashCanUndo_default
});
module.exports = __toCommonJS(TrashCanUndo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanUndoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 32H312L302.625 13.25C298.5 5.125 290.25 0 281.125 0H166.75C157.75 0 149.375 5.125 145.375 13.25L136 32H16C7.125 32 0 39.125 0 48V80C0 88.875 7.125 96 16 96H432C440.875 96 448 88.875 448 80V48C448 39.125 440.875 32 432 32ZM32 464C32 490.5 53.5 512 80 512H368C394.5 512 416 490.5 416 464V128H32V464ZM103.031 271.031L175.031 199.031C184.406 189.656 199.594 189.656 208.969 199.031S218.344 223.594 208.969 232.969L177.938 264H240C288.531 264 328 303.469 328 352V392C328 405.25 317.25 416 304 416S280 405.25 280 392V352C280 329.938 262.062 312 240 312H177.938L208.969 343.031C218.344 352.406 218.344 367.594 208.969 376.969C204.281 381.656 198.141 384 192 384S179.719 381.656 175.031 376.969L103.031 304.969C93.656 295.594 93.656 280.406 103.031 271.031Z" })
  }
));
TrashCanUndoSolid.displayName = "TrashCanUndoSolid";
var TrashCanUndo_default = TrashCanUndoSolid;
