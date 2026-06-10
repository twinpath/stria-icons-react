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
var ArrowsRepeat_exports = {};
__export(ArrowsRepeat_exports, {
  default: () => ArrowsRepeat_default
});
module.exports = __toCommonJS(ArrowsRepeat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRepeatRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 224.969C474.75 224.969 464 235.719 464 248.969C464 306.312 417.344 352.969 360 352.969H145.938L208.969 289.937C218.344 280.562 218.344 265.375 208.969 256S184.406 246.625 175.031 256L71.031 360C61.656 369.375 61.656 384.562 71.031 393.937L175.031 497.937C179.719 502.625 185.844 504.969 192 504.969S204.281 502.625 208.969 497.937C218.344 488.562 218.344 473.375 208.969 464L145.938 400.969H360C443.812 400.969 512 332.781 512 248.969C512 235.719 501.25 224.969 488 224.969ZM152 144.969H366.062L303.031 208C293.656 217.375 293.656 232.562 303.031 241.938C307.719 246.625 313.844 248.969 320 248.969S332.281 246.625 336.969 241.937L440.969 137.937C450.344 128.562 450.344 113.375 440.969 104L336.969 0C327.594 -9.375 312.406 -9.375 303.031 0S293.656 24.562 303.031 33.937L366.062 96.969H152C68.188 96.969 0 165.156 0 248.969C0 262.219 10.75 272.969 24 272.969S48 262.219 48 248.969C48 191.625 94.656 144.969 152 144.969Z" })
  }
));
ArrowsRepeatRegular.displayName = "ArrowsRepeatRegular";
var ArrowsRepeat_default = ArrowsRepeatRegular;
