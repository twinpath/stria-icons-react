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
var LeftToLine_exports = {};
__export(LeftToLine_exports, {
  default: () => LeftToLine_default
});
module.exports = __toCommonJS(LeftToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftToLineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 64H32C14.327 64 0 78.327 0 96V416C0 433.673 14.327 448 32 448H32C49.673 448 64 433.673 64 416V96C64 78.327 49.673 64 32 64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M103.2 238.547L247.303 102.547C254.278 95.969 264.502 94.172 273.307 97.953C282.11 101.75 287.817 110.422 287.817 120V192H415.909C433.594 192 447.932 206.326 447.932 224V288C447.932 305.672 433.594 320 415.909 320H287.817V392C287.817 401.578 282.11 410.25 273.307 414.047C264.502 417.828 254.278 416.031 247.303 409.453L103.2 273.453C93.6 264.391 93.6 247.609 103.2 238.547Z" })
    ]
  }
));
LeftToLineDuotone.displayName = "LeftToLineDuotone";
var LeftToLine_default = LeftToLineDuotone;
