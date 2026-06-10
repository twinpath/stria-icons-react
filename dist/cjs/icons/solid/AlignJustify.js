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
var AlignJustify_exports = {};
__export(AlignJustify_exports, {
  default: () => AlignJustify_default
});
module.exports = __toCommonJS(AlignJustify_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlignJustifySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 416H32C14.327 416 0 430.327 0 448V448C0 465.673 14.327 480 32 480H416C433.673 480 448 465.673 448 448V448C448 430.327 433.673 416 416 416ZM416 288H32C14.327 288 0 302.327 0 320V320C0 337.673 14.327 352 32 352H416C433.673 352 448 337.673 448 320V320C448 302.327 433.673 288 416 288ZM416 160H32C14.327 160 0 174.327 0 192V192C0 209.673 14.327 224 32 224H416C433.673 224 448 209.673 448 192V192C448 174.327 433.673 160 416 160ZM416 32H32C14.327 32 0 46.327 0 64V64C0 81.673 14.327 96 32 96H416C433.673 96 448 81.673 448 64V64C448 46.327 433.673 32 416 32Z" })
  }
));
AlignJustifySolid.displayName = "AlignJustifySolid";
var AlignJustify_default = AlignJustifySolid;
