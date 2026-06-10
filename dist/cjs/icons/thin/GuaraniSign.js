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
var GuaraniSign_exports = {};
__export(GuaraniSign_exports, {
  default: () => GuaraniSign_default
});
module.exports = __toCommonJS(GuaraniSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GuaraniSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344.039 240H200.271V80.23C243.213 78.354 285.781 92.227 319.204 119.531C322.636 122.297 327.659 121.828 330.436 118.391C333.244 114.969 332.713 109.922 329.312 107.125C293.021 77.49 246.863 62.385 200.271 64.205V8C200.271 3.578 196.683 0 192.283 0C187.884 0 184.296 3.578 184.296 8V65.633C183.101 65.779 181.902 65.783 180.708 65.953C126.951 73.672 80.121 103.078 48.827 148.734C8.954 206.906 5.085 284.703 38.968 346.953C66.954 398.313 114.222 432.844 172.066 444.203C176.128 445 180.215 445.447 184.296 445.988V504C184.296 508.422 187.884 512 192.283 512C196.683 512 200.271 508.422 200.271 504V447.449C203.755 447.631 207.242 447.953 210.722 447.953C255.962 447.953 300.39 432.797 334.897 404.594C355.926 385.406 368 358.062 368 329.594V264C368 250.766 357.236 240 344.039 240ZM175.124 428.5C122.022 418.078 78.654 386.391 53.008 339.297C21.965 282.281 25.49 211.047 61.994 157.797C90.729 115.859 133.691 88.875 182.986 81.797C183.423 81.734 183.86 81.736 184.296 81.678V240H136.374C131.975 240 128.387 243.578 128.387 248S131.975 256 136.374 256H184.296V429.781C181.239 429.34 178.168 429.098 175.124 428.5ZM352.026 329.594C352.026 353.578 341.855 376.594 324.476 392.469C290.412 420.291 245.413 434.014 200.271 431.453V256H344.039C348.438 256 352.026 259.594 352.026 264V329.594Z" })
  }
));
GuaraniSignThin.displayName = "GuaraniSignThin";
var GuaraniSign_default = GuaraniSignThin;
