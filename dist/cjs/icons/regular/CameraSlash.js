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
var CameraSlash_exports = {};
__export(CameraSlash_exports, {
  default: () => CameraSlash_default
});
module.exports = __toCommonJS(CameraSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128.001 432C119.179 432 112.001 424.822 112.001 416V184.471L65.23 147.812C64.466 151.764 64.001 155.826 64.001 160V416C64.001 451.346 92.655 480 128.001 480H489.058L427.816 432H128.001ZM630.812 469.102L574.88 425.264C575.339 422.199 576.001 419.197 576.001 416V160C576.001 124.652 547.347 96 512.001 96H440.001L431.573 73.527C422.206 48.549 398.327 32 371.65 32H268.386C241.738 32 217.876 48.512 208.488 73.453L200.001 96H154.779L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.187 506.883C611.687 515.086 626.749 513.211 634.874 502.805C643.062 492.367 641.249 477.273 630.812 469.102ZM318.339 224.193C318.907 224.178 319.429 224 320.001 224C350.646 224 376.271 245.674 382.501 274.482L318.339 224.193ZM528.001 388.521L429.232 311.107C430.864 303.637 432.001 295.982 432.001 288C432.001 226.143 381.857 176 320.001 176C302.493 176 286.042 180.145 271.378 187.387L216.021 144H233.222L244.925 112.91L253.411 90.363C255.743 84.164 261.763 80 268.386 80H371.65C378.28 80 384.302 84.172 386.63 90.381L395.058 112.854L406.738 144H512.001C520.823 144 528.001 151.178 528.001 160V388.521ZM370.782 387.299L325.089 351.484C323.382 351.621 321.743 352 320.001 352C288.185 352 261.927 328.594 257.027 298.139L211.257 262.266C209.298 270.562 208.001 279.105 208.001 288C208.001 349.855 258.146 400 320.001 400C338.386 400 355.476 395.148 370.782 387.299Z" })
  }
));
CameraSlashRegular.displayName = "CameraSlashRegular";
var CameraSlash_default = CameraSlashRegular;
