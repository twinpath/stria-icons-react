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
var CameraRotate_exports = {};
__export(CameraRotate_exports, {
  default: () => CameraRotate_default
});
module.exports = __toCommonJS(CameraRotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraRotateRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H376L367.572 73.527C358.205 48.549 334.326 32 307.648 32H204.385C177.736 32 153.875 48.512 144.486 73.453L136 96H64C28.654 96 0 124.652 0 160V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.652 483.346 96 448 96ZM464 416C464 424.822 456.822 432 448 432H64C55.178 432 48 424.822 48 416V160C48 151.178 55.178 144 64 144H169.221L180.924 112.91L189.41 90.363C191.742 84.164 197.762 80 204.385 80H307.648C314.279 80 320.301 84.172 322.629 90.381L331.057 112.854L342.736 144H448C456.822 144 464 151.178 464 160V416ZM346.881 187.65L332.117 202.42C311.246 183.785 284.613 173 256 173C220.359 173 187.312 189.125 165.359 217.219C157.188 227.672 159.047 242.75 169.484 250.906C179.906 259.062 195 257.203 203.172 246.781C225.674 217.994 270.346 214.525 298.256 236.297L283.643 250.918C275.926 258.639 281.283 271.736 292.09 272H359.445C364.186 271.867 368 268.029 368 263.26V196.391C368 185.371 354.674 179.855 346.881 187.65ZM308.828 329.219C286.326 358.006 241.654 361.475 213.744 339.703L228.357 325.082C236.074 317.361 230.717 304.264 219.91 304H152.555C147.814 304.133 144 307.971 144 312.74V379.609C144 390.629 157.326 396.145 165.119 388.35L179.883 373.58C200.754 392.215 227.387 403 256 403C291.641 403 324.688 386.875 346.641 358.781C354.812 348.328 352.953 333.25 342.516 325.094C332.078 316.906 317 318.797 308.828 329.219Z" })
  }
));
CameraRotateRegular.displayName = "CameraRotateRegular";
var CameraRotate_default = CameraRotateRegular;
