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
var ArrowRightArrowLeft_exports = {};
__export(ArrowRightArrowLeft_exports, {
  default: () => ArrowRightArrowLeft_default
});
module.exports = __toCommonJS(ArrowRightArrowLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightArrowLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 344H79.236L153.531 264.375C162.594 254.688 162.062 239.5 152.375 230.469C142.719 221.375 127.5 221.906 118.469 231.625L6.469 351.625C-2.156 360.844 -2.156 375.156 6.469 384.375L118.469 504.375C123.188 509.438 129.594 512 136 512C141.875 512 147.75 509.875 152.375 505.531C162.063 496.5 162.594 481.313 153.531 471.625L79.236 392H488C501.25 392 512 381.25 512 368S501.25 344 488 344ZM24 168H432.764L358.469 247.625C349.406 257.312 349.937 272.5 359.625 281.531C369.281 290.625 384.5 290.094 393.531 280.375L505.531 160.375C514.156 151.156 514.156 136.844 505.531 127.625L393.531 7.625C388.812 2.562 382.406 0 376 0C370.125 0 364.25 2.125 359.625 6.469C349.937 15.5 349.406 30.687 358.469 40.375L432.764 120H24C10.75 120 0 130.75 0 144S10.75 168 24 168Z" })
  }
));
ArrowRightArrowLeftRegular.displayName = "ArrowRightArrowLeftRegular";
var ArrowRightArrowLeft_default = ArrowRightArrowLeftRegular;
