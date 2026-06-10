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
var SignalFair_exports = {};
__export(SignalFair_exports, {
  default: () => SignalFair_default
});
module.exports = __toCommonJS(SignalFair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalFairDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 192H288C270.327 192 256 206.327 256 224V480C256 497.673 270.327 512 288 512H288C305.673 512 320 497.673 320 480V224C320 206.327 305.673 192 288 192ZM416 96H416C398.327 96 384 110.327 384 128V480C384 497.673 398.327 512 416 512H416C433.673 512 448 497.673 448 480V128C448 110.327 433.673 96 416 96ZM544 0H544C526.327 0 512 14.327 512 32V480C512 497.673 526.327 512 544 512H544C561.673 512 576 497.673 576 480V32C576 14.327 561.673 0 544 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 384H32C14.327 384 0 398.327 0 416V480C0 497.673 14.327 512 32 512H32C49.673 512 64 497.673 64 480V416C64 398.327 49.673 384 32 384ZM160 288H160C142.327 288 128 302.327 128 320V480C128 497.673 142.327 512 160 512H160C177.673 512 192 497.673 192 480V320C192 302.327 177.673 288 160 288Z" })
    ]
  }
));
SignalFairDuotone.displayName = "SignalFairDuotone";
var SignalFair_default = SignalFairDuotone;
