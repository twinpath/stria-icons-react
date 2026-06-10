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
var Church_exports = {};
__export(Church_exports, {
  default: () => Church_default
});
module.exports = __toCommonJS(Church_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChurchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 396V480C0 497.672 14.328 512 32 512H160V306.254L19.375 366.5C7.625 371.625 0 383.125 0 396ZM620.625 366.5L480 306.254V512H608C625.674 512 640 497.672 640 480V396C640 383.125 632.375 371.625 620.625 366.5Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464.5 246.654L352 179.279V128.029H400C408.875 128.029 416 120.904 416 112.029V80.029C416 71.154 408.875 64.029 400 64.029H352V16.029C352 7.154 344.875 0.029 336 0.029H304C295.125 0.029 288 7.154 288 16.029V64.029H240C231.125 64.029 224 71.154 224 80.029V112.029C224 120.904 231.125 128.029 240 128.029H288V179.279L175.5 246.654C165.875 252.529 160 262.904 160 274.154V512.029H256V416.029C256 380.654 284.625 352.029 320 352.029S384 380.654 384 416.029V512.029H480V274.154C480 262.904 474.125 252.529 464.5 246.654Z" })
    ]
  }
));
ChurchDuotone.displayName = "ChurchDuotone";
var Church_default = ChurchDuotone;
