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
var PesetaSign_exports = {};
__export(PesetaSign_exports, {
  default: () => PesetaSign_default
});
module.exports = __toCommonJS(PesetaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PesetaSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 176H350.383C342.225 95.375 274.773 32 192.062 32H80C53.594 32 32.062 53.406 32.016 79.75C31.986 104.312 32.014 138.264 32.061 176H16C7.156 176 0 183.156 0 192S7.156 208 16 208H32.104C32.121 220.152 32.139 232.453 32.156 244.875C32.188 275.031 32.234 305.5 32.266 333.969C32.188 334.625 32.141 335.312 32.141 336C32.141 336.719 32.187 337.406 32.281 338.062C32.328 395.25 32.328 443.625 32.141 463.844C32.062 472.688 39.156 479.906 47.984 480H48.141C56.906 480 64.062 472.938 64.141 464.156C64.312 445.562 64.328 403.156 64.281 352H192.063C274.773 352 342.225 288.625 350.383 208H368C376.844 208 384 200.844 384 192S376.844 176 368 176ZM64.016 79.812C64.031 71.094 71.203 64 80 64H192.062C257.133 64 310.41 113.02 318.383 176H64.061C64.014 138.273 63.986 104.342 64.016 79.812ZM192.062 320H64.25C64.219 295.625 64.188 270.125 64.156 244.812C64.139 232.412 64.121 220.131 64.104 208H318.383C310.41 270.98 257.133 320 192.062 320Z" })
  }
));
PesetaSignLight.displayName = "PesetaSignLight";
var PesetaSign_default = PesetaSignLight;
