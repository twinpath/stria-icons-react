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
const LinkHorizontalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 304C640 383.529 575.529 448 496 448H336C256.471 448 192 383.529 192 304S256.471 160 336 160H367.592C377.744 173.412 384 189.92 384 208C384 213.518 383.242 218.82 382.145 224H336C291.889 224 256 259.889 256 304S291.889 384 336 384H496C540.111 384 576 348.111 576 304S540.111 224 496 224H446.445C447.117 218.711 448 213.482 448 208C448 191.078 444.545 175.082 439.184 160H496C575.529 160 640 224.471 640 304Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 208C0 128.471 64.471 64 144 64H304C383.529 64 448 128.471 448 208S383.529 352 304 352H272.408C262.256 338.588 256 322.08 256 304C256 298.482 256.758 293.18 257.855 288H304C348.111 288 384 252.111 384 208S348.111 128 304 128H144C99.889 128 64 163.889 64 208S99.889 288 144 288H193.555C192.883 293.289 192 298.518 192 304C192 320.922 195.455 336.918 200.816 352H144C64.471 352 0 287.529 0 208Z" })
    ]
  }
));
LinkHorizontalDuotone.displayName = "LinkHorizontalDuotone";
var LinkHorizontal_default = LinkHorizontalDuotone;
