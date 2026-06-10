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
var ReplyAll_exports = {};
__export(ReplyAll_exports, {
  default: () => ReplyAll_default
});
module.exports = __toCommonJS(ReplyAll_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyAllDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.387 226.158L184.387 378.158C199.762 391.455 224.074 380.705 224.074 360.002V344.168L66.406 208.002L224.074 71.834V56.018C224.074 35.346 199.793 24.549 184.387 37.846L8.387 189.846C-2.693 199.414 -2.693 216.59 8.387 226.158Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136.309 226.158L312.309 378.158C327.684 391.455 351.996 380.705 351.996 360.002V275.963C460.492 288.539 503.076 334.758 464.594 457.83C459.563 473.924 479 486.393 492.656 476.455C536.406 444.643 576 383.768 576 322.33C576 191.014 481.137 149.102 351.996 138.857V56.018C351.996 35.346 327.715 24.549 312.309 37.846L136.309 189.846C125.215 199.408 125.246 216.596 136.309 226.158Z" })
    ]
  }
));
ReplyAllDuotone.displayName = "ReplyAllDuotone";
var ReplyAll_default = ReplyAllDuotone;
