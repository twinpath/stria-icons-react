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
var BoxArchive_exports = {};
__export(BoxArchive_exports, {
  default: () => BoxArchive_default
});
module.exports = __toCommonJS(BoxArchive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxArchiveLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32H48C21.49 32 0 53.49 0 80V144C0 152.75 7.25 160 16 160H32V416C32 451.346 60.654 480 96 480H416C451.346 480 480 451.346 480 416V160H496C504.75 160 512 152.75 512 144V80C512 53.49 490.51 32 464 32ZM448 416C448 433.6 433.6 448 416 448H96C78.4 448 64 433.6 64 416V160H448V416ZM480 128H32V80C32 71.25 39.25 64 48 64H464C472.75 64 480 71.25 480 80V128ZM176 256H336C344.836 256 352 248.836 352 240S344.836 224 336 224H176C167.164 224 160 231.164 160 240S167.164 256 176 256Z" })
  }
));
BoxArchiveLight.displayName = "BoxArchiveLight";
var BoxArchive_default = BoxArchiveLight;
