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
const CameraViewfinderDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 432H48V336C48 327.162 40.836 320 32 320H16C7.164 320 0 327.162 0 336V448C0 465.672 14.326 480 32 480H144C152.836 480 160 472.836 160 464V448C160 439.162 152.836 432 144 432ZM144 32H32C14.326 32 0 46.326 0 64V176C0 184.836 7.164 192 16 192H32C40.836 192 48 184.836 48 176V80H144C152.836 80 160 72.836 160 64V48C160 39.162 152.836 32 144 32ZM480 32H368C359.164 32 352 39.162 352 48V64C352 72.836 359.164 80 368 80H464V176C464 184.836 471.164 192 480 192H496C504.836 192 512 184.836 512 176V64C512 46.326 497.674 32 480 32ZM496 320H480C471.164 320 464 327.162 464 336V432H368C359.164 432 352 439.162 352 448V464C352 472.836 359.164 480 368 480H480C497.674 480 512 465.672 512 448V336C512 327.162 504.836 320 496 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 320V192C384 174.326 369.674 160 352 160H316L309.812 143.562C306.312 134.188 297.375 128 287.375 128H224.625C214.625 128 205.625 134.188 202.125 143.562L196 160H160C142.326 160 128 174.326 128 192V320C128 337.672 142.326 352 160 352H352C369.674 352 384 337.672 384 320ZM256 304C229.5 304 208 282.5 208 256S229.5 208 256 208S304 229.5 304 256S282.5 304 256 304Z" })
    ]
  }
));
CameraViewfinderDuotone.displayName = "CameraViewfinderDuotone";
var CameraViewfinder_default = CameraViewfinderDuotone;
