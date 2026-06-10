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
var SquareUp_exports = {};
__export(SquareUp_exports, {
  default: () => SquareUp_default
});
module.exports = __toCommonJS(SquareUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM350.781 246.125C348.312 252.109 342.469 256 336 256H272V352C272 369.673 257.673 384 240 384H208C190.327 384 176 369.673 176 352V256H112C105.531 256 99.688 252.109 97.219 246.125C94.734 240.141 96.109 233.266 100.688 228.688L212.688 116.688C218.935 110.44 229.065 110.44 235.312 116.688L347.312 228.688C351.891 233.266 353.266 240.141 350.781 246.125Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.785 246.125C348.316 252.109 342.472 256 336.004 256H272.004V360C272.004 373.255 261.258 384 248.004 384H200.004C186.749 384 176.004 373.255 176.004 360V256H112.004C105.535 256 99.691 252.109 97.222 246.125C94.738 240.141 96.113 233.266 100.691 228.688L212.691 116.688C218.939 110.44 229.068 110.44 235.316 116.688L347.316 228.688C351.894 233.266 353.269 240.141 350.785 246.125Z" })
    ]
  }
));
SquareUpDuotone.displayName = "SquareUpDuotone";
var SquareUp_default = SquareUpDuotone;
