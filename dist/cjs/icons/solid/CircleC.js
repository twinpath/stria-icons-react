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
var CircleC_exports = {};
__export(CircleC_exports, {
  default: () => CircleC_default
});
module.exports = __toCommonJS(CircleC_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM199.25 312.625C214.172 327.688 234 336 255.094 336C276.188 336 296.016 327.719 310.953 312.625C320.281 303.25 335.5 303.125 344.891 312.5C354.313 321.812 354.375 337 345.047 346.438C321.031 370.656 289.078 384 255.094 384C255.094 384 255.094 384 255.078 384C221.094 384 189.156 370.656 165.156 346.438C115.719 296.594 115.719 215.438 165.156 165.562C213.141 117.094 297 117.094 345.047 165.562C354.375 174.969 354.312 190.156 344.891 199.5C335.5 208.812 320.312 208.781 310.953 199.344C281.078 169.219 229.094 169.25 199.25 199.344C168.281 230.594 168.281 281.406 199.25 312.625Z" })
  }
));
CircleCSolid.displayName = "CircleCSolid";
var CircleC_default = CircleCSolid;
