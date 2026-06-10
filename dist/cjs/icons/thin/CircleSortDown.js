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
var CircleSortDown_exports = {};
__export(CircleSortDown_exports, {
  default: () => CircleSortDown_default
});
module.exports = __toCommonJS(CircleSortDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleSortDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM335.844 288H176.156C166.219 288 157.688 293.688 153.875 302.875C150.063 312.031 152.031 322.094 159.031 329.094L239.125 409.094C243.781 413.531 249.75 416 256 416C262.219 416 268.438 413.469 273.125 408.969L352.969 329.094C359.969 322.094 361.937 312.031 358.125 302.875C354.312 293.688 345.781 288 335.844 288ZM341.656 317.781L261.938 397.531C258.719 400.656 253.406 400.594 250.313 397.656L170.344 317.781C166.844 314.281 168.156 310.188 168.656 309C169.125 307.812 171.125 304 176.156 304H335.844C340.875 304 342.875 307.812 343.344 309C343.844 310.188 345.156 314.281 341.656 317.781ZM273 102.906C263.875 94.125 248.531 93.969 239.031 103L154.375 186.312C151.25 189.406 151.188 194.469 154.312 197.625C157.406 200.75 162.469 200.812 165.625 197.687L250.187 114.469C253.531 111.25 258.812 111.469 261.844 114.375L346.375 197.687C347.938 199.219 349.969 200 352 200C354.062 200 356.125 199.219 357.688 197.625C360.812 194.469 360.75 189.406 357.625 186.312L273 102.906Z" })
  }
));
CircleSortDownThin.displayName = "CircleSortDownThin";
var CircleSortDown_default = CircleSortDownThin;
