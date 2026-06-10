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
var NoteSticky_exports = {};
__export(NoteSticky_exports, {
  default: () => NoteSticky_default
});
module.exports = __toCommonJS(NoteSticky_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NoteStickyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64.023C28.676 32 0.021 60.652 0.02 96L0 415.996C-0.002 451.344 28.652 480 64 480H296.115C321.578 480 345.998 469.883 364.002 451.879L419.887 395.988C437.887 377.984 448 353.57 448 328.109V96C448 60.801 419.199 32 384 32ZM52.686 427.312C50.936 425.562 48 421.766 48 416L48.02 96.004C48.02 87.18 55.199 80 64.023 80H384C392.674 80 400 87.328 400 96V288H312C281.125 288 256 313.125 256 344V432H64C58.234 432 54.436 429.062 52.686 427.312ZM330.061 417.938C322.887 425.113 313.814 429.613 304 431.23V344C304 339.594 307.594 336 312 336H399.229C397.611 345.812 393.113 354.879 385.943 362.051L330.061 417.938Z" })
  }
));
NoteStickyRegular.displayName = "NoteStickyRegular";
var NoteSticky_default = NoteStickyRegular;
