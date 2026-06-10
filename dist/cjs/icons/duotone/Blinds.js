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
var Blinds_exports = {};
__export(Blinds_exports, {
  default: () => Blinds_default
});
module.exports = __toCommonJS(Blinds_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlindsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 227V160H16L0 256H67C71.75 242.375 82.375 231.75 96 227ZM96 64H10.707L0 128H96V64ZM501.293 64H128V128H512L501.293 64ZM128 160V227C141.625 231.75 152.25 242.375 157 256H512L496 160H128ZM157 288C150.375 307.125 132.25 320 112 320S73.625 307.125 67 288H16L0 384H512L496 288H157ZM16 416L0 512H512L496 416H16Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 16V48C512 56.836 504.836 64 496 64H128V226.938C146.6 233.549 160 251.131 160 272C160 298.51 138.51 320 112 320S64 298.51 64 272C64 251.131 77.4 233.549 96 226.938V64H16C7.164 64 0 56.836 0 48V16C0 7.162 7.164 0 16 0H496C504.836 0 512 7.162 512 16Z" })
    ]
  }
));
BlindsDuotone.displayName = "BlindsDuotone";
var Blinds_default = BlindsDuotone;
