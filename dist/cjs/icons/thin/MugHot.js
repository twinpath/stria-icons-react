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
var MugHot_exports = {};
__export(MugHot_exports, {
  default: () => MugHot_default
});
module.exports = __toCommonJS(MugHot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugHotThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 192H24C17.625 192 11.5 194.5 7 199S0 209.625 0 216V416C0 469 43 512 96 512H288C341 512 384 469 384 416V384H416C468.938 384 512 340.938 512 288S468.938 192 416 192ZM368 416C368 460.111 332.111 496 288 496H96C51.889 496 16 460.111 16 416V216C16 210.871 20.172 208 24 208H368V416ZM416 368H384V208H416C460.109 208 496 243.891 496 288S460.109 368 416 368ZM104.203 91.719L112.641 95.937C131.984 105.594 144 125.031 144 146.672V152C144 156.422 147.578 160 152 160S160 156.422 160 152V146.672C160 118.938 144.594 94.001 119.797 81.625L111.359 77.406C92.016 67.734 80 48.297 80 26.672V8C80 3.578 76.422 0 72 0S64 3.578 64 8V26.672C64 54.391 79.406 79.312 104.203 91.719ZM232.203 91.719L240.641 95.937C259.984 105.594 272 125.031 272 146.672V152C272 156.422 275.578 160 280 160S288 156.422 288 152V146.672C288 118.938 272.594 94.001 247.797 81.625L239.359 77.406C220.016 67.734 208 48.297 208 26.672V8C208 3.578 204.422 0 200 0S192 3.578 192 8V26.672C192 54.391 207.406 79.312 232.203 91.719Z" })
  }
));
MugHotThin.displayName = "MugHotThin";
var MugHot_default = MugHotThin;
