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
var ParachuteBox_exports = {};
__export(ParachuteBox_exports, {
  default: () => ParachuteBox_default
});
module.exports = __toCommonJS(ParachuteBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ParachuteBoxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.893 175C502.767 99.375 433.512 42.625 353.632 16.25C389.884 55.5 415.761 116.375 416.011 191.125L314.629 320H280.002V192H384.009C384.009 76.75 315.129 0 256 0S127.991 76.75 127.991 192H231.998V320H197.371L95.989 191.125C96.239 116.375 122.116 55.5 158.368 16.25C78.488 42.75 9.233 99.5 0.107 175C-1.018 184.125 6.858 192 16.109 192H35.61L160.243 350.5C160.243 351 159.993 351.5 159.993 352V480C159.993 497.75 174.244 512 191.996 512H320.004C337.756 512 352.007 497.75 352.007 480V352C352.007 351.5 351.757 351 351.757 350.5L476.39 192H495.891C505.142 192 513.018 184.25 511.893 175ZM304.003 456C304.003 460.375 300.378 464 296.003 464H215.997C211.622 464 207.997 460.375 207.997 456V376C207.997 371.625 211.622 368 215.997 368H296.003C300.378 368 304.003 371.625 304.003 376V456Z" })
  }
));
ParachuteBoxRegular.displayName = "ParachuteBoxRegular";
var ParachuteBox_default = ParachuteBoxRegular;
