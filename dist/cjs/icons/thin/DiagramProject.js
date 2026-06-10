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
var DiagramProject_exports = {};
__export(DiagramProject_exports, {
  default: () => DiagramProject_default
});
module.exports = __toCommonJS(DiagramProject_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramProjectThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 0H512C476.654 0 448 28.654 448 64V128C448 163.346 476.654 192 512 192H576C611.348 192 640 163.346 640 128V64C640 28.654 611.348 0 576 0ZM624 128C624 154.467 602.467 176 576 176H512C485.533 176 464 154.467 464 128V64C464 37.533 485.533 16 512 16H576C602.467 16 624 37.533 624 64V128ZM352 320H288C252.654 320 224 348.654 224 384V448C224 483.346 252.654 512 288 512H352C387.348 512 416 483.346 416 448V384C416 348.654 387.348 320 352 320ZM400 448C400 474.467 378.467 496 352 496H288C261.533 496 240 474.467 240 448V384C240 357.533 261.533 336 288 336H352C378.467 336 400 357.533 400 384V448ZM416 88H192V64C192 28.654 163.348 0 128 0H64C28.654 0 0 28.654 0 64V128C0 163.346 28.654 192 64 192H128C134.238 192 140.146 190.826 145.848 189.162L217.422 292.547C218.969 294.797 221.469 296 224 296C225.578 296 227.172 295.547 228.547 294.578C232.187 292.062 233.094 287.078 230.578 283.453L160.814 182.682C179.424 171.488 192 151.299 192 128V104H416C420.422 104 424 100.422 424 96S420.422 88 416 88ZM176 128C176 154.467 154.467 176 128 176H64C37.533 176 16 154.467 16 128V64C16 37.533 37.533 16 64 16H128C154.467 16 176 37.533 176 64V128Z" })
  }
));
DiagramProjectThin.displayName = "DiagramProjectThin";
var DiagramProject_default = DiagramProjectThin;
