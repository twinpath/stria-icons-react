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
var PrescriptionBottle_exports = {};
__export(PrescriptionBottle_exports, {
  default: () => PrescriptionBottle_default
});
module.exports = __toCommonJS(PrescriptionBottle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrescriptionBottleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 176H144C152.801 176 160 183.199 160 192C160 200.799 152.801 208 144 208H32V272H144C152.801 272 160 279.199 160 288C160 296.799 152.801 304 144 304H32V368H144C152.801 368 160 375.199 160 384C160 392.799 152.801 400 144 400H32V448C32 483.199 60.801 512 96 512H288C323.199 512 352 483.199 352 448V96H32V176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 0H24C10.75 0 0 10.75 0 24V72C0 85.25 10.75 96 24 96H360C373.25 96 384 85.25 384 72V24C384 10.75 373.25 0 360 0ZM144 176H32V208H144C152.836 208 160 200.836 160 192S152.836 176 144 176ZM144 272H32V304H144C152.836 304 160 296.836 160 288S152.836 272 144 272ZM144 368H32V400H144C152.836 400 160 392.836 160 384S152.836 368 144 368Z" })
    ]
  }
));
PrescriptionBottleDuotone.displayName = "PrescriptionBottleDuotone";
var PrescriptionBottle_default = PrescriptionBottleDuotone;
