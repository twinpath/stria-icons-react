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
var CameraRetro_exports = {};
__export(CameraRetro_exports, {
  default: () => CameraRetro_default
});
module.exports = __toCommonJS(CameraRetro_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraRetroRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H271.107C261.17 32 251.371 34.312 242.482 38.758L192 64H160V48C160 39.162 152.836 32 144 32H80C71.164 32 64 39.162 64 48V64C28.654 64 0 92.652 0 128V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM464 416C464 424.836 456.836 432 448 432H64C55.164 432 48 424.836 48 416V240H132.525C129.861 250.285 128 260.883 128 272C128 342.691 185.309 400 256 400C326.693 400 384 342.691 384 272C384 260.883 382.139 250.285 379.475 240H464V416ZM176 272C176 227.887 211.889 192 256 192S336 227.887 336 272C336 316.111 300.111 352 256 352S176 316.111 176 272ZM464 192H355.182C331.717 162.953 296.25 144 256 144C215.752 144 180.283 162.953 156.818 192H48V128C48 119.162 55.164 112 64 112H203.332L272 80H448C456.836 80 464 87.162 464 96V192Z" })
  }
));
CameraRetroRegular.displayName = "CameraRetroRegular";
var CameraRetro_default = CameraRetroRegular;
