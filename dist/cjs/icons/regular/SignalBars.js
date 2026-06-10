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
var SignalBars_exports = {};
__export(SignalBars_exports, {
  default: () => SignalBars_default
});
module.exports = __toCommonJS(SignalBars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalBarsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 384H64C46.328 384 32 398.328 32 416V480C32 497.672 46.328 512 64 512H128C145.674 512 160 497.672 160 480V416C160 398.328 145.674 384 128 384ZM112 464H80V432H112V464ZM280 256H216C198.328 256 184 270.328 184 288V480C184 497.672 198.328 512 216 512H280C297.674 512 312 497.672 312 480V288C312 270.328 297.674 256 280 256ZM264 464H232V304H264V464ZM584 0H520C502.328 0 488 14.328 488 32V480C488 497.672 502.328 512 520 512H584C601.674 512 616 497.672 616 480V32C616 14.328 601.674 0 584 0ZM568 464H536V48H568V464ZM432 128H368C350.328 128 336 142.328 336 160V480C336 497.672 350.328 512 368 512H432C449.674 512 464 497.672 464 480V160C464 142.328 449.674 128 432 128ZM416 464H384V176H416V464Z" })
  }
));
SignalBarsRegular.displayName = "SignalBarsRegular";
var SignalBars_default = SignalBarsRegular;
