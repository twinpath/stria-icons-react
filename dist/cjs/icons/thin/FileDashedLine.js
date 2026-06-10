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
var FileDashedLine_exports = {};
__export(FileDashedLine_exports, {
  default: () => FileDashedLine_default
});
module.exports = __toCommonJS(FileDashedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileDashedLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104 224C108.418 224 112 220.418 112 216V64C112 37.49 133.49 16 160 16H304V136C304 158.092 321.908 176 344 176H464V216C464 220.418 467.582 224 472 224S480 220.418 480 216V173.254C480 164.766 476.627 156.623 470.625 150.621L329.371 9.375C323.367 3.373 315.227 0 306.736 0H160C124.654 0 96 28.654 96 64V216C96 220.418 99.582 224 104 224ZM320 22.629L457.375 160H344C330.781 160 320 149.234 320 136V22.629ZM472 352C467.582 352 464 355.582 464 360V448C464 474.51 442.51 496 416 496H160C133.49 496 112 474.51 112 448V360C112 355.582 108.418 352 104 352S96 355.582 96 360V448C96 483.346 124.654 512 160 512H416C451.346 512 480 483.346 480 448V360C480 355.582 476.418 352 472 352ZM160 288C160 283.578 156.406 280 152 280H8C3.594 280 0 283.578 0 288S3.594 296 8 296H152C156.406 296 160 292.422 160 288ZM232 280C227.594 280 224 283.578 224 288S227.594 296 232 296H344C348.406 296 352 292.422 352 288S348.406 280 344 280H232ZM568 280H424C419.594 280 416 283.578 416 288S419.594 296 424 296H568C572.406 296 576 292.422 576 288S572.406 280 568 280Z" })
  }
));
FileDashedLineThin.displayName = "FileDashedLineThin";
var FileDashedLine_default = FileDashedLineThin;
