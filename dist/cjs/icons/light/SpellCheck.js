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
var SpellCheck_exports = {};
__export(SpellCheck_exports, {
  default: () => SpellCheck_default
});
module.exports = __toCommonJS(SpellCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpellCheckLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M571.312 281.047C565.062 274.797 554.937 274.797 548.687 281.047L356.36 473.375L251.313 368.328C245.064 362.078 234.939 362.078 228.689 368.328S222.439 384.703 228.689 390.953L345.047 507.312C348.172 510.438 352.266 512 356.36 512C360.454 512 364.547 510.438 367.672 507.312L571.312 303.672C577.562 297.422 577.562 287.297 571.312 281.047ZM222.704 233.703L126.705 9.703C121.674 -2.078 102.33 -2.078 97.299 9.703L1.299 233.703C-2.185 241.813 1.58 251.219 9.705 254.703C17.784 258.203 27.221 254.453 30.705 246.297L53.979 192H170.025L193.298 246.297C195.892 252.375 201.798 256 208.001 256C210.111 256 212.251 255.594 214.298 254.703C222.423 251.219 226.189 241.812 222.704 233.703ZM67.693 160L112.002 56.625L156.31 160H67.693ZM272.001 256H376C415.703 256 448 223.703 448 184C448 152.969 428.266 126.453 400.672 116.359C410.266 104.125 416 88.719 416 72C416 32.297 383.703 0 344 0H272.001C263.157 0 256.001 7.156 256.001 16V240C256.001 248.844 263.157 256 272.001 256ZM288.001 32H344C366.063 32 384 49.938 384 72S366.063 112 344 112H288.001V32ZM288.001 144H376C398.063 144 416 161.938 416 184S398.063 224 376 224H288.001V144Z" })
  }
));
SpellCheckLight.displayName = "SpellCheckLight";
var SpellCheck_default = SpellCheckLight;
