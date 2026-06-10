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
var ExpandWide_exports = {};
__export(ExpandWide_exports, {
  default: () => ExpandWide_default
});
module.exports = __toCommonJS(ExpandWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ExpandWideSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 64H32C14.312 64 0 78.312 0 96V192C0 209.688 14.312 224 32 224S64 209.688 64 192V128H128C145.688 128 160 113.688 160 96S145.688 64 128 64ZM480 64H384C366.312 64 352 78.312 352 96S366.312 128 384 128H448V192C448 209.688 462.312 224 480 224S512 209.688 512 192V96C512 78.312 497.688 64 480 64ZM128 384H64V320C64 302.312 49.688 288 32 288S0 302.312 0 320V416C0 433.688 14.312 448 32 448H128C145.688 448 160 433.688 160 416S145.688 384 128 384ZM480 288C462.312 288 448 302.312 448 320V384H384C366.312 384 352 398.312 352 416S366.312 448 384 448H480C497.688 448 512 433.688 512 416V320C512 302.312 497.688 288 480 288Z" })
  }
));
ExpandWideSolid.displayName = "ExpandWideSolid";
var ExpandWide_default = ExpandWideSolid;
