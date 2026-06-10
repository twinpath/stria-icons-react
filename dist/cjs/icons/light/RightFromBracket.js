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
var RightFromBracket_exports = {};
__export(RightFromBracket_exports, {
  default: () => RightFromBracket_default
});
module.exports = __toCommonJS(RightFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightFromBracketLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 448H80C53.531 448 32 426.469 32 400V112C32 85.531 53.531 64 80 64H176C184.844 64 192 56.844 192 48S184.844 32 176 32H80C35.875 32 0 67.875 0 112V400C0 444.125 35.875 480 80 480H176C184.844 480 192 472.844 192 464S184.844 448 176 448ZM502.625 233.375L374.625 105.375C365.469 96.219 351.719 93.469 339.75 98.438C327.797 103.375 320 115.062 320 128V192H176C149.492 192 128 213.492 128 240V272C128 298.508 149.492 320 176 320H320V384C320 396.938 327.797 408.625 339.75 413.562C351.719 418.531 365.469 415.781 374.625 406.625L502.625 278.625C508.875 272.375 512 264.188 512 256S508.875 239.625 502.625 233.375ZM352 384V288H176C167.176 288 160 280.82 160 272V240C160 231.18 167.176 224 176 224H352V192L351.996 128L479.996 256L352 384Z" })
  }
));
RightFromBracketLight.displayName = "RightFromBracketLight";
var RightFromBracket_default = RightFromBracketLight;
