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
var CircleG_exports = {};
__export(CircleG_exports, {
  default: () => CircleG_default
});
module.exports = __toCommonJS(CircleG_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleGThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 255.5H288C283.594 255.5 280 259.078 280 263.5S283.594 271.5 288 271.5H367.688C366.875 281.25 364.625 290.25 360.906 298.344C355.188 310.859 346.562 323.141 336 333.891C294.875 375.562 227.969 378.781 183.625 340.969C159.406 320.344 145.344 291.594 144.094 260C142.844 228.844 154.781 198.328 176.812 176.297C218.875 134.297 286.406 132.375 330.656 172C333.969 174.984 339.031 174.703 341.969 171.391C344.906 168.094 344.625 163.031 341.344 160.094C290.75 114.797 213.531 116.969 165.5 164.984C140.312 190.156 126.688 225.031 128.094 260.641C129.562 296.734 145.594 329.594 173.25 353.156C197 373.375 226.375 383.359 255.75 383.359C289.094 383.359 322.438 370.484 347.375 345.109C359.25 333.063 368.969 319.188 375.469 305C381.125 292.656 384 278.688 384 263.5C384 259.078 380.406 255.5 376 255.5ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" })
  }
));
CircleGThin.displayName = "CircleGThin";
var CircleG_default = CircleGThin;
