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
var SignalSlash_exports = {};
__export(SignalSlash_exports, {
  default: () => SignalSlash_default
});
module.exports = __toCommonJS(SignalSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 287.996C174.326 287.996 160 302.322 160 319.994V479.992C160 497.664 174.326 511.992 192 511.992C209.672 511.992 224 497.664 224 479.992V319.994C224 302.322 209.672 287.996 192 287.996ZM288 480C288 497.672 302.326 512 320 512S352 497.672 352 480V372.574L288 322.414V480ZM64 383.994C46.326 383.994 32 398.32 32 415.994V479.992C32 497.664 46.326 511.992 64 511.992C81.672 511.992 96 497.664 96 479.992V415.994C96 398.32 81.674 383.994 64 383.994ZM320 192C309.348 192 300.371 197.547 294.555 205.551L352 250.576V224C352 206.326 337.674 192 320 192ZM575.998 0C558.324 0 543.998 14.326 543.998 32V401.059L607.998 451.221V32C607.998 14.326 593.672 0 575.998 0ZM416 480C416 497.672 430.326 512 448 512S480 497.672 480 480V472.898L416 422.736V480ZM448 96C430.326 96 416 110.326 416 128V300.736L480 350.898V128C480 110.326 465.674 96 448 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.811 469.102L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" })
    ]
  }
));
SignalSlashDuotone.displayName = "SignalSlashDuotone";
var SignalSlash_default = SignalSlashDuotone;
