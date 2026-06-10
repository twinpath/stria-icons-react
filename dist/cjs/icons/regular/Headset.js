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
var Headset_exports = {};
__export(Headset_exports, {
  default: () => Headset_default
});
module.exports = __toCommonJS(Headset_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadsetRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0C112.906 0 4.562 119.125 0 256V309.236C0 350.535 32.75 384 73.143 384H91.43C111.607 384 128 367.258 128 346.617V213.381C128 192.723 111.607 176 91.43 176H73.143C69.865 176 66.799 176.715 63.645 177.148C94.801 101.543 169.26 48.199 256 48.188C342.74 48.199 417.199 101.543 448.355 177.148C445.201 176.715 442.135 176 438.857 176H420.572C400.393 176 384 192.742 384 213.381V346.617C384 367.275 400.393 384 420.572 384H438.857C447.732 384 456.129 382.139 464 379.18V400C464 422.062 446.062 440 424 440H313.344C305.029 425.711 289.723 416 272 416H240C213.49 416 192 437.492 192 464S213.49 512 240 512H272C289.723 512 305.029 502.289 313.344 488H424C472.531 488 512 448.531 512 400V256C507.438 119.125 399.094 0 256 0ZM73.143 224H80V336H73.143C59.279 336 48 323.994 48 309.236V256C48 253.59 48.279 251.25 48.361 248.859C49.328 235.037 59.914 224 73.143 224ZM438.857 336H432V224H438.857C452.086 224 462.672 235.037 463.639 248.859C463.721 251.25 464 253.59 464 256V309.236C464 323.994 452.721 336 438.857 336Z" })
  }
));
HeadsetRegular.displayName = "HeadsetRegular";
var Headset_default = HeadsetRegular;
