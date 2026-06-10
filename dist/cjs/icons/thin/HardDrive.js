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
var HardDrive_exports = {};
__export(HardDrive_exports, {
  default: () => HardDrive_default
});
module.exports = __toCommonJS(HardDrive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HardDriveThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.652 32 0 60.652 0 96V416C0 451.348 28.652 480 64 480H448C483.348 480 512 451.348 512 416V96C512 60.652 483.348 32 448 32ZM496 416C496 442.469 474.469 464 448 464H64C37.531 464 16 442.469 16 416V352C16 325.531 37.531 304 64 304H448C474.469 304 496 325.531 496 352V416ZM496 310.07C484.27 296.652 467.227 288 448 288H64C44.773 288 27.73 296.652 16 310.07V96C16 69.531 37.531 48 64 48H448C474.469 48 496 69.531 496 96V310.07ZM320 352C302.328 352 288 366.328 288 384S302.328 416 320 416S352 401.672 352 384S337.672 352 320 352ZM320 400C311.176 400 304 392.824 304 384S311.176 368 320 368S336 375.176 336 384S328.824 400 320 400ZM416 352C398.328 352 384 366.328 384 384S398.328 416 416 416S448 401.672 448 384S433.672 352 416 352ZM416 400C407.176 400 400 392.824 400 384S407.176 368 416 368S432 375.176 432 384S424.824 400 416 400Z" })
  }
));
HardDriveThin.displayName = "HardDriveThin";
var HardDrive_default = HardDriveThin;
