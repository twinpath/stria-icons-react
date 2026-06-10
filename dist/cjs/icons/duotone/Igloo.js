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
var Igloo_exports = {};
__export(Igloo_exports, {
  default: () => Igloo_default
});
module.exports = __toCommonJS(Igloo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IglooDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 33.875C309.5 32.75 298.75 32 288 32C188.264 32 100.277 82.738 48.646 159.971H320V33.875ZM352 39.375V159.971H527.354C487.227 99.859 424.738 55.873 352 39.375ZM480 319.971H575.998C575.994 273.98 564.871 230.617 545.75 192H480V319.971ZM96 192H30.25C11.129 230.617 0.006 273.98 0.002 319.971H96V192ZM400 352V479.971L399.986 480H528C554.51 480 576 458.51 576 432V352H400ZM176 352H0V432C0 458.51 21.49 480 48 480H176.016L176 479.971V352ZM448 192H128V319.971H177.621C185.479 265.846 231.73 224 288 224S390.521 265.846 398.379 319.971H448V192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 319.971V191.971H545.709C540.211 180.924 534.254 170.154 527.436 159.971H352V39.354C341.52 36.973 330.879 35.051 320 33.848V159.971H48.564C41.746 170.154 35.789 180.924 30.291 191.971H96V319.971H0V351.971H176V479.971H208V336C208 291.816 243.816 256 288 256S368 291.816 368 336V479.971H400V351.971H576V319.971H480ZM448 319.971H398.379C390.521 265.846 344.27 224 288 224S185.479 265.846 177.621 319.971H128V191.971H448V319.971Z" })
    ]
  }
));
IglooDuotone.displayName = "IglooDuotone";
var Igloo_default = IglooDuotone;
