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
var Expand_exports = {};
__export(Expand_exports, {
  default: () => Expand_default
});
module.exports = __toCommonJS(Expand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ExpandDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 32H320C302.312 32 288 46.312 288 64S302.312 96 320 96H384V160C384 177.688 398.312 192 416 192S448 177.688 448 160V64C448 46.312 433.688 32 416 32ZM128 416H64V352C64 334.312 49.688 320 32 320S0 334.312 0 352V448C0 465.688 14.312 480 32 480H128C145.688 480 160 465.688 160 448S145.688 416 128 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 32H32C14.312 32 0 46.312 0 64V160C0 177.688 14.312 192 32 192S64 177.688 64 160V96H128C145.688 96 160 81.688 160 64S145.688 32 128 32ZM416 320C398.312 320 384 334.312 384 352V416H320C302.312 416 288 430.312 288 448S302.312 480 320 480H416C433.688 480 448 465.688 448 448V352C448 334.312 433.688 320 416 320Z" })
    ]
  }
));
ExpandDuotone.displayName = "ExpandDuotone";
var Expand_default = ExpandDuotone;
