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
var ArrowRightToLine_exports = {};
__export(ArrowRightToLine_exports, {
  default: () => ArrowRightToLine_default
});
module.exports = __toCommonJS(ArrowRightToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightToLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M137.375 150.625L210.75 224H32C14.312 224 0 238.312 0 256S14.312 288 32 288H210.75L137.375 361.375C131.125 367.625 128 375.812 128 384S131.125 400.375 137.375 406.625C149.875 419.125 170.125 419.125 182.625 406.625L310.625 278.625C323.125 266.125 323.125 245.875 310.625 233.375L182.625 105.375C170.125 92.875 149.875 92.875 137.375 105.375S124.875 138.125 137.375 150.625ZM384 96V416C384 433.688 398.312 448 416 448S448 433.688 448 416V96C448 78.312 433.688 64 416 64S384 78.312 384 96Z" })
  }
));
ArrowRightToLineSolid.displayName = "ArrowRightToLineSolid";
var ArrowRightToLine_default = ArrowRightToLineSolid;
