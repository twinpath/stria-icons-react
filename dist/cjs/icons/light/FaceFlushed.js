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
var FaceFlushed_exports = {};
__export(FaceFlushed_exports, {
  default: () => FaceFlushed_default
});
module.exports = __toCommonJS(FaceFlushed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceFlushedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240.016 224C240.016 179.75 204.172 144 159.973 144S80.051 179.75 80.051 224S115.773 304 159.973 304S240.016 268.25 240.016 224ZM159.973 272C133.453 272 112.02 250.5 112.02 224S133.453 176 159.973 176S208.047 197.5 208.047 224S186.492 272 159.973 272ZM320.059 368H191.941C183.223 368 175.957 375.25 175.957 384S183.223 400 191.941 400H320.059C328.777 400 336.043 392.75 336.043 384S328.777 368 320.059 368ZM159.973 200C146.652 200 135.996 210.75 135.996 224S146.652 248 159.973 248S183.949 237.25 183.949 224S173.293 200 159.973 200ZM352.027 200C338.707 200 328.051 210.75 328.051 224S338.707 248 352.027 248S376.004 237.25 376.004 224S365.348 200 352.027 200ZM352.027 144C307.828 144 271.984 179.75 271.984 224S307.828 304 352.027 304S431.949 268.25 431.949 224S396.227 144 352.027 144ZM352.027 272C325.508 272 303.953 250.5 303.953 224S325.508 176 352.027 176S399.98 197.5 399.98 224S378.547 272 352.027 272ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" })
  }
));
FaceFlushedLight.displayName = "FaceFlushedLight";
var FaceFlushed_default = FaceFlushedLight;
