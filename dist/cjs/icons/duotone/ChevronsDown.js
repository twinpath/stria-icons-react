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
var ChevronsDown_exports = {};
__export(ChevronsDown_exports, {
  default: () => ChevronsDown_default
});
module.exports = __toCommonJS(ChevronsDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M196.344 276.914C204.078 284.32 214.047 288.008 224 288.008S243.922 284.32 251.656 276.914L435.658 100.922C451.611 85.641 452.174 60.332 436.908 44.363S396.315 27.832 380.346 43.113L224 192.672L67.654 43.113C51.686 27.863 26.358 28.332 11.092 44.363C-4.174 60.332 -3.611 85.641 12.342 100.922L196.344 276.914Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M435.658 292.914L251.656 468.906C243.922 476.312 233.953 480 224 480S204.078 476.312 196.344 468.906L12.342 292.914C-3.611 277.633 -4.174 252.32 11.092 236.352C26.358 220.355 51.686 219.855 67.654 235.105L224 384.66L380.346 235.105C396.315 219.855 421.643 220.387 436.908 236.352C452.174 252.32 451.611 277.633 435.658 292.914Z" })
    ]
  }
));
ChevronsDownDuotone.displayName = "ChevronsDownDuotone";
var ChevronsDown_default = ChevronsDownDuotone;
