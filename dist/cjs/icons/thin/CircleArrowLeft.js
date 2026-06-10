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
var CircleArrowLeft_exports = {};
__export(CircleArrowLeft_exports, {
  default: () => CircleArrowLeft_default
});
module.exports = __toCommonJS(CircleArrowLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 256C16 388.549 123.451 496 256 496S496 388.549 496 256S388.549 16 256 16S16 123.451 16 256ZM480 256C480 379.514 379.514 480 256 480S32 379.514 32 256S132.486 32 256 32S480 132.486 480 256ZM130.344 250.344C127.219 253.469 127.219 258.531 130.344 261.656L250.344 381.656C251.906 383.219 253.938 384 256 384S260.094 383.219 261.656 381.656C264.781 378.531 264.781 373.469 261.656 370.344L155.312 264H376C380.406 264 384 260.422 384 256S380.406 248 376 248H155.312L261.656 141.656C264.781 138.531 264.781 133.469 261.656 130.344S253.469 127.219 250.344 130.344L130.344 250.344Z" })
  }
));
CircleArrowLeftThin.displayName = "CircleArrowLeftThin";
var CircleArrowLeft_default = CircleArrowLeftThin;
