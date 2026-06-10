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
var DoorOpen_exports = {};
__export(DoorOpen_exports, {
  default: () => DoorOpen_default
});
module.exports = __toCommonJS(DoorOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DoorOpenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232.002 216C214.346 216 200.002 233.938 200.002 256S214.346 296 232.002 296S264.002 278.063 264.002 256S249.658 216 232.002 216ZM232.002 280C223.315 280 216.002 269 216.002 256C216.002 243 223.315 232 232.002 232C240.689 232 248.002 243 248.002 256C248.002 269 240.689 280 232.002 280ZM568 496H512V104C512 81.938 494.063 64 472.032 64H360.001C355.595 64 352.001 67.594 352.001 72S355.595 80 360.001 80H472.032C485.251 80 496 90.781 496 104V504C496 508.406 499.594 512 504 512H568C572.406 512 576 508.406 576 504S572.406 496 568 496ZM304.845 7.801C295.627 0.676 283.908 -1.637 272.752 1.145L92.722 47.801C75.815 52.238 64.003 67.801 64.003 85.676V496L7.503 496.031C3.191 496.281 -0.122 499.938 0.003 504.25C0.128 508.563 3.691 512 8.003 512H312.002C316.408 512 320.002 508.406 320.002 504V39.02C320.002 26.645 314.47 15.27 304.845 7.801ZM304.002 496H80.003V85.676C80.003 75.082 86.909 65.863 96.753 63.301L276.752 16.645C283.158 14.895 289.783 16.426 295.064 20.457C300.752 24.863 304.002 31.613 304.002 39.02V496Z" })
  }
));
DoorOpenThin.displayName = "DoorOpenThin";
var DoorOpen_default = DoorOpenThin;
