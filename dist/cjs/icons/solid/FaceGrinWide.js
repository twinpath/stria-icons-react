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
var FaceGrinWide_exports = {};
__export(FaceGrinWide_exports, {
  default: () => FaceGrinWide_default
});
module.exports = __toCommonJS(FaceGrinWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrinWideSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM319.695 136.75C327.324 125.25 344.398 125 352.391 136.75C364.742 155.125 367.527 173.625 368.133 192C367.648 210.375 364.742 228.875 352.391 247.25C344.762 258.75 327.687 259 319.695 247.25C307.344 228.875 304.559 210.375 303.953 192C304.559 173.625 307.344 155.125 319.695 136.75ZM159.73 136.75C167.359 125.25 184.434 125 192.426 136.75C204.777 155.125 207.441 173.625 208.047 192C207.562 210.375 204.777 228.875 192.426 247.25C184.797 258.75 167.723 259 159.73 247.25C147.258 228.875 144.594 210.375 143.988 192C144.473 173.625 147.258 155.125 159.73 136.75ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.875 121.465 317.125 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.535 317.125 401.676 326.875 399.859 338.75C390.535 393.75 316.547 432 256 432Z" })
  }
));
FaceGrinWideSolid.displayName = "FaceGrinWideSolid";
var FaceGrinWide_default = FaceGrinWideSolid;
