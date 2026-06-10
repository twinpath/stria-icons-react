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
var TreeChristmas_exports = {};
__export(TreeChristmas_exports, {
  default: () => TreeChristmas_default
});
module.exports = __toCommonJS(TreeChristmas_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeChristmasRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232.001 256.125C218.751 256.125 208.001 266.875 208.001 280.125S218.751 304.125 232.001 304.125S256.001 293.375 256.001 280.125S245.251 256.125 232.001 256.125ZM502.124 434.875L435.624 347.875C446.249 343.125 454.999 334.625 459.874 323.5C467.624 306.125 464.249 285.875 451.499 271.875L322.126 128.418L310.329 134.344L293.216 168.418L415.999 304.125H341.626L463.999 464.125H48.003L170.376 304.125H96.003L218.796 168.404L201.673 134.344L189.878 128.414L60.503 271.875C47.753 285.875 44.378 306.125 52.128 323.5C57.003 334.625 65.753 343.125 76.378 347.875L9.878 434.875C-1.247 449.375 -3.122 469 5.003 485.375S29.753 512 48.003 512H463.999C482.249 512 498.874 501.625 506.999 485.375C515.124 469 513.249 449.375 502.124 434.875ZM336.001 376.125C336.001 362.875 325.251 352.125 312.001 352.125S288.001 362.875 288.001 376.125S298.751 400.125 312.001 400.125S336.001 389.375 336.001 376.125ZM181.026 88.148L225.507 110.494L247.852 154.975C249.534 158.324 252.768 160 256.001 160S262.466 158.324 264.149 154.975L286.495 110.494L330.975 88.148C337.676 84.783 337.676 75.217 330.975 71.85L286.495 49.506L264.149 5.025C260.782 -1.676 251.217 -1.676 247.852 5.025L225.507 49.506L181.026 71.85C174.325 75.217 174.325 84.783 181.026 88.148Z" })
  }
));
TreeChristmasRegular.displayName = "TreeChristmasRegular";
var TreeChristmas_default = TreeChristmasRegular;
