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
var MartiniGlass_exports = {};
__export(MartiniGlass_exports, {
  default: () => MartiniGlass_default
});
module.exports = __toCommonJS(MartiniGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MartiniGlassRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M279.962 279.625L501.962 57.625C523.212 36.375 508.212 0 478.212 0H33.712C3.712 0 -11.288 36.375 9.962 57.625L128.001 175.664V176H128.337L231.962 279.625V463L220.762 464H152.001C138.751 464 128.001 474.75 128.001 488S138.751 512 152.001 512H360.001C373.251 512 384.001 501.25 384.001 488S373.251 464 360.001 464H281.907C280.206 463.779 278.704 463 276.942 463H279.962V279.625ZM443.712 48L363.712 128H148.212L68.212 48H443.712ZM255.962 235.75L196.212 176H315.712L255.962 235.75Z" })
  }
));
MartiniGlassRegular.displayName = "MartiniGlassRegular";
var MartiniGlass_default = MartiniGlassRegular;
