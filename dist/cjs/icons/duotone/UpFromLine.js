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
var UpFromLine_exports = {};
__export(UpFromLine_exports, {
  default: () => UpFromLine_default
});
module.exports = __toCommonJS(UpFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpFromLineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 416H32C14.327 416 0 430.327 0 448V448C0 465.673 14.327 480 32 480H352C369.673 480 384 465.673 384 448V448C384 430.327 369.673 416 352 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M33.955 209.306C30.173 200.503 31.97 190.277 38.548 183.303L174.548 39.2C183.611 29.6 200.392 29.6 209.455 39.2L345.455 183.303C352.033 190.277 353.83 200.503 350.048 209.306C346.251 218.11 337.58 223.817 328.001 223.817H256.001V351.908C256.001 369.595 241.675 383.931 224.001 383.931H160.001C142.33 383.931 128.001 369.595 128.001 351.908V223.817H56.001C46.423 223.817 37.751 218.11 33.955 209.306Z" })
    ]
  }
));
UpFromLineDuotone.displayName = "UpFromLineDuotone";
var UpFromLine_default = UpFromLineDuotone;
