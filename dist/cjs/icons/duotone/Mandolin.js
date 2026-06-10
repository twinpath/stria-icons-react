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
var Mandolin_exports = {};
__export(Mandolin_exports, {
  default: () => Mandolin_default
});
module.exports = __toCommonJS(Mandolin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MandolinDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M294.624 262.625L249.374 217.375L274.505 192.242C90.386 190.617 46.011 240.988 30.761 256.234C-16.114 303.102 -8.739 406.587 48.261 463.704C105.386 520.822 208.886 528.072 255.761 481.204C271.011 465.954 321.386 421.587 319.761 237.488L294.624 262.625ZM208.011 351.969C181.511 351.969 160.011 330.477 160.011 303.977C160.011 277.484 181.511 255.984 208.011 255.984S256.011 277.484 256.011 303.977C256.011 330.477 234.511 351.969 208.011 351.969Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.137 70.511L469.137 134.499C464.762 141.374 457.887 146.499 450.012 148.499L393.887 162.999L393.881 162.992L294.25 262.625L249 217.375L348.643 117.734L363.137 61.64C365.137 53.64 370.137 46.889 377.137 42.514L441.137 2.397C447.512 -1.478 455.637 -0.603 460.887 4.647L506.887 50.639C512.262 56.015 513.137 64.14 509.137 70.511Z" })
    ]
  }
));
MandolinDuotone.displayName = "MandolinDuotone";
var Mandolin_default = MandolinDuotone;
