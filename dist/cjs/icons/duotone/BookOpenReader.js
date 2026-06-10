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
var BookOpenReader_exports = {};
__export(BookOpenReader_exports, {
  default: () => BookOpenReader_default
});
module.exports = __toCommonJS(BookOpenReader_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookOpenReaderDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 96C352 43 309 0 256 0S160 43 160 96S203 192 256 192S352 149 352 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 219.125V431.662C0 445.912 11.625 457.912 26.5 458.662C75.318 461.18 180.178 471.367 240 512V245.232C181.361 205.492 79.898 194.85 29.75 192C13.5 191.125 0 203.5 0 219.125ZM482.25 192C432.16 194.848 330.875 205.467 272.203 245.094C272.074 245.182 272 245.326 272 245.482V511.906C332.043 471.518 436.695 461.178 485.5 458.662C500.375 457.912 512 445.912 512 431.662V219.125C512 203.5 498.5 191.125 482.25 192Z" })
    ]
  }
));
BookOpenReaderDuotone.displayName = "BookOpenReaderDuotone";
var BookOpenReader_default = BookOpenReaderDuotone;
