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
var Transgender_exports = {};
__export(Transgender_exports, {
  default: () => Transgender_default
});
module.exports = __toCommonJS(Transgender_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransgenderSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 0H367.631C346.248 0 335.541 25.852 350.66 40.971L380.217 70.527L353.107 97.639C326.109 76.854 292.705 64 256 64C167.635 64 96 135.635 96 224C96 301.404 150.971 365.947 224 380.775V400H192C183.164 400 176 407.162 176 416V448C176 456.836 183.164 464 192 464H224V496C224 504.836 231.164 512 240 512H272C280.838 512 288 504.836 288 496V464H320C328.838 464 336 456.836 336 448V416C336 407.162 328.838 400 320 400H288V380.775C361.029 365.947 416 301.404 416 224C416 195.615 407.982 169.348 395.02 146.234L425.473 115.783L455.029 145.34C470.148 160.459 496 149.752 496 128.369V16C496 7.164 488.836 0 480 0ZM256 304C211.889 304 176 268.111 176 224C176 179.887 211.889 144 256 144C300.113 144 336 179.887 336 224C336 268.111 300.113 304 256 304Z" })
  }
));
TransgenderSolid.displayName = "TransgenderSolid";
var Transgender_default = TransgenderSolid;
