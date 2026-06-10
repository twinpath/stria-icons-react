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
var FaceKiss_exports = {};
__export(FaceKiss_exports, {
  default: () => FaceKiss_default
});
module.exports = __toCommonJS(FaceKiss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceKissThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 192C167.156 192 160 199.148 160 208S167.156 224 176 224S192 216.852 192 208S184.844 192 176 192ZM320 299.977C320 270.79 252.469 256.727 249.594 256.134C245.375 255.352 241.047 258.071 240.156 262.384C239.281 266.727 242.078 270.946 246.406 271.821C272.5 277.102 304 290.852 304 299.977S272.5 322.852 246.406 328.134C242.672 328.884 240 332.165 240 335.977S242.672 343.071 246.406 343.821C272.5 349.102 304 362.852 304 371.977S272.5 394.852 246.406 400.134C242.078 401.009 239.281 405.227 240.156 409.571C240.938 413.352 244.266 415.977 247.984 415.977C248.516 415.977 249.062 415.915 249.594 415.821C252.469 415.227 320 401.165 320 371.977C320 354.915 296.953 343.04 277.219 335.977C296.953 328.915 320 317.04 320 299.977ZM336 192C327.156 192 320 199.148 320 208S327.156 224 336 224S352 216.852 352 208S344.844 192 336 192ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480Z" })
  }
));
FaceKissThin.displayName = "FaceKissThin";
var FaceKiss_default = FaceKissThin;
