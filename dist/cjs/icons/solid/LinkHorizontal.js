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
var LinkHorizontal_exports = {};
__export(LinkHorizontal_exports, {
  default: () => LinkHorizontal_default
});
module.exports = __toCommonJS(LinkHorizontal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkHorizontalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160.811 288H144C99.889 288 64 252.111 64 208S99.889 128 144 128H304C348.111 128 384 163.889 384 208S348.111 288 304 288H290.947C289.154 293.029 288 298.363 288 304C288 326.021 302.99 344.432 323.242 350.061C393.58 340.57 448 280.938 448 208C448 128.471 383.529 64 304 64H144C64.471 64 0 128.471 0 208S64.471 352 144 352H166.824C162.48 336.717 160 320.656 160 304C160 298.6 160.332 293.277 160.811 288ZM496 160H473.176C477.52 175.283 480 191.344 480 208C480 213.4 479.668 218.723 479.189 224H496C540.111 224 576 259.889 576 304S540.111 384 496 384H336C291.889 384 256 348.111 256 304S291.889 224 336 224H349.053C350.846 218.971 352 213.637 352 208C352 185.979 337.01 167.568 316.758 161.939C246.42 171.43 192 231.062 192 304C192 383.529 256.471 448 336 448H496C575.529 448 640 383.529 640 304S575.529 160 496 160Z" })
  }
));
LinkHorizontalSolid.displayName = "LinkHorizontalSolid";
var LinkHorizontal_default = LinkHorizontalSolid;
