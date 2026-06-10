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
var ScaleUnbalancedFlip_exports = {};
__export(ScaleUnbalancedFlip_exports, {
  default: () => ScaleUnbalancedFlip_default
});
module.exports = __toCommonJS(ScaleUnbalancedFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScaleUnbalancedFlipSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M554.876 250.511C537.251 215.137 486.751 215.262 469.001 250.511C382.626 423.254 384.001 415.879 384.001 432.003C384.001 476.126 441.251 512 512.001 512S640.001 476.126 640.001 432.003C640.001 416.379 642.001 424.754 554.876 250.511ZM440.001 416.004L512.001 272.01L584.001 416.004H440.001ZM512.001 192.029C525.408 192.029 537.892 183.545 542.361 170.139C547.954 153.374 538.892 135.25 522.126 129.657L399.13 88.66C399.443 85.784 400.001 82.979 400.001 80.018C400.001 35.836 364.185 0.022 320.001 0.022C290.708 0.022 265.359 15.935 251.419 39.424L138.126 1.662C121.267 -3.963 103.22 5.162 97.642 21.896C92.048 38.661 101.111 56.785 117.876 62.378L244.218 104.49C251.279 126.331 267.171 144.144 288.001 153.261V448.003H144.001C117.492 448.003 96.001 469.492 96.001 496.001C96.001 504.836 103.163 512 112.001 512H336.001C344.837 512 352.001 504.836 352.001 496.001V153.261C357.044 151.054 361.757 148.297 366.193 145.146L501.876 190.373C505.236 191.498 508.658 192.029 512.001 192.029ZM256.001 304.009C256.001 288.384 258.001 296.759 170.876 122.516C153.251 87.143 102.751 87.268 85.001 122.516C-1.374 295.259 0.001 287.884 0.001 304.009C0.001 348.132 57.251 384.005 128.001 384.005S256.001 348.132 256.001 304.009ZM128.001 144.015L200.001 288.009H56.001L128.001 144.015Z" })
  }
));
ScaleUnbalancedFlipSolid.displayName = "ScaleUnbalancedFlipSolid";
var ScaleUnbalancedFlip_default = ScaleUnbalancedFlipSolid;
