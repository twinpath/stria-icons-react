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
var UtilityPole_exports = {};
__export(UtilityPole_exports, {
  default: () => UtilityPole_default
});
module.exports = __toCommonJS(UtilityPole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UtilityPoleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 32C499.594 32 496 35.578 496 40V80H448V40C448 35.578 444.406 32 440 32S432 35.578 432 40V80H288V24C288 10.766 277.219 0 264 0H248C234.781 0 224 10.766 224 24V80H80V40C80 35.578 76.406 32 72 32S64 35.578 64 40V80H16V40C16 35.578 12.406 32 8 32S0 35.578 0 40V112C0 129.672 14.326 144 32 144H97.578L224 228.281V504C224 508.422 227.594 512 232 512S240 508.422 240 504V144H272V504C272 508.422 275.594 512 280 512S288 508.422 288 504V228.281L414.422 144H480C497.674 144 512 129.672 512 112V40C512 35.578 508.406 32 504 32ZM240 24C240 19.594 243.594 16 248 16H264C268.406 16 272 19.594 272 24V80H240V24ZM224 209.051L126.422 144H224V209.051ZM288 209.051V144H385.578L288 209.051ZM496 112C496 120.822 488.822 128 480 128H32C23.178 128 16 120.822 16 112V96H496V112Z" })
  }
));
UtilityPoleThin.displayName = "UtilityPoleThin";
var UtilityPole_default = UtilityPoleThin;
