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
var Grip_exports = {};
__export(Grip_exports, {
  default: () => Grip_default
});
module.exports = __toCommonJS(Grip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GripDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 288H32C14.375 288 0 302.375 0 320V384C0 401.625 14.375 416 32 416H96C113.625 416 128 401.625 128 384V320C128 302.375 113.625 288 96 288ZM256 288H192C174.375 288 160 302.375 160 320V384C160 401.625 174.375 416 192 416H256C273.625 416 288 401.625 288 384V320C288 302.375 273.625 288 256 288ZM416 288H352C334.375 288 320 302.375 320 320V384C320 401.625 334.375 416 352 416H416C433.625 416 448 401.625 448 384V320C448 302.375 433.625 288 416 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 96H192C174.375 96 160 110.375 160 128V192C160 209.625 174.375 224 192 224H256C273.625 224 288 209.625 288 192V128C288 110.375 273.625 96 256 96ZM96 96H32C14.375 96 0 110.375 0 128V192C0 209.625 14.375 224 32 224H96C113.625 224 128 209.625 128 192V128C128 110.375 113.625 96 96 96ZM416 96H352C334.375 96 320 110.375 320 128V192C320 209.625 334.375 224 352 224H416C433.625 224 448 209.625 448 192V128C448 110.375 433.625 96 416 96Z" })
    ]
  }
));
GripDuotone.displayName = "GripDuotone";
var Grip_default = GripDuotone;
