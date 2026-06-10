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
var Timer_exports = {};
__export(Timer_exports, {
  default: () => Timer_default
});
module.exports = __toCommonJS(Timer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C242.75 16 232 26.75 232 40V120C232 133.25 242.75 144 256 144S280 133.25 280 120V65.5C374.594 77.344 448 158.25 448 256C448 361.875 361.875 448 256 448S64 361.875 64 256C64 214.688 76.906 175.344 101.312 142.25C109.188 131.562 106.906 116.562 96.25 108.688C85.562 100.812 70.5 103.094 62.688 113.75C32.156 155.188 16 204.375 16 256C16 388.344 123.656 496 256 496S496 388.344 496 256S388.344 16 256 16ZM239.031 272.969C243.719 277.656 249.844 280 256 280S268.281 277.656 272.969 272.969C282.344 263.594 282.344 248.406 272.969 239.031L192.969 159.031C183.594 149.656 168.406 149.656 159.031 159.031S149.656 183.594 159.031 192.969L239.031 272.969Z" })
  }
));
TimerRegular.displayName = "TimerRegular";
var Timer_default = TimerRegular;
