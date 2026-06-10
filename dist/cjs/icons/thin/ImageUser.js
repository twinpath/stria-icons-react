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
var ImageUser_exports = {};
__export(ImageUser_exports, {
  default: () => ImageUser_default
});
module.exports = __toCommonJS(ImageUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImageUserThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 256C291.348 256 320 227.344 320 192S291.348 128 256 128C220.656 128 192 156.656 192 192S220.656 256 256 256ZM256 144C282.469 144 304 165.531 304 192S282.469 240 256 240S208 218.469 208 192S229.531 144 256 144ZM464 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H464C490.51 480 512 458.508 512 432V80C512 53.492 490.51 32 464 32ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V80C16 62.355 30.355 48 48 48H464C481.645 48 496 62.355 496 80V432ZM288 288H224C179.82 288 144 323.816 144 368C144 376.836 151.164 384 160 384H352C360.836 384 368 376.836 368 368C368 323.816 332.184 288 288 288ZM160 368C160 332.711 188.711 304 224 304H288C323.289 304 352 332.711 352 368H160Z" })
  }
));
ImageUserThin.displayName = "ImageUserThin";
var ImageUser_default = ImageUserThin;
