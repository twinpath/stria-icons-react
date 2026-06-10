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
var PresentationScreen_exports = {};
__export(PresentationScreen_exports, {
  default: () => PresentationScreen_default
});
module.exports = __toCommonJS(PresentationScreen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PresentationScreenSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M543.998 0H31.998C14.326 0 0 14.326 0 31.998V32.008C0 49.68 14.327 64.007 32 64.007H32V320.036C32 337.638 46.402 352.04 64.004 352.04H256V386.794L180.75 462.053C174.494 468.31 174.494 478.548 180.75 484.805L203.25 507.307C209.506 513.564 219.744 513.564 226 507.307L288 445.3L350 507.307C356.256 513.564 366.494 513.564 372.75 507.307L395.25 484.805C401.506 478.548 401.506 468.31 395.25 462.053L320 386.794V352.04H512C529.6 352.04 544 337.64 544 320.04V64.007H544C561.673 64.007 576 49.68 576 32.008V32.002C576 14.328 561.672 0 543.998 0ZM480 288.033H96V64.007H480V288.033Z" })
  }
));
PresentationScreenSolid.displayName = "PresentationScreenSolid";
var PresentationScreen_default = PresentationScreenSolid;
