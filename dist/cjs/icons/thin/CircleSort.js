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
var CircleSort_exports = {};
__export(CircleSort_exports, {
  default: () => CircleSort_default
});
module.exports = __toCommonJS(CircleSort_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleSortThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM335.844 288H176.156C166.219 288 157.688 293.688 153.875 302.875C150.063 312.031 152.031 322.094 159.031 329.094L239.125 409.094C243.781 413.531 249.75 416 256 416C262.219 416 268.438 413.469 273.125 408.969L352.969 329.094C359.969 322.094 361.937 312.031 358.125 302.875C354.312 293.688 345.781 288 335.844 288ZM341.656 317.781L261.938 397.531C258.719 400.656 253.406 400.594 250.313 397.656L170.344 317.781C166.844 314.281 168.156 310.188 168.656 309C169.125 307.812 171.125 304 176.156 304H335.844C340.875 304 342.875 307.812 343.344 309C343.844 310.188 345.156 314.281 341.656 317.781ZM273 102.906C263.844 94.125 248.531 93.938 239 103.031L159.031 182.906C152.031 189.906 150.063 199.969 153.875 209.125C157.688 218.312 166.219 224 176.156 224H335.844C345.781 224 354.312 218.312 358.125 209.125C361.938 199.969 359.969 189.906 352.969 182.906L273 102.906ZM343.344 203C342.875 204.188 340.875 208 335.844 208H176.156C171.125 208 169.125 204.188 168.656 203C168.156 201.812 166.844 197.719 170.344 194.219L250.188 114.469C251.844 112.875 253.906 112 256 112C258.125 112 260.312 112.906 261.812 114.344L341.656 194.219C345.156 197.719 343.844 201.812 343.344 203Z" })
  }
));
CircleSortThin.displayName = "CircleSortThin";
var CircleSort_default = CircleSortThin;
