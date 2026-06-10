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
var Camera_exports = {};
__export(Camera_exports, {
  default: () => Camera_default
});
module.exports = __toCommonJS(Camera_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H376L367.572 73.527C358.205 48.549 334.326 32 307.648 32H204.385C177.736 32 153.875 48.512 144.486 73.453L136 96H64C28.654 96 0 124.652 0 160V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.652 483.346 96 448 96ZM464 416C464 424.822 456.822 432 448 432H64C55.178 432 48 424.822 48 416V160C48 151.178 55.178 144 64 144H169.221L180.924 112.91L189.41 90.363C191.742 84.164 197.762 80 204.385 80H307.648C314.279 80 320.301 84.172 322.629 90.381L331.057 112.854L342.736 144H448C456.822 144 464 151.178 464 160V416ZM256 176C194.145 176 144 226.143 144 288C144 349.855 194.145 400 256 400S368 349.855 368 288C368 226.143 317.855 176 256 176ZM256 352C220.711 352 192 323.289 192 288C192 252.709 220.711 224 256 224S320 252.709 320 288C320 323.289 291.289 352 256 352Z" })
  }
));
CameraRegular.displayName = "CameraRegular";
var Camera_default = CameraRegular;
