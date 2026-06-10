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
const ImageUserDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H464C490.51 480 512 458.508 512 432V80C512 53.492 490.51 32 464 32ZM256.014 128C291.359 128 320.014 156.656 320.014 192S291.359 256 256.014 256S192.014 227.344 192.014 192S220.668 128 256.014 128ZM352.014 384H160.014C151.178 384 144.014 376.836 144.014 368C144.014 323.816 179.83 288 224.014 288H288.014C332.197 288 368.014 323.816 368.014 368C368.014 376.836 360.85 384 352.014 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 256C291.346 256 320 227.344 320 192S291.346 128 256 128S192 156.656 192 192S220.654 256 256 256ZM288 288H224C179.816 288 144 323.816 144 368C144 376.836 151.164 384 160 384H352C360.836 384 368 376.836 368 368C368 323.816 332.184 288 288 288Z" })
    ]
  }
));
ImageUserDuotone.displayName = "ImageUserDuotone";
var ImageUser_default = ImageUserDuotone;
