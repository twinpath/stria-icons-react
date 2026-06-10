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
var ArrowUp19_exports = {};
__export(ArrowUp19_exports, {
  default: () => ArrowUp19_default
});
module.exports = __toCommonJS(ArrowUp19_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUp19Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 256C339.875 256 304 291.875 304 336S339.875 416 384 416C400.734 416 416.254 410.801 429.107 401.988C421.275 428.484 396.994 448 368 448C359.156 448 352 455.156 352 464S359.156 480 368 480C420.938 480 464 436.938 464 384V336C464 291.875 428.125 256 384 256ZM384 384C357.531 384 336 362.469 336 336S357.531 288 384 288S432 309.531 432 336S410.469 384 384 384ZM336 224H432C440.844 224 448 216.844 448 208S440.844 192 432 192H400V48C400 39.156 392.844 32 384 32H352C343.156 32 336 39.156 336 48S343.156 64 352 64H368V192H336C327.156 192 320 199.156 320 208S327.156 224 336 224ZM139.312 36.688C133.062 30.438 122.937 30.438 116.688 36.688L20.688 132.688C14.438 138.938 14.438 149.063 20.688 155.312S37.063 161.562 43.312 155.312L112 86.625V464C112 472.844 119.156 480 128 480S144 472.844 144 464V86.625L212.688 155.312C215.812 158.438 219.906 160 224 160S232.188 158.438 235.312 155.312C241.562 149.062 241.562 138.937 235.312 132.688L139.312 36.688Z" })
  }
));
ArrowUp19Light.displayName = "ArrowUp19Light";
var ArrowUp19_default = ArrowUp19Light;
