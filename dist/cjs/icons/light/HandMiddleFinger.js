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
var HandMiddleFinger_exports = {};
__export(HandMiddleFinger_exports, {
  default: () => HandMiddleFinger_default
});
module.exports = __toCommonJS(HandMiddleFinger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandMiddleFingerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M392 240C389.006 240 386.17 240.643 383.312 241.203C379.912 213.559 356.547 192 328 192C319.379 192 311.303 194.121 304 197.617V56C304 25.125 278.875 0 248 0S192 25.125 192 56V197.617C184.697 194.121 176.621 192 168 192C137.125 192 112 217.125 112 248V336C112 344.844 119.156 352 128 352S144 344.844 144 336V248C144 234.766 154.766 224 168 224S192 234.766 192 248V256C192 264.844 199.156 272 208 272S224 264.844 224 256V56C224 42.766 234.766 32 248 32S272 42.766 272 56V256C272 264.844 279.156 272 288 272S304 264.844 304 256V248C304 234.766 314.766 224 328 224S352 234.766 352 248V264C352 272.844 359.156 280 368 280V279.73C368.017 279.73 368.034 279.731 368.05 279.731C378.903 279.731 378.721 272 392 272C405.234 272 416 282.766 416 296V376C416 433.344 369.344 480 312 480H190.5C148.562 480 108.484 459.969 83.312 426.438L69.797 408.391C66.062 403.422 64 397.25 64 391.031V346C64 337.141 67.969 328.891 74.891 323.344L90 311.25C93.943 308.094 95.998 303.448 95.998 298.757C95.998 290.21 89.09 282.749 79.991 282.749C76.485 282.749 72.954 283.902 70 286.281L54.891 298.375C40.344 310.016 32 327.375 32 346V391.031C32 404.141 36.328 417.125 44.203 427.594L57.719 445.641C88.906 487.188 138.547 512 190.5 512H312C386.984 512 448 450.984 448 376V296C448 265.125 422.875 240 392 240Z" })
  }
));
HandMiddleFingerLight.displayName = "HandMiddleFingerLight";
var HandMiddleFinger_default = HandMiddleFingerLight;
