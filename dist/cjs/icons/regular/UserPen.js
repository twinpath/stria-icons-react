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
var UserPen_exports = {};
__export(UserPen_exports, {
  default: () => UserPen_default
});
module.exports = __toCommonJS(UserPen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserPenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.689 295.312L568.697 367.32L542.312 393.703H542.307L443.385 492.613C440.871 495.129 437.672 496.836 434.189 497.535L362.77 511.82C356.473 513.078 350.922 507.523 352.18 501.234L366.461 429.82C367.158 426.332 368.871 423.129 371.385 420.617L496.689 295.312ZM629.457 255.656L608.355 234.551C594.297 220.492 571.504 220.492 557.447 234.551L519.313 272.688L591.322 344.695L629.453 306.566C643.514 292.508 643.516 269.715 629.457 255.656ZM360.973 512C361.562 512 362.162 511.941 362.77 511.82C361.59 512.057 360.496 511.846 359.408 511.643C359.939 511.742 360.414 512 360.973 512ZM96 128C96 57.307 153.307 0 224 0S352 57.307 352 128C352 198.691 294.693 256 224 256S96 198.691 96 128ZM144 128C144 172.111 179.889 208 224 208S304 172.111 304 128C304 83.887 268.111 48 224 48S144 83.887 144 128ZM326.992 464H48.994C56.895 400.945 110.84 352 176 352H272C305.957 352 336.668 365.486 359.604 387.143L393.699 353.047C362.082 322.729 319.264 304 272 304H176C78.797 304 0 382.797 0 480C0 497.672 14.326 512 32 512H321.084C319.838 506.469 319.654 500.688 320.801 494.959L326.992 464Z" })
  }
));
UserPenRegular.displayName = "UserPenRegular";
var UserPen_default = UserPenRegular;
