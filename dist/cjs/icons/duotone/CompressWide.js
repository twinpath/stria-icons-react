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
var CompressWide_exports = {};
__export(CompressWide_exports, {
  default: () => CompressWide_default
});
module.exports = __toCommonJS(CompressWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompressWideDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 288H32C14.312 288 0 302.312 0 320S14.312 352 32 352H96V416C96 433.688 110.312 448 128 448S160 433.688 160 416V320C160 302.312 145.688 288 128 288ZM480 160H416V96C416 78.312 401.688 64 384 64S352 78.312 352 96V192C352 209.688 366.312 224 384 224H480C497.688 224 512 209.688 512 192S497.688 160 480 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 64C110.312 64 96 78.312 96 96V160H32C14.312 160 0 174.312 0 192S14.312 224 32 224H128C145.688 224 160 209.688 160 192V96C160 78.312 145.688 64 128 64ZM480 288H384C366.312 288 352 302.312 352 320V416C352 433.688 366.312 448 384 448S416 433.688 416 416V352H480C497.688 352 512 337.688 512 320S497.688 288 480 288Z" })
    ]
  }
));
CompressWideDuotone.displayName = "CompressWideDuotone";
var CompressWide_default = CompressWideDuotone;
