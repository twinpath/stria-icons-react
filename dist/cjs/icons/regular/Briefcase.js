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
var Briefcase_exports = {};
__export(Briefcase_exports, {
  default: () => Briefcase_default
});
module.exports = __toCommonJS(Briefcase_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BriefcaseRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H384V64C384 28.654 355.346 0 320 0H192C156.654 0 128 28.654 128 64V96H64C28.654 96 0 124.654 0 160V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.654 483.346 96 448 96ZM192 48H320C328.837 48 336 55.163 336 64V96H176V64C176 55.163 183.163 48 192 48ZM64 144H448C456.8 144 464 151.2 464 160V256H48V160C48 151.2 55.2 144 64 144ZM448 432H64C55.2 432 48 424.8 48 416V304H192V320C192 337.673 206.327 352 224 352H288C305.673 352 320 337.673 320 320V304H464V416C464 424.8 456.8 432 448 432Z" })
  }
));
BriefcaseRegular.displayName = "BriefcaseRegular";
var Briefcase_default = BriefcaseRegular;
