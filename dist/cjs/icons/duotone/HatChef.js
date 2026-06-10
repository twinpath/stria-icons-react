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
var HatChef_exports = {};
__export(HatChef_exports, {
  default: () => HatChef_default
});
module.exports = __toCommonJS(HatChef_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatChefDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512.001 128C512.001 169.75 448.001 320 448.001 320H373.553L399.782 162.625C401.251 153.906 395.344 145.656 386.626 144.219C378.157 142.625 369.688 148.625 368.219 157.375L341.116 320H272.001V160C272.001 151.156 264.844 144 256.001 144S240.001 151.156 240.001 160V320H170.885L143.782 157.375C142.313 148.625 133.938 142.625 125.376 144.219C116.657 145.656 110.751 153.906 112.219 162.625L138.448 320H64.001C64.001 320 0.001 169.75 0.001 128C-0.124 91.5 20.376 58.125 53.126 42C85.751 25.75 124.751 29.5 153.751 51.75C177.126 20.5 214 0 256.001 0C298 0 334.876 20.5 358.251 51.75C374.876 39 395.126 32.125 416.001 32C469.001 32 512.001 75 512.001 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 320V480C448 497.602 433.6 512 416 512H96C78.4 512 64 497.602 64 480V320H138.447L112.219 162.625C110.75 153.906 116.656 145.656 125.375 144.219C133.938 142.625 142.313 148.625 143.781 157.375L170.885 320H240V160C240 151.156 247.156 144 256 144S272 151.156 272 160V320H341.115L368.219 157.375C369.688 148.625 378.156 142.625 386.625 144.219C395.344 145.656 401.25 153.906 399.781 162.625L373.553 320H448Z" })
    ]
  }
));
HatChefDuotone.displayName = "HatChefDuotone";
var HatChef_default = HatChefDuotone;
