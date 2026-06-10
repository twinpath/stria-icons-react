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
var CameraPolaroid_exports = {};
__export(CameraPolaroid_exports, {
  default: () => CameraPolaroid_default
});
module.exports = __toCommonJS(CameraPolaroid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraPolaroidSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 352.068L512 256V80C512 53.49 490.51 32 464 32H112C85.49 32 64 53.49 64 80V256L0 352.068V448C0 465.6 14.4 480 32 480H544C561.6 480 576 465.6 576 448V352.068ZM384 112C384 103.199 391.201 96 400 96H432C440.801 96 448 103.199 448 112V144C448 152.801 440.801 160 432 160H400C391.201 160 384 152.801 384 144V112ZM288 128C323.375 128 352 156.625 352 192S323.375 256 288 256S224 227.375 224 192S252.625 128 288 128ZM464 416H112C103.164 416 96 408.836 96 400C96 391.162 103.164 384 112 384H464C472.838 384 480 391.162 480 400C480 408.836 472.838 416 464 416Z" })
  }
));
CameraPolaroidSolid.displayName = "CameraPolaroidSolid";
var CameraPolaroid_default = CameraPolaroidSolid;
