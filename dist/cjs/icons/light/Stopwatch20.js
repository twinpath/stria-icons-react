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
var Stopwatch20_exports = {};
__export(Stopwatch20_exports, {
  default: () => Stopwatch20_default
});
module.exports = __toCommonJS(Stopwatch20_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Stopwatch20Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M427.312 139.312C433.562 133.062 433.562 122.937 427.312 116.688S410.937 110.438 404.688 116.688L367.607 153.766C333.881 121.516 289.383 100.578 240 96.809V32H304C312.836 32 320 24.836 320 16S312.836 0 304 0H144C135.164 0 128 7.164 128 16S135.164 32 144 32H208V96.809C100.627 105.008 16 194.527 16 304C16 418.875 109.125 512 224 512S432 418.875 432 304C432 256.418 415.848 212.707 388.965 177.66L427.312 139.312ZM400 304C400 401.047 321.047 480 224 480S48 401.047 48 304S126.953 128 224 128S400 206.953 400 304ZM288 192C261.531 192 240 213.531 240 240V368C240 394.469 261.531 416 288 416S336 394.469 336 368V240C336 213.531 314.469 192 288 192ZM304 368C304 376.812 296.828 384 288 384S272 376.812 272 368V240C272 231.188 279.172 224 288 224S304 231.188 304 240V368ZM160 192C133.531 192 112 213.531 112 240C112 248.844 119.156 256 128 256S144 248.844 144 240C144 231.188 151.172 224 160 224S176 231.188 176 240V248.125C176 270.25 166.375 291.187 149.594 305.562C125.703 326.031 112 355.812 112 387.281V400C112 408.844 119.156 416 128 416H192C200.844 416 208 408.844 208 400S200.844 384 192 384H144.078C144.969 363.125 154.453 343.531 170.406 329.875C194.297 309.406 208 279.594 208 248.125V240C208 213.531 186.469 192 160 192Z" })
  }
));
Stopwatch20Light.displayName = "Stopwatch20Light";
var Stopwatch20_default = Stopwatch20Light;
