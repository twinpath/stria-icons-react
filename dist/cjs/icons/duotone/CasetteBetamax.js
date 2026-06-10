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
var CasetteBetamax_exports = {};
__export(CasetteBetamax_exports, {
  default: () => CasetteBetamax_default
});
module.exports = __toCommonJS(CasetteBetamax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CasetteBetamaxDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 160V432C0 458.51 21.49 480 48 480H528C554.51 480 576 458.51 576 432V160H0ZM160 416C107.051 416 64 372.949 64 320S107.051 224 160 224C212.951 224 256 267.051 256 320S212.951 416 160 416ZM512 416H320V224H512V416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 32H48C21.49 32 0 53.49 0 80V160H576V80C576 53.49 554.51 32 528 32ZM160 224C107.051 224 64 267.051 64 320S107.051 416 160 416C212.951 416 256 372.949 256 320S212.951 224 160 224ZM160 352C142.375 352 128 337.625 128 320S142.375 288 160 288S192 302.375 192 320S177.625 352 160 352Z" })
    ]
  }
));
CasetteBetamaxDuotone.displayName = "CasetteBetamaxDuotone";
var CasetteBetamax_default = CasetteBetamaxDuotone;
