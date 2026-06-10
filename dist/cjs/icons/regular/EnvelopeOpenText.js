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
var EnvelopeOpenText_exports = {};
__export(EnvelopeOpenText_exports, {
  default: () => EnvelopeOpenText_default
});
module.exports = __toCommonJS(EnvelopeOpenText_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopeOpenTextRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476.762 214.162H476.76C468.516 214.162 460.531 217.053 454.199 222.33L297.25 353.141C274.566 372.045 237.447 372.047 214.764 353.143L57.801 222.33C51.469 217.053 43.484 214.162 35.242 214.162H35.238C15.777 214.162 0 229.938 0 249.4V448C0 483.346 28.654 512 64 512H448C483.346 512 512 483.346 512 448V249.4C512 229.938 496.223 214.162 476.762 214.162ZM464 448C464 456.822 456.822 464 448 464H64C55.178 464 48 456.822 48 448V276.662L184.062 390.047C204.25 406.828 229.781 416.078 256 416.078S307.75 406.828 327.969 390.031L464 276.664V448ZM112 225.865V56C112 51.594 115.594 48 120 48H392C396.406 48 400 51.594 400 56V225.846L433.719 197.75C438.066 194.129 442.939 191.316 448 188.912V56C448 25.125 422.875 0 392 0H120C89.125 0 64 25.125 64 56V188.918C69.064 191.328 73.941 194.148 78.297 197.781L112 225.865ZM328 96H184C170.746 96 160 106.744 160 120C160 133.254 170.746 144 184 144H328C341.254 144 352 133.254 352 120C352 106.744 341.254 96 328 96ZM328 176H184C170.746 176 160 186.744 160 200C160 213.254 170.746 224 184 224H328C341.254 224 352 213.254 352 200C352 186.744 341.254 176 328 176Z" })
  }
));
EnvelopeOpenTextRegular.displayName = "EnvelopeOpenTextRegular";
var EnvelopeOpenText_default = EnvelopeOpenTextRegular;
