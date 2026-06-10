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
var Blanket_exports = {};
__export(Blanket_exports, {
  default: () => Blanket_default
});
module.exports = __toCommonJS(Blanket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlanketDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 128C448 128 447.908 261.697 447.723 301.26C446.24 258.441 411.172 224 368 224H128C57.422 224 0 281.422 0 352V128C0 75.125 43.125 32 96 32H352C404.875 32 448 75.125 448 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 432V464C448 472.75 440.75 480 432 480H128C57.25 480 0 422.75 0 352C0 281.422 57.422 224 128 224H368C411.172 224 446.24 258.441 447.723 301.26L447.625 312.375C443.375 354 405.125 384 363.25 384H128C110.25 384 96 369.75 96 352S110.25 320 128 320H368C376.75 320 384 312.75 384 304S376.75 288 368 288H128C92.75 288 64 316.75 64 352S92.75 416 128 416H432C440.75 416 448 423.25 448 432Z" })
    ]
  }
));
BlanketDuotone.displayName = "BlanketDuotone";
var Blanket_default = BlanketDuotone;
