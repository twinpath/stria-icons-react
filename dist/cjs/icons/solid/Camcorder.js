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
var Camcorder_exports = {};
__export(Camcorder_exports, {
  default: () => Camcorder_default
});
module.exports = __toCommonJS(Camcorder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CamcorderSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M525.625 165.75L416 241.25V398.75L525.625 474.25C546.75 488.75 576 473.875 576 448.375V191.5C576 166.125 546.875 151.125 525.625 165.75ZM320 160H96V128C96 110.4 110.4 96 128 96H288C305.673 96 320 81.673 320 64V64C320 46.327 305.673 32 288 32H128C74.981 32 32 74.981 32 128V162.875C12.875 169.5 0 187.5 0 207.75V416C0 451.346 28.654 480 64 480H320C355.346 480 384 451.346 384 416V224C384 188.654 355.346 160 320 160ZM304 256H80C71.164 256 64 248.836 64 240C64 231.162 71.164 224 80 224H304C312.838 224 320 231.162 320 240C320 248.836 312.838 256 304 256Z" })
  }
));
CamcorderSolid.displayName = "CamcorderSolid";
var Camcorder_default = CamcorderSolid;
