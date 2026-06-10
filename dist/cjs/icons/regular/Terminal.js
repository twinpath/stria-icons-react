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
var Terminal_exports = {};
__export(Terminal_exports, {
  default: () => Terminal_default
});
module.exports = __toCommonJS(Terminal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TerminalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M225.652 239.746L41.65 39.742C32.712 29.961 17.525 29.398 7.743 38.336C-2.007 47.305 -2.632 62.493 6.337 72.243L175.37 255.996L6.337 439.749C-2.632 449.499 -2.007 464.687 7.743 473.656C12.368 477.906 18.181 480 23.994 480C30.462 480 36.931 477.406 41.65 472.25L225.652 272.246C234.121 263.059 234.121 248.933 225.652 239.746ZM552 431.999H247.996C234.746 431.999 223.996 442.749 223.996 456S234.746 480 247.996 480H552C565.25 480 576 469.25 576 456S565.25 431.999 552 431.999Z" })
  }
));
TerminalRegular.displayName = "TerminalRegular";
var Terminal_default = TerminalRegular;
