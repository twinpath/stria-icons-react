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
var Router_exports = {};
__export(Router_exports, {
  default: () => Router_default
});
module.exports = __toCommonJS(Router_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouterLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 392C82.75 392 72 402.75 72 416S82.75 440 96 440S120 429.25 120 416S109.25 392 96 392ZM192 392C178.75 392 168 402.75 168 416S178.75 440 192 440S216 429.25 216 416S205.25 392 192 392ZM512 320H368V240C368 231.199 360.801 224 352 224S336 231.199 336 240V320H64C28.654 320 0 348.652 0 384V448C0 483.346 28.654 512 64 512H512C547.346 512 576 483.346 576 448V384C576 348.652 547.346 320 512 320ZM544 448C544 465.672 529.674 480 512 480H64C46.326 480 32 465.672 32 448V384C32 366.326 46.326 352 64 352H512C529.674 352 544 366.326 544 384V448ZM154.25 103.719C209.562 57.469 279.781 32 352 32S494.438 57.469 549.75 103.719C552.719 106.219 556.375 107.438 560 107.438C564.562 107.438 569.094 105.484 572.281 101.703C577.938 94.922 577.031 84.828 570.25 79.156C509.219 28.109 431.719 0 352 0S194.781 28.109 133.75 79.156C126.969 84.828 126.062 94.922 131.719 101.703C137.438 108.484 147.531 109.359 154.25 103.719ZM197.75 151.953C190.969 157.625 190.062 167.719 195.719 174.5C201.375 181.266 211.5 182.125 218.25 176.516C255.688 145.234 303.156 128 352 128S448.312 145.234 485.75 176.516C488.719 179.016 492.375 180.234 496 180.234C500.562 180.234 505.125 178.281 508.281 174.5C513.938 167.719 513.031 157.625 506.25 151.953C463.094 115.875 408.312 96 352 96S240.906 115.875 197.75 151.953Z" })
  }
));
RouterLight.displayName = "RouterLight";
var Router_default = RouterLight;
