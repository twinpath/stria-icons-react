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
var CameraViewfinder_exports = {};
__export(CameraViewfinder_exports, {
  default: () => CameraViewfinder_default
});
module.exports = __toCommonJS(CameraViewfinder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraViewfinderRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 176V352C112 369.672 126.326 384 144 384H368C385.674 384 400 369.672 400 352V176C400 158.326 385.674 144 368 144H332L325.812 127.562C322.312 118.188 313.375 112 303.375 112H208.625C198.625 112 189.625 118.188 186.125 127.562L180 144H144C126.326 144 112 158.326 112 176ZM160 192H213.338L224.979 160.76L225.262 160H286.734L287.078 160.91L298.781 192H352V336H160V192ZM136 432H48V344C48 330.745 37.255 320 24 320H24C10.745 320 0 330.745 0 344V448C0 465.673 14.327 480 32 480H136C149.255 480 160 469.255 160 456V456C160 442.745 149.255 432 136 432ZM24 192H24C37.255 192 48 181.255 48 168V80H136C149.255 80 160 69.255 160 56V56C160 42.745 149.255 32 136 32H32C14.327 32 0 46.327 0 64V168C0 181.255 10.745 192 24 192ZM480 32H376C362.745 32 352 42.745 352 56V56C352 69.255 362.745 80 376 80H464V168C464 181.255 474.745 192 488 192L488 192C501.255 192 512 181.255 512 168V64C512 46.327 497.673 32 480 32ZM488 320L488 320C474.745 320 464 330.745 464 344V432H376C362.745 432 352 442.745 352 456V456C352 469.255 362.745 480 376 480H480C497.673 480 512 465.673 512 448V344C512 330.745 501.255 320 488 320ZM256 224C233.918 224 216 241.916 216 264C216 286.082 233.918 304 256 304C278.084 304 296 286.082 296 264C296 241.916 278.084 224 256 224Z" })
  }
));
CameraViewfinderRegular.displayName = "CameraViewfinderRegular";
var CameraViewfinder_default = CameraViewfinderRegular;
