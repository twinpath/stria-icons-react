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
var Acorn_exports = {};
__export(Acorn_exports, {
  default: () => Acorn_default
});
module.exports = __toCommonJS(Acorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AcornSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 160.031C0 160.025 0.002 160.018 0.002 160.012C0.002 160.008 0 160.006 0 160.002V160.031ZM224 480C271.047 457.133 400 397.873 400 224H48C48 397.873 176.953 457.133 224 480ZM447.998 160.012C447.998 160.018 448 160.025 448 160.031V160.002C448 160.006 447.998 160.008 447.998 160.012ZM352 64.039H251.5C254.875 54.666 260 45.916 266.625 38.041C272.25 31.543 272 22.043 266 16.168L254.75 4.795C251.625 1.67 247 -0.33 242.75 0.045C238.375 0.295 234.25 2.17 231.375 5.42C216.625 22.168 206.875 42.416 202 64.039H96C43.006 64.039 0.014 107.021 0.002 160.012C0.006 177.629 14.379 192 32 192H416C433.621 192 447.994 177.629 447.998 160.012C447.986 107.021 404.994 64.039 352 64.039Z" })
  }
));
AcornSolid.displayName = "AcornSolid";
var Acorn_default = AcornSolid;
