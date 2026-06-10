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
var FaceFrown_exports = {};
__export(FaceFrown_exports, {
  default: () => FaceFrown_default
});
module.exports = __toCommonJS(FaceFrown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceFrownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 192C344.844 192 352 199.148 352 208S344.844 224 336 224S320 216.852 320 208S327.156 192 336 192ZM256 16C123.418 16 16 123.42 16 256S123.418 496 256 496S496 388.58 496 256S388.582 16 256 16ZM256 480C132.484 480 32 379.514 32 256S132.484 32 256 32S480 132.486 480 256S379.516 480 256 480ZM176 192C184.844 192 192 199.148 192 208S184.844 224 176 224S160 216.852 160 208S167.156 192 176 192ZM256 320C207.594 320 162.438 346.047 138.188 388C136 391.828 137.281 396.719 141.125 398.922C144.844 401.109 149.812 399.844 152.062 396C173.438 359 213.281 336 256 336S338.562 359 359.938 396C361.438 398.562 364.125 400 366.875 400C368.25 400 369.625 399.656 370.875 398.922C374.719 396.719 376 391.828 373.813 388C349.562 346.047 304.406 320 256 320Z" })
  }
));
FaceFrownThin.displayName = "FaceFrownThin";
var FaceFrown_default = FaceFrownThin;
