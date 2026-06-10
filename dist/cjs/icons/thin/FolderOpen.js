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
var FolderOpen_exports = {};
__export(FolderOpen_exports, {
  default: () => FolderOpen_default
});
module.exports = __toCommonJS(FolderOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderOpenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M543.959 224H480V144C480 117.492 458.51 96 432 96H272L217.373 41.375C211.371 35.371 203.232 32 194.746 32H48C21.49 32 0 53.492 0 80V448C0 465.672 14.326 480 32 480H428.18C452.422 480 474.582 466.305 485.424 444.621L572.58 270.312C583.219 249.031 567.748 224 543.959 224ZM16 80C16 62.328 30.326 48 48 48H188.117C196.604 48 204.742 51.371 210.744 57.375L265.371 112H432C449.674 112 464 126.328 464 144V224H157.664C139.484 224 122.865 234.273 114.734 250.531L16 448V80ZM558.268 263.156L471.111 437.469C462.98 453.727 446.361 464 428.182 464H38.834C32.889 464 29.02 457.742 31.68 452.422L129.047 257.688C134.467 246.844 145.545 240 157.664 240H543.959C552.01 240 556.162 245.305 557.572 247.586C558.979 249.867 561.869 255.953 558.268 263.156Z" })
  }
));
FolderOpenThin.displayName = "FolderOpenThin";
var FolderOpen_default = FolderOpenThin;
