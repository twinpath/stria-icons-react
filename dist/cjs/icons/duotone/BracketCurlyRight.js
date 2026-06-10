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
var BracketCurlyRight_exports = {};
__export(BracketCurlyRight_exports, {
  default: () => BracketCurlyRight_default
});
module.exports = __toCommonJS(BracketCurlyRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketCurlyRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 64V64C32 81.673 46.327 96 64 96H96C113.6 96 128 110.4 128 128V165.475C128 190.943 138.117 215.367 156.125 233.375L178.75 256L156.108 278.642C138.111 296.639 128 321.048 128 346.5V384C128 401.6 113.6 416 96 416H64C46.327 416 32 430.327 32 448V448C32 465.673 46.327 480 64 480H96C149.019 480 192 437.019 192 384V346.5C192 338.016 195.37 329.88 201.369 323.881L246.625 278.625C259.12 266.13 259.12 245.87 246.625 233.375L201.369 188.119C195.37 182.12 192 173.984 192 165.5V128C192 74.981 149.019 32 96 32H64C46.327 32 32 46.327 32 64Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
BracketCurlyRightDuotone.displayName = "BracketCurlyRightDuotone";
var BracketCurlyRight_default = BracketCurlyRightDuotone;
