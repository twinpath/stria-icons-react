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
var LightbulbExclamation_exports = {};
__export(LightbulbExclamation_exports, {
  default: () => LightbulbExclamation_default
});
module.exports = __toCommonJS(LightbulbExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LightbulbExclamationSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.5 0C89.5 0.25 16 83 16 176C16 220.375 32.5 260.875 59.5 291.75C76.125 310.625 101.875 350 111.75 383.25C111.75 383.5 111.875 383.75 111.875 384H272.125C272.125 383.75 272.25 383.5 272.25 383.25C282.125 350 307.875 310.625 324.5 291.75C351.5 260.875 368 220.375 368 176C368 78.625 288.875 -0.25 191.5 0ZM168 88C168 74.75 178.75 64 192 64S216 74.75 216 88V200C216 213.25 205.25 224 192 224S168 213.25 168 200V88ZM192 320C174.326 320 160 305.672 160 288S174.326 256 192 256S224 270.328 224 288S209.674 320 192 320ZM112 454.375C112.125 460.625 113.875 466.75 117.375 472L134.5 497.75C140.5 506.625 150.5 512 161.125 512H222.875C233.625 512 243.625 506.625 249.5 497.75L266.625 472C270.125 466.75 272 460.625 272 454.375V416H112V454.375Z" })
  }
));
LightbulbExclamationSolid.displayName = "LightbulbExclamationSolid";
var LightbulbExclamation_default = LightbulbExclamationSolid;
