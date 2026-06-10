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
var Notes_exports = {};
__export(Notes_exports, {
  default: () => Notes_default
});
module.exports = __toCommonJS(Notes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NotesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72 16H328C350.062 16 368 33.938 368 56C368 60.422 371.594 64 376 64S384 60.422 384 56C384 25.125 358.875 0 328 0H72C32.312 0 0 32.297 0 72V328C0 358.875 25.125 384 56 384C60.406 384 64 380.422 64 376S60.406 368 56 368C33.938 368 16 350.062 16 328V72C16 41.125 41.125 16 72 16ZM416 96H160C124.654 96 96 124.654 96 160V416C96 451.346 124.654 480 160 480H338.746C347.232 480 355.371 476.629 361.373 470.627L470.627 361.373C476.629 355.371 480 347.232 480 338.746V160C480 124.654 451.346 96 416 96ZM352 457.371V376C352 362.766 362.781 352 376 352H457.371L352 457.371ZM464 336H376C353.938 336 336 353.938 336 376V464H160C133.533 464 112 442.467 112 416V160C112 133.533 133.533 112 160 112H416C442.467 112 464 133.533 464 160V336Z" })
  }
));
NotesThin.displayName = "NotesThin";
var Notes_default = NotesThin;
