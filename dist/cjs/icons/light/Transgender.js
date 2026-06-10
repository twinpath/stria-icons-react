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
const TransgenderLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M494.77 9.891C493.148 5.973 490.027 2.852 486.109 1.23C484.154 0.422 482.082 0 480 0H368C359.156 0 352 7.156 352 16S359.156 32 368 32H441.375L376.916 96.459C345.346 66.514 302.832 48 256 48C158.969 48 80 126.969 80 224C80 315.631 150.445 391.066 240 399.189V432H192C183.156 432 176 439.156 176 448S183.156 464 192 464H240V496C240 504.844 247.156 512 256 512S272 504.844 272 496V464H320C328.844 464 336 456.844 336 448S328.844 432 320 432H272V399.189C361.555 391.066 432 315.631 432 224C432 185.324 419.303 149.637 398.068 120.557L464 54.625V128C464 136.844 471.156 144 480 144S496 136.844 496 128V16C496 13.918 495.578 11.846 494.77 9.891ZM256 368C176.594 368 112 303.406 112 224S176.594 80 256 80S400 144.594 400 224S335.406 368 256 368Z" })
  }
));
TransgenderLight.displayName = "TransgenderLight";
var Transgender_default = TransgenderLight;
