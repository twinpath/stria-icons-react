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
var UpLeft_exports = {};
__export(UpLeft_exports, {
  default: () => UpLeft_default
});
module.exports = __toCommonJS(UpLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.627 325.492L248.266 199.125L310.184 137.207C319.766 127.629 322.635 113.207 317.451 100.688C312.256 88.156 300.049 80 286.486 80H49.512C40.254 80 31.877 83.75 25.812 89.812C19.75 95.879 16 104.254 16 113.508V350.484C16 364.051 24.158 376.258 36.689 381.449C40.834 383.164 45.186 384 49.502 384C58.225 384 66.799 380.594 73.209 374.184L135.127 312.266L261.49 438.625C267.74 444.875 275.93 448 284.119 448S300.498 444.875 306.746 438.625L374.627 370.742C387.123 358.25 387.125 337.984 374.627 325.492ZM284.117 415.996L157.754 289.637L135.127 267.012L112.5 289.637L50.582 351.555L48.938 351.887C48.359 351.645 48 351.109 48 350.484V113.508L49.512 112H286.486C287.111 112 287.65 112.359 287.885 112.93C288.117 113.488 287.986 114.148 287.557 114.578L225.639 176.496L203.012 199.125L225.639 221.75L351.998 348.113L284.117 415.996Z" })
  }
));
UpLeftLight.displayName = "UpLeftLight";
var UpLeft_default = UpLeftLight;
