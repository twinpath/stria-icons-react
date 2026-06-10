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
var Spade_exports = {};
__export(Spade_exports, {
  default: () => Spade_default
});
module.exports = __toCommonJS(Spade_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpadeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M478.387 224.125L286.043 13.25C270.73 -3.625 241.23 -3.563 226.043 13.187L33.605 224.156C10.011 250.062 -1.832 283.406 0.23 318.031C2.324 352.656 18.105 384.406 44.605 407.375C68.793 428.375 99.887 439.938 132.23 439.938C169.855 439.938 205.855 424.156 230.949 396.656L232.012 395.49V464H184.012C170.762 464 160.012 474.75 160.012 488S170.762 512 184.012 512H328.012C341.262 512 352.012 501.25 352.012 488S341.262 464 328.012 464H280.012V395.49L281.074 396.656C305.449 423.406 343.98 440 381.668 440C413.105 440 442.762 428.75 467.387 407.438V407.406C493.949 384.406 509.699 352.656 511.793 318.031C513.855 283.406 502.011 250.062 478.387 224.125ZM435.949 371.125C420.199 384.781 401.418 392 381.668 392C357.449 392 331.887 381.125 316.574 364.344L273.73 317.375C269.168 312.406 262.762 309.562 256.012 309.562S242.855 312.406 238.293 317.375L195.48 364.313C165.668 396.938 109.574 400.219 76.074 371.094C59.355 356.656 49.449 336.781 48.168 315.156C46.855 293.562 54.293 272.719 69.074 256.5L256.012 51.562L442.918 256.469C457.73 272.719 465.168 293.562 463.855 315.156C462.574 336.781 452.668 356.656 435.949 371.125Z" })
  }
));
SpadeRegular.displayName = "SpadeRegular";
var Spade_default = SpadeRegular;
