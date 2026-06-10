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
var Vihara_exports = {};
__export(Vihara_exports, {
  default: () => Vihara_default
});
module.exports = __toCommonJS(Vihara_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ViharaRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632.873 385L543.999 320V288L599.123 264.375C610.998 256.5 610.998 234.125 599.123 226.25L479.999 160V128L507.249 111.75C514.999 104 512.874 91 503.124 86.125L320 0L136.876 86.125C127.126 91 125.001 104 132.751 111.75L160.001 128V160L40.877 226.25C29.002 234.125 29.002 256.5 40.877 264.375L96.001 288V320L7.127 385C-3.123 394 -2.123 414.5 8.877 421.75L64.002 448V488C64.002 501.255 74.747 512 88.001 512H88.002C101.256 512 112.001 501.255 112.001 488V448H296V488C296 501.255 306.745 512 320 512H320C333.255 512 344 501.255 344 488V448H527.999V488C527.999 501.255 538.744 512 551.998 512H551.999C565.253 512 575.998 501.255 575.998 488V448L631.123 421.75C642.123 414.5 643.123 394 632.873 385ZM320 53L377.375 80H262.625L320 53ZM208.001 128H431.999V160H208.001V128ZM172.501 208H467.499L525.124 240H114.876L172.501 208ZM144.001 288H495.999V320H144.001V288ZM111.626 368H528.374L575.998 400H64.002L111.626 368Z" })
  }
));
ViharaRegular.displayName = "ViharaRegular";
var Vihara_default = ViharaRegular;
