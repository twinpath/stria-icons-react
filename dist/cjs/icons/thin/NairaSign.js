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
var NairaSign_exports = {};
__export(NairaSign_exports, {
  default: () => NairaSign_default
});
module.exports = __toCommonJS(NairaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NairaSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 272H384V40C384 35.594 380.406 32 376 32S368 35.594 368 40V272H245.039L78.531 35.406C76.531 32.531 72.781 31.281 69.594 32.375C66.25 33.438 64 36.5 64 40V272H8C3.594 272 0 275.594 0 280S3.594 288 8 288H64V472C64 476.406 67.594 480 72 480S80 476.406 80 472V288H236.742L369.469 476.594C371 478.781 373.438 480 376 480C376.812 480 377.625 479.875 378.406 479.625C381.75 478.562 384 475.5 384 472V288H440C444.406 288 448 284.406 448 280S444.406 272 440 272ZM80 272V65.281L225.482 272H80ZM368 446.719L256.299 288H368V446.719Z" })
  }
));
NairaSignThin.displayName = "NairaSignThin";
var NairaSign_default = NairaSignThin;
