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
const CameraRotateSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H376L363.625 63.125C356.625 44.375 338.75 32 318.75 32H193.25C173.25 32 155.25 44.375 148.25 63.125L136 96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM356.891 366.781C332.438 398.062 295.672 416 256 416C224.217 416 194.631 404.057 171.416 383.395L152.135 402.686C143.23 411.594 128 405.289 128 392.695V316.275C128 310.822 132.359 306.438 137.775 306.285H214.754C227.105 306.588 233.227 321.557 224.408 330.379L205.135 349.66C219.324 361.412 237.107 368 256 368C280.797 368 303.781 356.781 319.078 337.219C327.25 326.781 342.328 324.937 352.766 333.094S365.062 356.344 356.891 366.781ZM384 259.725C384 265.178 379.641 269.562 374.225 269.715H297.246C284.895 269.412 278.773 254.443 287.592 245.621L306.865 226.34C292.676 214.588 274.893 208 256 208C231.203 208 208.219 219.219 192.922 238.781C184.75 249.219 169.656 251.078 159.234 242.906C148.797 234.75 146.938 219.656 155.109 209.219C179.562 177.938 216.328 160 256 160C287.783 160 317.369 171.943 340.584 192.605L359.865 173.314C368.77 164.406 384 170.711 384 183.305V259.725Z" })
  }
));
CameraRotateSolid.displayName = "CameraRotateSolid";
var CameraRotate_default = CameraRotateSolid;
