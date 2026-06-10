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
var ChevronsUp_exports = {};
__export(ChevronsUp_exports, {
  default: () => ChevronsUp_default
});
module.exports = __toCommonJS(ChevronsUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M251.656 235.086C243.922 227.68 233.953 223.992 224 223.992S204.078 227.68 196.344 235.086L12.342 411.078C-3.611 426.359 -4.174 451.668 11.092 467.637C26.358 483.602 51.686 484.164 67.654 468.887L224 319.328L380.346 468.887C396.315 484.133 421.643 483.664 436.908 467.637C452.174 451.668 451.611 426.359 435.658 411.078L251.656 235.086Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M67.654 276.895L224 127.34L380.346 276.895C396.315 292.145 421.643 291.645 436.908 275.645C452.174 259.676 451.611 234.367 435.658 219.086L251.656 43.094C243.922 35.688 233.953 32 224 32S204.078 35.688 196.344 43.094L12.342 219.086C-3.611 234.367 -4.174 259.676 11.092 275.645S51.686 292.145 67.654 276.895Z" })
    ]
  }
));
ChevronsUpDuotone.displayName = "ChevronsUpDuotone";
var ChevronsUp_default = ChevronsUpDuotone;
